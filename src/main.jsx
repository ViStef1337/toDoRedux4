import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react'

const hello = str =>{
  let newStr = ''
  for ( let i=str.length-1;i>=0;i--){
    newStr+=str[i]
  }
  return newStr
}
console.log(hello('12345'))
createRoot(document.getElementById('root')).render(

  <StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </StrictMode>,
)
