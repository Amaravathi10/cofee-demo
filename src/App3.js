import React from 'react'

export default function App3() {
    function greet(name){
        alert(name)
    }
  return (
    <div>
        <button onClick={()=>greet("Amaravathi")}>Click</button>
    </div>
  )
}
