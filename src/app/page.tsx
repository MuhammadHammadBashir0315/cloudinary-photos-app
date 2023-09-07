"use client"

import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export default function Home() {
  const [imageId , setImageId] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onUpload={(result : any)=>{
        setImageId(result.info.public_id)
      }} uploadPreset="viek9otb" />
      {imageId && (<CldImage 
      width='500'
      height='300'
      src={imageId}
      alt='image'/>)}
      
    </main>
  )
}
