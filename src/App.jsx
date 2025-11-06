import { useState } from 'react'
import Topbar from './Topbar'
import GetStarted from './GetStarted'
import OurServices from './OurServices'
import OurDocumentation from './OurDocumentation'

function App() {

  return (
    <div className="max-w-1000">
      <Topbar/>
      <GetStarted/>
      <OurServices/>
      <OurDocumentation/>
    </div>
  )
}

export default App
