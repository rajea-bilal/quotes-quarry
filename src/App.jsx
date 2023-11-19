import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../routes/Home'
import Quotes from '../routes/QuotesDisplay'
import SingleQuotePage from '../routes/SingleQuotePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/quotes/:id" element = {<SingleQuotePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
