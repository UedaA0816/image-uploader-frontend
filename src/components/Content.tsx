import React from "react";

type ContentProps = {content:string}

export const Content:React.FC<ContentProps> = ({content})=>{
  return (
    <div>
      {content}
    </div>
  )
}