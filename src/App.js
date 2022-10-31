import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState,useEffect  } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('multi');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({message:message,type:type});
    setTimeout(() => {
        setAlert(null);
    }, 3000);
  }
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  const themeChanger=(colorname)=>{
    setTheme(colorname);
    showAlert(`Theme Changed`,'success');
    
  }
  return (
    <>




    <Router>
    <Navbar title='MOD!F!ER' abt_txt="about text" themeChanger={themeChanger} theme={theme}/>
    <Alert alert={alert} color={theme}/>
    <div className='container my-3'>
    <Routes>
          <Route path="/" element={<TextForm heading="Enter the text below" theme={theme} showAlert={showAlert}/>}/>   
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
