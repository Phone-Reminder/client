import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header } from './components/Header';
import { AddReminders } from "./components/AddReminders";

function App() {
  return (
    <div className="App">
      <Header />
      <AddReminders/>
    </div>
  );
}

export default App;
