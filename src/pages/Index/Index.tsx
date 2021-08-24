import React from "react"
import { useRecoilValue } from "recoil"
import { titleState } from "../../atoms/TitleAtom"

const Index:React.FC = () => {
  const title = useRecoilValue(titleState)
  return <div>Index:{title}</div>
}




export default Index