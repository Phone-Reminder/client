import axios from "axios";


export const addReminderData = async (reminder: any, setError: (error: string) => void) => {
  const { date, phonenumber, message } = reminder;
  try {
    const url = "http://localhost:4000/addReminder";
    if (date && phonenumber && message) {
      const responseAddURL = await axios.post(url, reminder);
      console.log(responseAddURL);
    } else {
      console.log("Invalid Data");
    }
  } catch (error) {
    setError("There is a Problem with your Promise");
  }
};

export const getReminders = async (setReminders:(responseURL:[])=>void, setError: (error: string) => void) => {
  try {
    const getUrl = "http://localhost:4000/getReminder";
    const responseURL = await axios.get(getUrl);
    setReminders(responseURL.data);
  } catch (error) {
     setError("There is a Problem while Getting the Reminders");
  }
};