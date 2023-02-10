import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { useState } from "react";

export interface IAddRemindersProps {
 addReminder: (reminder: any) => void;
}

export function AddReminders(props: IAddRemindersProps) {
  
  const [phoneNo, setPhoneNo] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState<string>("10:00");
  const [message, setMessage] = useState("");
  let dateString = startDate.toISOString().split('T')[0];
  let timeString = time + ":00Z";
  let date = `${dateString}T${timeString}`;
 
  const phonenumber = "+" + phoneNo;
  const handleReminderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let reminder = {
      date,
      phonenumber,
      message
    }
   
    setPhoneNo("");
    setStartDate(new Date());
    setTime("");
    setMessage("");
    props.addReminder(reminder);
  }

  
  return (
    <form className="row g-3" onSubmit={ handleReminderData}>
      <div className="container form w-50">
        <div className="card form">
          <div className="card-header color">Add Reminders</div>
          <div className="card-body">
            <label htmlFor="phoneno" className="form-label">
              Phone No:
            </label>
            <PhoneInput country={"gb"} value={phoneNo} onChange={setPhoneNo} />

            <br></br>

            <label htmlFor="dateandtime" className="form-label">
              Date and Time:
            </label>
            <div className="date-time">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="form-control"
              />

              <TimePicker
                onChange={(value: TimePickerValue) => setTime(value.toString())}
                value={time}
                className="form-control"
              />
            </div>
            <br></br>

            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
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
