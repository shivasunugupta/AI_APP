import {  Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {

  const imageStyle = ['Realistic', 'Ghibli style', 
    'Anime style', 'Cartoon style', 
    'Fantasy style', 'Realistic style',
     '3D style', 'Portrait style']

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('');

    const onSubmitHandler = async (e) => {
      e.preventDefault()
      try {
        setLoading(true)
        const formData = new FormData();
        formData.append('image' , input);



        const {data} = await axios.post('/api/ai/remove-image-background',
          formData,{headers : {Authorization: `Bearer ${await getToken()}`}}
        )

        if(data.success){
          setContent(data.content);
        } else {
          toast.error((data.message))
        }
      } catch (error) {
          toast.error((error.message))
      }
      setLoading(false);
    }

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = content; 
      link.download = 'generated-image.png'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const {getToken} = useAuth();

  return (
     <div className='h-full overflow-y-scroll 
    p-6 flex items-start flex-wrap gap-4
     text-slate-700'>
        
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4
         bg-white rounded-lg border
          border-gray-200'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 text-[#FF4938]' />
            <h1 className='text-xl font-semibold'>
                Background Removal
            </h1>
          </div>
          <p className='mt-6 text-sm font-medium'>
            Upload image
          </p>
          <input onChange={(e)=> setInput(e.target.files[0])} 
           type="file" accept='image/*'
          className='w-full p-2 px-3 mt-2 
          outline-none text-sm 
          rounded-md border text-gray-600
           border-gray-300' 
           required/>

          <p className='text-xs text-gray-500
           font-light mt-1'>Supports
              JPG, PNG, and other image formats
           </p>

          <button disabled={loading} className=' w-full flex justify-center 
          items-center gap-2 bg-gradient-to-r
           from-[#FF4938] to-[#FF4938]
            text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
            {
              loading ? <span className='w-4 h-4 my-1 rounded-full
              border-2 border-t-transparent animate-spin'></span>
              : <Eraser className='w-5'/>
            }
            Remove Background
          </button>
        </form>

        <div className='w-full max-w-lg p-4
         bg-white rounded-lg flex flex-col
          border border-gray-200 
          min-h-96 '>
          <div className='flex items-center gap-3'>
            <Eraser className='w-5 h-5 text-[#FF4938]' />
            <h1 className='text-xl font-semibold'>
              Processed Image
            </h1>
          </div>
          {
            !content ? (
              <div className='flex-1 flex justify-center items-center'>
                <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                  <Eraser className='w-9 h-9' />
                  <p>Upload an image and click "Remove Background"</p>
                </div>
              </div>
            ) : (
              <div className='h-full mt-3'>
                  <img src={content} alt='image'
                   className='w-full h-full'/>

                   <button 
                    onClick={handleDownload}
                    className='mt-4 px-4 py-2 text-sm  text-white
                     bg-orange-600 hover:bg-orange-700 rounded-md'>
                    Download Image
                  </button>
              </div>
            )
          }
          
        </div>
    </div>
  )
}


export default RemoveBackground