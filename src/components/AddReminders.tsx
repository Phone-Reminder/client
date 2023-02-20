import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useState } from "react";
import "../reminders.css";

export interface IAddRemindersProps {
  addReminder: (reminder: any) => void;
}

export function AddReminders(props: IAddRemindersProps) {
  const [phoneNo, setPhoneNo] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const dateString = startDate.toISOString();
  const  date =  dateString.substring(0,dateString.indexOf("."))+"Z"
  const phonenumber = "+" + phoneNo;
  const handleReminderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let reminder = {
      date,
      phonenumber,
      message,
    };

    setPhoneNo("+44");
    setStartDate(new Date());
    setMessage("");
    props.addReminder(reminder);
  };

  return (
    <form className="row justify-content-center" onSubmit={handleReminderData}>
  <div className="col-md-6">
    <div className="card">
      <div className="card-header color">Add Reminders</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="phoneno" className="form-label">Phone No:</label>
          <div className="input-group">
            <PhoneInput country={"gb"} value={phoneNo} onChange={setPhoneNo}
            inputStyle={{ 
              border: '1px solid #ccc',
              borderRadius: '4px',
              paddingLeft: '50px',
              fontSize: '16px',
              width: '100%',
              margin:"0"
            }}/>
          </div>
            </div>
            <br></br>

        <div className="form-group">
          <label htmlFor="dateandtime" className="form-label">Date and Time:</label>
          <div className="input-group">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="form-control"
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
        </div>
<br></br>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            required
            placeholder="This app uses Twilio on a free-trial and therefore will not work with unverified numbers"
            className="form-control"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
<br></br><br></br>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</form>
  );
}
