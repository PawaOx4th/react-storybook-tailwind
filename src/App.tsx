import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import ButtonDefault from "./components/atomices/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <ButtonDefault>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo
          eos ut.
        </ButtonDefault>
      </header>
    </div>
  )
}

export default App
