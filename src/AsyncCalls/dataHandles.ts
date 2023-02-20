import axios from "axios";


export const addReminderData = async (reminder: any, setError: (error: string) => void) => {
  const { date, phonenumber, message } = reminder;
  try {
    const url = "https://reminder-server-vawt.onrender.com/addReminder";
    if (date && phonenumber && message) {
      const responseAddURL = await axios.post(url, reminder);
      //console.log(responseAddURL);
    } else {
      console.log("Invalid Data");
    }
  } catch (error) {
    setError("There is a Problem with your Promise");
  }
};

export const getReminders = async (setReminders:(responseURL:[])=>void, setError: (error: string) => void) => {
  try {
    const getUrl = "https://reminder-server-vawt.onrender.com/getReminder";
    const responseURL = await axios.get(getUrl);
    setReminders(responseURL.data);
    //console.log(responseURL.data);
  } catch (error) {
     setError("There is a Problem while Getting the Reminders");
  }
};