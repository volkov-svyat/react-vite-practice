import { useState } from 'react'
import Topbar from './Topbar'
import GetStarted from './GetStarted'
import OurServices from './OurServices'
import OurDocumentation from './OurDocumentation'
import CustomerSatisfaction from './CustomerSatisfaction'

function App() {

  return (
    <div className="max-w-1000">
      <Topbar/>
      <GetStarted/>
      <OurServices/>
      <OurDocumentation/>
      <CustomerSatisfaction/>
    </div>
  )
}

export default App
