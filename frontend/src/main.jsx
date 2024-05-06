// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import store from './redux/store.js'
// import {store,persistor} from './redux/store'
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
