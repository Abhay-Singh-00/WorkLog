import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Home_components/LoginPage';
import IndividualDashboard from './Individual_components/IndividualDashboard';
import IndividualLogin from './Home_components/IndividualLoginForm';
import CompanyLogin from './Company_components/CompanyDashboard';
import CompanyLoginForm from './Home_components/CompanyLoginForm';
import ManagersPage from './Company_components/Manager';
import LeaveRequestPage from './Individual_components/LeaveRequest';
import EmployeeAttendancePage from './Company_components/EmployeeAttendence';
import AdminPanelPage from './Company_components/AdminPanel';
import ReportsPage from './Individual_components/ReportPage';
import SettingsPage from './SettingsPage';
import CompanyRegister from './Home_components/CompanyRegister';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
// import NotFoundPage from './PageNotFound';
function App() {


  return (
    <Router basename="/WorkLog">
      <Routes>
      <Route path='/' element={<LoginPage/>}>
      <Route path='IndividualLoginForm' element={<IndividualLogin/>}/>
      <Route path='CompanyLoginForm' element={<CompanyLoginForm/>}/>
      <Route path='CompanyRegister' element={<CompanyRegister/>}/>
      </Route>
      <Route path='/IndividualDashboard' element={<IndividualDashboard/>}>
      <Route path='LeaveRequest' element={<LeaveRequestPage/>}/>
      <Route path='Report' element={<ReportsPage/>}/>
      </Route>
      <Route path='/CompanyLogin' element={<CompanyLogin/>}/>
      <Route path='/ManagersPage' element={<ManagersPage/>}/>
      <Route path='/AdminPanel' element={<AdminPanelPage/>}/>
      
      </Routes> 
    </Router>
  );
}

export default App;
