import Register from "./Register.jsx"
import axios from 'axios';


function App() {
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.withCredentials = true;

  return (
    <Register />
  )
}

export default App
