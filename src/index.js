import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/app/App';
// import { BrowserRouter } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//    <BrowserRouter>
//       <App />
//    </BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


