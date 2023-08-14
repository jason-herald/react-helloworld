import React, { useState, useRef } from 'react';
import './App.css';

// props
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

// list
function ItemList(){
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const itemList = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return <ul>{itemList}</ul>;
}

// ref
function FocusText() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <br/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};


// state and conditional rendering
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// render props
function RenderProps({ render }) {
  const data = "sample data for render props";

  return (
    <div>
      {render(data)}
    </div>
  );
};


// composition
function Page(props) {
  return (
    <div>
      <Greeting name={props.username} />
      <Counter />
      <ItemList/>
      <FocusText/>
      <RenderProps
    render={(data) => (
      <h3>{data}</h3>
    )}
  />
    </div>
  );
}



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = 'Jason';

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <hr />
      {isLoggedIn ? (
        <Page username={username} />
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

export default App;
