import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDdcz02A9o3Ohel5etCQ09h7m_Z1GIxCBQ',
    authDomain: 'clothescommerce-f600e.firebaseapp.com',
    projectId: 'clothescommerce-f600e',
    storageBucket: 'clothescommerce-f600e.appspot.com',
    messagingSenderId: '546029587372',
    appId: '1:546029587372:web:084a93c6a49ce48e9a8809',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
