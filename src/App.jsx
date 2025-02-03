import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';


function App() {
  

  return (
    <div className="todo-background">
       <BrowserRouter>
          <header>
             <h2 className='text-center text-light fs-1 bg-dark p-1'>Logo</h2>
          </header>
          <section>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='contact' element={<Contact />} />
               {/* <Route path='user-register' element={<ToDoRegister />} />
               <Route path='user-dash' element={<ToDoUserDashBoard />} />
               <Route path='add-appointment' element={<ToDoAddAppointment />} />
               <Route path='todo-details/:id' element={<ToDoDetails />} />
               <Route path='todo-edit/:id' element={<ToDoEdit />} /> */}
            </Routes>
          </section>
       </BrowserRouter>
       </div>
  )
}

export default App