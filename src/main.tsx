// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// ----------------
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ----------------
// import { render } from 'react-dom';

// import App from './App';

// const rootElement = document.getElementById('root');
// render(<App />, rootelement);

import React from 'react';
import { render } from 'react-dom';

import './style.css';
import App from './App';

const root = document.getElementById('root');
render(<App />, root);
