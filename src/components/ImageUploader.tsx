import React, { useReducer } from "react";
import { ImageForm } from "./ImageForm";
import { ImagePending } from "./ImagePending";
import { ImageComplete } from "./ImageComplete";

import { actions, initialState } from "./../reducer/actions/callapi";
import axios, { AxiosError } from "axios";

import { environment } from "./../environment"
import { ImageError } from "./ImageError";
import { StateContext } from "../context/state/state";

export const ImageUploader:React.VFC = ()=>{

  const [state, dispatch] = useReducer(actions,initialState)

  const imageSelectHandler = (file:File)=>{
    
    dispatch({type:"init"})
    dispatch({type:"pending"})
    const params = new FormData();
    params.append("file",file,file.name)
    axios.post(environment.api,params).then((res)=>{
      dispatch({type:"success",data:res.data})
    }).catch((err)=>{
      dispatch({type:"fail",data:err})
    })
  }

  const screen = () => {
    if(state.status === "none") return <ImageForm imageSelectHandler={imageSelectHandler} />
    if(state.status === "pending") return <ImagePending />
    if(state.status === "success") return <ImageComplete url={state.data.url}/>
    if(state.status === "fail") {
      if(state.data.isAxiosError){
        const error:AxiosError = state.data
        if(error.response?.data.code){
          const code = error.response?.data.code
          if(code === 40301) return <ImageError message="This file cannot be uploaded" />
        }
        return <p>Error :{JSON.stringify(error.toJSON())}</p>
      }
      return <p>Error</p>
    }
  }

  return (
    <>
      <StateContext.Provider value={{state,dispatch}}>
        {screen()}
      </StateContext.Provider>
    </>
  )
}