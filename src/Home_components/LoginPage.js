import React, { useEffect, useState ,useRef} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Logincards from './Logincards';
import CardsData from './CardsData';
import '../Overlay.css';
import { Outlet, useNavigate,useLocation } from 'react-router-dom';
import Services from './Services';
import About from './About';
import Contact from './Contact';

function LoginPage() {
  const navigate=useNavigate();
  const location=useLocation();
  const overlayRef=useRef(null);
  const overlayPaths=['/IndividualLoginForm','/CompanyLoginForm','/companyregister'];
  const ncards=(val)=>
{
  return(
    <Logincards
    key={val.id}
    imgsrc={val.imgsrc}
    cardTitle={val.cardTitle}
    onClick={()=>navigate(val.route)}/>
)
};

useEffect(()=>
{
  const handleClickOutside=(event)=>{
    if(overlayRef.current && 
      !overlayRef.current.contains(event.target)&&
      overlayPaths.includes(location.pathname)
  )
  {
    navigate('/');
  }
};
document.addEventListener('mousedown',handleClickOutside);
return()=>{
document.removeEventListener('mousedown',handleClickOutside);
};
},[navigate,location.pathname]
);

  return (
    <div className="LoginPage">
      <div className="custom">
        {/* Navbar */}
        <Navbar/>
        
        {/* Main Content */}
        <div className="container mt-5 px-3">
  <div className="row justify-content-center gx-3">
    <div className="col-12 mt-5 text-center text-black">
      <h1>Work Log</h1>
      <h2>"Work Smarter, Manage Better with WorkLog."</h2>
    </div>
    <div className="row justify-content-center mt-5 gx-3" style={{position:"relative"}}>
     {CardsData.map(ncards)}
     
</div>
</div>
</div>
</div>
<Services/>
 {overlayPaths.includes(location.pathname)&&
 (<div className='overlay'>
  <div ref={overlayRef} className='overlay-content'>
  <Outlet/>
  </div>
  </div>)
 }
 <About/>
 <Contact/>
    </div>
  );
}

export default LoginPage;
