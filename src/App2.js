import React from 'react'

export default function App2() {
    function greet(){
        alert("Hey Universe")
    }
  return (
    <div>
        <button onClick={greet}>Click</button>
    </div>
  )
}
