import React from "react";
import { ImageForm } from "./ImageForm";

export const ImageUploader:React.VFC = ()=>{
  const imageSelectHandler = (file:File)=>{
    console.log(file)
  }
  return (
    <>
      <ImageForm imageSelectHandler={imageSelectHandler} />
    </>
  )
}