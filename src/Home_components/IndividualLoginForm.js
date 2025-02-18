import React from "react";
import { useNavigate } from 'react-router-dom';


const LoginForm=()=>{
  const navigate=useNavigate();
  const navigateDashboard=()=>
  {
    navigate("/IndividualDashboard");
  }
return (<><div className="d-flex justify-content-center align-items-center vh-100" style={{ zindex: '2' }}>
<div className="p-4 shadow-lg rounded" style={{ width: '100%', maxWidth: '400px', background: '#ffffff' }}>
  <h2 className="text-center mb-4">Login to Work Log</h2>
  <form>
    {/* Email Field */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input 
        type="email" 
        className="form-control" 
        id="email" 
        placeholder="Enter your email" 
        required 
      />
    </div>
    {/* Password Field */}
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input 
        type="password" 
        className="form-control" 
        id="password" 
        placeholder="Enter your password" 
        required 
      />
    </div>
    {/* Login Button */}
    <button type="submit" className="btn btn-primary w-100" onClick={navigateDashboard}>Login</button>
    {/* Forgot Password Link */}
    <div className="text-center mt-3">
      <a href="#" className="text-muted">Forgot Password?</a>
    </div>
  </form>
</div>
</div>
</>
)};
export default LoginForm;