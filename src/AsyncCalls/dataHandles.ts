import axios from "axios";


export const addReminderData = async (reminder: any, setError: (error: string) => void) => {
  const { date, phonenumber, message } = reminder;
  try {
      const url = "http://localhost:4000/addReminder/";
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