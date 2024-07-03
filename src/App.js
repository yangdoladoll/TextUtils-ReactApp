// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
 
  const[alert,setAlert]=useState('null');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const removeClasslist=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')

  }
  const toggleMode=(cls)=>{
    removeClasslist();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#26364e';
      showAlert("Dark mode has been enabled","Success");
    }
   
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
  <>

{/* <Navbar title="TextUtils" AboutText="About us"/>  */}


{/* <Router> */}
 <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">

  {/* <Routes>
    <Route path="/about" element={ <About/>}>
    
    </Route>
    <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to Analyze"mode={mode} toggleMode={toggleMode}/>}/>
  </Routes> */}
  <Textform showAlert={showAlert} heading="Enter the Text to Analyze"mode={mode} toggleMode={toggleMode}/>

</div>
{/* </Router>  */}
</>
  );
}

export default App;