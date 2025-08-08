import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObjects from './pages/RemoveObjects'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'



const App = () => {

  //for token generation on console
  // const {getToken} = useAuth();
  
  // useEffect(()=> {
  //   getToken().then((token)=>console.log(token));
  // },[])

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitles/>}/>
          <Route path='generate-images' element={<GenerateImages/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='remove-object' element={<RemoveObjects/>}/>
          <Route path='review-resume' element={<ReviewResume/>}/>
          <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App