import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { useState } from "react";

export interface IAddRemindersProps {
}

export function AddReminders(props: IAddRemindersProps) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState<string>("10:00");
  const [message, setMessage] = useState("");

  
  return (
    <form className="row g-3">
      <div className="container form w-50">
        <div className="card form">
          <div className="card-header color">Add Reminders</div>
          <div className="card-body">
            <label htmlFor="phoneno" className="form-label">
              Phone No:
            </label>
            <PhoneInput country={"gb"} value={value} onChange={setValue} />

            <br></br>
            
            <label htmlFor="dateandtime" className="form-label">
              Date and Time:
            </label>
            <div className='date-time'>
            <DatePicker
              selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="form-control"
                
            />

            <TimePicker
              onChange={(value: TimePickerValue) => setTime(value.toString())}
              value={time} className="form-control"
              />
              </div>
            <br></br>

            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea className="form-control"
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <br></br>
            <div className="loginbutton">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
