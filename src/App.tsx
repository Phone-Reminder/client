import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header } from './components/Header';
import { AddReminders } from "./components/AddReminders";
import { addReminderData,getReminders } from './AsyncCalls/dataHandles';
import { useState } from 'react';
import { useEffect } from 'react';
import PageNotFound from "./components/PageNotFound"

function App() {
  const [error, setError] = useState("");
  const  [reminder, setReminder] = useState([])
  const addReminder = (reminder:any) => {
    addReminderData(reminder,setError);
  }
  const getReminderHandler = () => {
    getReminders(setReminder, setError);
  }
    useEffect(() => {
    getReminderHandler();
  }, []);
  return (
 
    <div className="App">
      {!error ?
        <><Header /><AddReminders addReminder={addReminder} /></>
        : <PageNotFound/> }
      </div>
     
      
  );
}

export default App;
