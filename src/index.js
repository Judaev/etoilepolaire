import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import { addPost } from './redux/state'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rerenderEntireTree from './render'



rerenderEntireTree(state)














// let rereanderEntireTree = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App state={state} addPost={addPost} />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );   
// }

// rereanderEntireTree()



// rerenderEntireTree()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
