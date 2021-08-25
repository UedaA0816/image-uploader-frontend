import React from "react";
import { ImageForm } from "./ImageForm";
import { ImagePending } from "./ImagePending";
import { ImageComplete } from "./ImageComplete";

export const ImageUploader:React.VFC = ()=>{
  const imageSelectHandler = (file:File)=>{
    console.log(file)
  }
  return (
    <>
      {/* <ImageForm imageSelectHandler={imageSelectHandler} /> */}
      {/* <ImagePending /> */}
      <ImageComplete url="https://placehold.jp/1000x500.png"/>
    </>
  )
}