import './App.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
// import Store from './redux/store.js'
import {loadUser} from './redux/actions/user.js'
import { useDispatch, useSelector } from "react-redux";
import {LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage} from "./Routes.js"

function App() {
  const dispatch=useDispatch()
  const {loading}=useSelector((state)=>state.user);
  useEffect(()=>{
    dispatch(loadUser(dispatch))
  },[])

  return (
    <>
    {
      loading ? (
        null
      ):(
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/sign-up' element={<SignupPage/>} />
      <Route path='/activation/:activation_token' element={<ActivationPage />} />
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/best-selling' element={<BestSellingPage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
    </Routes>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
      )
    }
    </>
  )
}

export default App
