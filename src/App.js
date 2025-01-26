import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import IndividualDashboard from './IndividualDashboard';
import IndividualLogin from './IndividualLoginForm';
import CompanyLogin from './CompanyLogin';
import CompanyLoginForm from './CompanyLoginForm';
import ManagersPage from './Manager';
import LeaveRequestPage from './LeaveRequest';
import EmployeeAttendancePage from './EmployeeAttendence';
import AdminPanelPage from './AdminPanel';
import ReportsPage from './ReportPage';
import SettingsPage from './SettingsPage';
import CompanyRegister from './CompanyRegister';
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
