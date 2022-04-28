import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoardRoutes from './DashBoardRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <DashBoardRoutes />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App