import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header } from './components/Header';
import { AddReminders } from "./components/AddReminders";
import { addReminderData,getReminders } from './AsyncCalls/dataHandles';
import { useState } from 'react';
import { useEffect } from 'react';
import PageNotFound from "./components/PageNotFound"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [error, setError] = useState("");
  const  [reminder, setReminder] = useState([])
  const addReminder = (reminder:any) => {
    addReminderData(reminder,setError);
  }
  console.log(reminder)
  const getReminderHandler = () => {
    getReminders(setReminder, setError);
  }
    useEffect(() => {
    getReminderHandler();
  }, []);
  return (
 
    
    <div className="App">
           <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

        
/>
      {!error ?

       
        <><Header /><AddReminders addReminder={addReminder} /></>
        : <PageNotFound/> }
      </div>
     
      
  );
}

export default App;
