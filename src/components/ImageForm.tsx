import React, { useRef } from "react";
import { ImageButton } from "./ImageButton";
import { ImageContainer } from "./ImageContainer";
import { ImageDragAndDrop } from "./ImageDragAndDrop";

type ImageFormProps = {
  imageSelectHandler:(file:File)=>void
}

export const ImageForm:React.VFC<ImageFormProps> = ({imageSelectHandler})=>{

  const inputElement = useRef<HTMLInputElement|null>(null)

  const buttonHandler:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    if(inputElement.current) inputElement.current.click()
  }

  const selectHandler:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    if(e.target.files){
      const file = e.target.files[0]
      imageSelectHandler(file)
    }
  }
  const dropHandler:React.DragEventHandler<HTMLDivElement> = (e)=>{
    if(e.dataTransfer.files){
      const file = e.dataTransfer.files[0]
      imageSelectHandler(file)
    }
  }

  return (
    <ImageContainer>
      <h1 className="text-center text-lg font-medium text-gray-800">Upload your image</h1>
      <p className="text-center text-xs font-medium text-gray-500 mt-4 mb-8">file should be Jpeg,Png...</p>
      <ImageDragAndDrop onDrop={dropHandler}></ImageDragAndDrop>
      <p className="text-center text-xs font-medium text-gray-400 mt-4">Or</p>
      <div className="text-center mt-5">
        <ImageButton onClick={buttonHandler}>Choose a file</ImageButton>
      </div>
      <input ref={inputElement} onChange={selectHandler} type="file" className="hidden" />
    </ImageContainer>
  )
}