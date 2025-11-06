import { useState } from 'react'
import Topbar from './Topbar'
import GetStarted from './GetStarted'
import OurServices from './OurServices'
import OurDocumentation from './OurDocumentation'

function App() {

  return (
    <div>
      <Topbar/>
      <GetStarted/>
      <OurServices/>
      <OurDocumentation/>
    </div>
  )
}

export default App
