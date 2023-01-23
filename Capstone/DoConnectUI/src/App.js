import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Services/HomePage';
import UserInterfacePage from './Services/UserInterfacePage';
import UserLogin from './Services/UserLogin';
import UserRegistartionService from './Services/UserRegistartionService';
import UserDashBorad from './Services/UserDashBoard';
import UserDashBoard from './Services/UserDashBoard';
import GetUnApprovedQuestions from './Components/GetUnApprovedQuestions';
import CreateQuestion from './Components/CreateQuestion';
import AnswerQuestion from './Components/AnswerQuestion';

import UserLogoutService from './Services/UserLogoutService';
import AdminInterfacePage from './Services/AdminInterfacePage';
import AdminLoginService from './Services/AdminLoginService';
import AdminRegistartionService from './Services/AdminRegistartionService';
import AdminDashBoard from './Services/AdminDashBoard';
import GetUnApprovedAnswers from './Components/GetUnApprovedAnswers';
import GetApprovedQuestions from './Components/GetApprovedQuestions';
import GetApprovedAnswers from './Components/GetApprovedAnswers';
import AdminLogoutService from './Services/AdminLogoutService';
import Chat from './Components/Chat';
import Search from './Components/Search';





function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />      

                    {/* USER OPERATIONS ROUTING */}

        <Route exact path="/userinterfacepage" element={<UserInterfacePage />} />
        <Route  path="/userlogin" element={<UserLogin />} />
        <Route  path="/userregistrationservice" element={<UserRegistartionService />} />
        <Route path="/userdashboard" element={<UserDashBoard />} />
        <Route path="/createquestion" element={<CreateQuestion />} />
        <Route path="/answerquestion" element={<AnswerQuestion />} />
        <Route path="/search" element={<Search />} />
 
        <Route path="/chat" element={<Chat />} />
        <Route path="/userlogoutservice" element={<UserLogoutService />} />
        {/*      
                    {/* ADMIN ROUTING OPERATIONS*/}
        <Route path="/admininterfacepage" element={<AdminInterfacePage />}  />
        <Route path="/admindashboard" element={<AdminDashBoard />} />
        <Route path="/adminloginservice" element={<AdminLoginService />} />
        <Route path="/adminregistrationservice" element={<AdminRegistartionService />} />
        <Route path="/getapprovedquestions" element={<GetApprovedQuestions />} />
        <Route path="/getapprovedanswers" element={<GetApprovedAnswers />} />
        <Route path="/getunapprovedanswers" element={<GetUnApprovedAnswers />} />
        <Route path="/getunapprovedquestions" element={<GetUnApprovedQuestions />} />
        <Route path="/adminlogoutservice" element={<AdminLogoutService />} />
      </Routes>  
      
   </BrowserRouter>
    

    </>
  );
}

export default App;
