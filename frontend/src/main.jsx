import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes/Approutes'
import {Provider} from 'react-redux'
import {store} from './app/store'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Approutes />
    <ToastContainer />
  </Provider>
)
