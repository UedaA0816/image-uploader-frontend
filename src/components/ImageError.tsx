import React, { useContext } from "react";
import { StateContext } from "../context/state/state";
import { ImageButton } from "./ImageButton";
import { ImageContainer } from "./ImageContainer";

type ImageErrorProps = { message: string }

export const ImageError:React.VFC<ImageErrorProps> = ({message})=>{
  const {state , dispatch} = useContext(StateContext)
  const clickHandler:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    dispatch({type:"init"})
  }
  return (
    <ImageContainer>
      <h1 className="text-lg font-medium text-gray-800">Error</h1>
      <p>{message}</p>
      <div className="text-center mt-4">
        <ImageButton onClick={clickHandler}>Back</ImageButton>
      </div>
    </ImageContainer>
  )
}
