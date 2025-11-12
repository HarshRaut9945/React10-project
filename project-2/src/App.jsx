import { useState } from 'react'

import './App.css'
import Nav from './Component/Navigation//Nav'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'

function App() {
  return (
    <>
     <Nav/>
     <main className='main_container'>
<ContactHeader/>
     <ContactForm/>
     </main>
     

    </>
  )
}

export default App
