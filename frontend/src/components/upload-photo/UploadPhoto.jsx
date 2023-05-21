import React, { useState } from 'react';

export default function UploadPhoto () {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Create an upload preset in your Cloudinary account

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dh86c72qv/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error uploading image to Cloudinary');
      }

      const data = await response.json();
      const imageURL = data.secure_url;

      // Save the imageURL to your database using an API call or any other method
      saveImageToDatabase(imageURL);

      setSelectedImage(imageURL);
      setImageName(file.name);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const saveImageToDatabase = async (imageURL) => {
    try {
      await fetch('/saveImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageURL }),
      });
    } catch (error) {
      console.error('Error saving image to database:', error);
    }
  };

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