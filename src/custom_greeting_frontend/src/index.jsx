// import * as React from "react";
// import { render } from "react-dom";
// import '../assets/main.css'
// import './index.css'
// import { custom_greeting_backend } from "../../declarations/custom_greeting_backend";
// import Welcome from "./components/Welcome";
// // import { BrowserRouter } from "../../../node_modules/react-router-dom/dist/index";
// import App from "./App";

// const MyHello = () => {
//   const [name, setName] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   // async function doGreet() {
//   //   const greeting = await custom_greeting_backend.greet(name);
//   //   setMessage(greeting);
//   // }

//   return (
//   <>
//   {/* <BrowserRouter> */}
//  <div>
//   <h1>Prince Kumar is the best</h1>
//  </div>
//   {/* </BrowserRouter> */}
//   </>
//   );
// };

// render(<MyHello />, document.getElementById("app"));


import * as React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
