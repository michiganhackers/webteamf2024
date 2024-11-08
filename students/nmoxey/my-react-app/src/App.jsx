import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="Centered">
        <h1 class="PageHeading">mrbrbrn.com</h1>
        <p class="PageHeading">Web Development Team Project of Nate Moxey</p>
        <p class="PageHeading">What's up World?</p>
      </div>
      <div class="flexbox">
        <div>
          <img class="Centered" src="BOBblueknight.png" alt="blue knight" height = "420"></img>
          <ul>
            <li><a href="https://michiganhackers.github.io/webteamf2024/students/nmoxey/game1.html">Game 1</a></li>
            <li><a href="https://michiganhackers.github.io/webteamf2024/students/nmoxey/game2.html">Game 2</a></li>
          </ul>
        </div>
        <div>
          <img class="Centered" src="BOBbarbarian.png" alt="barbarian"></img>
          <ul>
            <li><a href="https://michiganhackers.github.io/webteamf2024/students/nmoxey/tool1.html">Tool 1</a></li>
            <li><a href="https://michiganhackers.github.io/webteamf2024/students/nmoxey/tool2.html">Secret Santa Generator</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
