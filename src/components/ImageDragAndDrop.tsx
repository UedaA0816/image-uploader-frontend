import { useState } from 'react';
import styled from 'styled-components';
import Image from "./../assets/image.svg"

type ImageDragAndDropProps = {onDrop:React.DragEventHandler<HTMLDivElement>}

export const ImageDragAndDrop:React.VFC<ImageDragAndDropProps> = ({onDrop})=>{
  const [isOver , setOver] = useState(false)
  const dropHandler:React.DragEventHandler<HTMLDivElement> = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    setOver(false)
    onDrop(e)
  }
  const dropOverHandler:React.DragEventHandler<HTMLDivElement> = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    setOver(true)
  }
  const dropLeaveHandler:React.DragEventHandler<HTMLDivElement> = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    setOver(false)
  }
  return (
  <DIV onDrop={dropHandler} onDragOver={dropOverHandler} onDragLeave={dropLeaveHandler} style={isOver?{"backgroundColor":"#d1dbea"}:{}}>
    <img className="m-auto" src={Image} alt="" />
    <p className="text-xs font-medium text-gray-500 mt-9">Drag &amp; Drop your image here</p>
  </DIV>
  )
}

const DIV = styled.div`
width:338px;
background: #F6F8FB;
border: 1px dashed #97BEF4;
box-sizing: border-box;
border-radius: 12px;
padding-top:36px;
padding-bottom:40px;
text-align:center;
transition:background-color .3s
`