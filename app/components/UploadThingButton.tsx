"use client";
 
import { UploadButton } from "@/app/utils/uploadthing";
import axios from "axios";
import React from 'react'

const UploadThingButton = ({setImageUrl,oldUrl}:{setImageUrl:React.Dispatch<React.SetStateAction<string>>,oldUrl:string}) => {
  const deleteValue = async (value:string) => {
    await axios.delete("/api/uploadthing", {
      data: {
        url: value,
      },
    });
  };
  return (
    <div>    <UploadButton 

    className=" ut-button:bg-purple-700 "
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the response
      console.log("Files: ", res);
      console.log( res[0].url);
      setImageUrl(res[0].url)
    //   console.log("url": )
      alert("Upload Completed");
      deleteValue(oldUrl)
      alert("deleting Completed");

    }}
    onUploadError={(error: Error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
    
    
  /></div>
  )
}

export default UploadThingButton