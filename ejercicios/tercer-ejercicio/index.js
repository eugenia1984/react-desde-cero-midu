"use strict";

const APP = document.getElementById("app");
const useState = React.useState;

function Counter() {
  const [counter, setCounter ] = useState(0);
  const [clicked, setClicked] = useState(0)

  function handlerClickAdd() {
    setCounter(counter + 1)
    setClicked( clicked + 1)
  }

  function handlerClickSubtract() {
    setCounter(counter - 1)
    setClicked( clicked + 1)
  }

  return (
    <React.Fragment>
      <button onClick={handlerClickAdd}>Add +</button>
      <span>{counter}</span>
      <button onClick={handlerClickSubtract}>Subtract -</button>
      <p>Clicked times: {clicked} </p>
    </React.Fragment>
    )
}

// ReactDOM.render()
ReactDOM.createRoot(APP).render(
  <div className="container">
    <Counter />
  </div>
);

