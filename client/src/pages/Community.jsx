import React, { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { Heart } from 'lucide-react'; 
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true)
  const {getToken} = useAuth();

  const fetchCreations = async () => {
    
    try {
        const {data} = await axios.get('/api/user/get-published-creations',
          {headers : {Authorization: `Bearer ${await getToken()}`}}
        )
        if(data.success){
          // console.log('Fetched creations:', data.creations);
          setCreations(data.creations);
        } else {
          toast.error((data.message))
        }
      } catch (error) {
          toast.error((error.message))
      }
      setLoading(false);
  };

  const imageLikeToggle =async (id) => {
      try {
        const {data} = await axios.post('/api/user/toggle-like-creation',{id},
          {headers : {Authorization: `Bearer ${await getToken()}`}}
        )
        if(data.success){
          toast.success(data.message);
          await fetchCreations();
        } else {
          toast.error((data.message));
        }
      } catch (error) {
          toast.error((error.message))
      }
  }

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return !loading ? (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h1 className='text-xl font-semibold
       text-slate-700'>Creations</h1>
      <div className='bg-white h-full w-full
       rounded-xl overflow-y-scroll flex flex-wrap
        gap-4 p-4'>
        {creations.map((creation, index) => (
          <div
            key={index}
            className='relative group aspect-square 
            w-full sm:w-1/2 lg:w-1/4 p-2'
          >
            <img
              src={creation.content}
              alt='user-creation'
              className='w-full h-full object-cover
               rounded-lg'
            />
            <div className='absolute bottom-0 top-0
             right-0 left-0 flex gap-2 items-end
             justify-end group-hover:justify-between
              p-3 group-hover:bg-gradient-to-b 
              from-transparent to-black/80
               text-white rounded-lg transition'>
              <p className='text-sm hidden 
              group-hover:block'>
                {creation.prompt}
              </p>
              <div className='flex gap-1 items-center'>
                <p>{creation.likes.length}</p>
                <Heart onClick={()=> imageLikeToggle(creation.id)} className={`min-w-5 h-5 hover:scale-110 
                  cursor-pointer ${
                    creation.likes.includes(user?.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center h-full' >
      <span className='w-4 h-4 my-1 rounded-full
       border-2 border-t-transparent animate-spin'></span> 
    </div>
  )
};

export default Community;





















