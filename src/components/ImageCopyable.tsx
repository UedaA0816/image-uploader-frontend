import React, { useRef, useState } from 'react';
import { ImageCopyableButton } from './ImageCopyableButton';

type ImageCopyableProps = {
  value: string
}

export const ImageCopyable: React.VFC<ImageCopyableProps> = ({ value }) => {

  const [isCopy , setCopy ] = useState(false)

  const inputElement = useRef<HTMLInputElement | null>(null)
  const copyToClipboard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (inputElement.current) {
      if(isCopy){
        setCopy(false)
      }else{
        inputElement.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        setCopy(true)
        inputElement.current.focus()
      }
    }
  };
  const blurHandler:React.FocusEventHandler<HTMLInputElement> = ()=>{
    setTimeout(()=>setCopy(false),100)
  }

  return (
    <div className="flex p-0.5 pl-2 rounded-lg border-solid border border-gray-300 bg-gray-200">
      <input type="text" value={value} ref={inputElement} readOnly onBlur={blurHandler} className="flex-grow bg-transparent outline-none mr-1" />
      <ImageCopyableButton onClick={copyToClipboard}>{isCopy ? "  Copied!  ":"Copy Link"}</ImageCopyableButton>
    </div>
  )
}
