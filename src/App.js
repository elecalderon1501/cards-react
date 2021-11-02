// podemos escribir "rfce" y no arma la estructura. Extension ES7

import React from 'react' 
import Cards from './components/Cards'
import "./App.css"
import Title from './components/Title.js'


function App() {
  return (
    <div className="App">
      <Title/>
     <Cards/>       
    </div>
  )
}

export default App


