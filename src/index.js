import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./_app/store";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

//store를 export하지 않으면 PersistGate가 store를 읽을 수 없다.
//persistGate는 persist store가 redux에 저장될때까지 앱 ui렌더링을 지연시킨다.
export let persistor=persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
