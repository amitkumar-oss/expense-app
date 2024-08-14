import React from 'react'
import Trial from './Trial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aabout from './Aabout'
import Contact from './Contact'
import Counter from './Counter'
import Homepage from './Homepage'
import Navebar from './Navebar';
import Form from './Form';
import Form1 from './Form1';
import Expense from './Expense';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css'
import ExpensePractice from './ExpensePractice'



const App = () => {

  let x=5
  console.log(x);

  let arr=[50,10,5,2]


  function xyz(ans){
    console.log(ans)
    

  }


  return (
    <div>
      <BrowserRouter>

        <Navebar />

        <Routes>
          <Route path='/' element={<Homepage  value={x}/>} />
          <Route path='/about' element={<Aabout />} />
          <Route path='/contact' element={<Contact value={xyz} />} />
          <Route path='/counter' element={<Counter value={arr}/>} />
          <Route path='/navbar' element={<Navebar />} />
          <Route path='/form' element={<Form />} />
          <Route path='/form1' element={<Form1 />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/expensepractice' element={<ExpensePractice />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

