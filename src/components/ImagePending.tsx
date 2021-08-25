import React from "react";
import { ImageContainer } from "./ImageContainer";

export const ImagePending:React.VFC = ()=>{
  return (
    <ImageContainer>
      <h1 className="text-lg font-medium text-gray-800">Uploading...</h1>
      <div className="mt-8 mb-2">
        <Progress />
      </div>
    </ImageContainer>
  )
}

const Progress = () => {
  return <progress style={{all:"revert",width:"340px"}}></progress>
}