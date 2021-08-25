import React from "react";
import { ImageForm } from "./ImageForm";
import { ImagePending } from "./ImagePending";

export const ImageUploader:React.VFC = ()=>{
  const imageSelectHandler = (file:File)=>{
    console.log(file)
  }
  return (
    <>
      {/* <ImageForm imageSelectHandler={imageSelectHandler} /> */}
      <ImagePending />
    </>
  )
}