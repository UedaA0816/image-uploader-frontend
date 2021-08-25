import React from "react";
import { ImageContainer } from "./ImageContainer";
import icon from "./../assets/check_circle_black_24dp.svg";
import { ImageCopyable } from "./ImageCopyable";

type ImageCompleteProps = {
  url:string
}

export const ImageComplete:React.VFC<ImageCompleteProps> = ({url})=>{
  return (
    <ImageContainer>
      <img src={icon} alt="" className="mx-auto text-green-500 w-9 h-9" />
      <h1 className="text-center text-lg font-medium text-gray-800 mt-3">Uploaded Successfully!</h1>
      <img src={url} alt="" className="max-w-sm w-full max-h-96 my-6 rounded-xl" />
      <ImageCopyable value={url}></ImageCopyable>
    </ImageContainer>
  )
}
