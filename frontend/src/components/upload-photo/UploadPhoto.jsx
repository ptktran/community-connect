import React, { useState } from 'react';

export default function UploadPhoto () {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setSelectedImage(URL.createObjectURL(file))
    setImageName(file.name);
    // You can perform further processing or send the file to a server here
  }

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageName('');
  };

  return (
    <div className="flex items-center flex-wrap my-2">
      <input type="file" id="file-input" onChange={handleImageUpload} className="hidden" />
      <label htmlFor="file-input" className="bg-gray-comps mr-4 border p-2 rounded-lg text-sm hover:bg-gray-hover transition-color ease duration-150 cursor-pointer">Upload</label>
      {selectedImage && <button onClick={handleRemoveImage} className="bg-red-500 p-2 rounded-lg text-sm text-white hover:bg-red-500/90 transition-color ease duration-150"><img src="src/assets/icons/trash.svg"/></button>}
      {selectedImage && <h1 className="text-sm ml-4">{imageName}</h1>}
      <div>
        {selectedImage && <img src={selectedImage} alt={imageName} className="w-1/2 mt-4 m-auto rounded-lg" />}
      </div>
    </div>
  )
}