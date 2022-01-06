
import Home from './componets/home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Search  from './componets/search/search';
import Job from './componets/job/job';
import Signup from './componets/auth/signup'
import Signin from './componets/auth/signin'
import Profile from './componets/profile/profile'; 
import Settings from './componets/profile/setttings';
import AddJob from './componets/profile/addJob';  
import ManageJob from './componets/profile/manageJobs';  
import MyJob from './componets/job/myJob';
import NotFound from './componets/search/notFound'
import AboutUs from './componets/search/aboutUs'
//comment 
  
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getJobs } from './actions/jobs'
import EditJob from './componets/profile/editJob';
import OtherProfile from './componets/profile/otherProfile';

const App = () =>{

  const dispatch = useDispatch()

  // useEffect(() =>{
  //   var date = new Date()
  //   const profile = JSON.parse(localStorage.getItem('profile'))
  //   // console.log(profile.time)
  //   if(profile){
  //   if(profile.time< date.getHours() || profile.date< date.getDate()){
  //     localStorage.removeItem("profile")
  //   }}

  // }, [])

  window.onunload = () =>{
    window.profile.clear()
  }

  return (
    <div >
      {/* <Home /> */}

      <Router>
      <Routes>
          
      <Route path='/' element={<Home />} />
       <Route path='/signup' element={<Signup />} />
       <Route path='/signin' element={<Signin />} />
       <Route path="/search" element={<Search />} />
       <Route path='/job' element={<Job />} />
       <Route path='/addJob' element={<AddJob />} />
       <Route path='/editJob' element={<EditJob />} />
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/settings' element={<Settings />} />
       <Route path='/myJob' element={<MyJob />} />
       <Route path='/otherProfile' element={<OtherProfile/>}/>
       <Route path='/aboutUs' element={<AboutUs/>}/>
       <Route path="*" element={<NotFound/>}/>

      </Routes>
      </Router>
      
    </div>
  );
}

export default App
