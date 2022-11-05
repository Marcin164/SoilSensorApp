import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import { store } from './Redux/store'

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);
