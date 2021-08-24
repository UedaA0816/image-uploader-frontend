import React from "react"
import { ImageUploader } from "../../components/ImageUploader"

const Home:React.FC = () => {
    
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <ImageUploader/>
      <span className="absolute bottom-6 text-sm font-medium text-gray-500 w-full text-center">created by ueda akihiro - devChallenges.io</span>
    </div>
  )
}

export default Home