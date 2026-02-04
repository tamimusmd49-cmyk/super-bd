
/* 
   ################################################################################
   # PROPERTY OF SUPER BD ADMIN                                                   #
   # DOMAIN LOCKED: super-bd1.netlify.app                                         #
   # UNAUTHORIZED COPYING OR MODIFICATION IS STRICTLY PROHIBITED.                 #
   ################################################################################
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- SECURITY: Clear Console & Prevent Object Injection ---
if (process.env.NODE_ENV === 'production') {
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
    Object.freeze(document.location);
}

const _root = document.getElementById('root');
if (!_root) {
  // Silent fail to confuse attackers
  document.body.innerHTML = "";
  throw new Error("x001");
}

const root = ReactDOM.createRoot(_root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
