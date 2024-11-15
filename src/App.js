import React, { useState } from "react";
import './App.css'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (

            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                      return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id !== obj.id) {
                      return obj2
                    }

                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>)
        })}
      </div>
      <div className="donelist">
        <h1>Done list</h1>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div>
                <div className="todos">
                  <div className="todo">
                    <p className="done">{obj.text}</p>
                    <div className="right">
                    </div>
                  </div>
                </div>
              </div>)
          }
        })}
      </div>
    </div>
  );
}

export default App;
