import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./resource/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider  theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    
);


