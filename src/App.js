import { useReducer } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TOGGLE_COLOR: 'toggleColor'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TOGGLE_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { userInput: '', count: 0, color: false })

  return (
    <main className="App" style={{ color: state.color ? '#FF0000' : '#0000FF' }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
      />
      <br /><br />
      <p>{state.count}</p>
      <section>
        <button onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>-</button>
        <button onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>+</button>
        <button onClick={(() => dispatch({ type: ACTION.TOGGLE_COLOR }))}>Color</button>
      </section>
      <br /><br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;

// import { useState } from 'react';

// function App() {
//   const [userInput, setUserInput] = useState('');
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState(false);

//   return (
//     <main className="App" style={{ color: color ? '#FF0000' : '#0000FF' }}>
//       <input  
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//       />
//       <br /><br />
//       <p>{count}</p>
//       <section>
//         <button onClick={(() => setCount(prev => prev - 1))}>-</button>
//         <button onClick={(() => setCount(prev => prev + 1))}>+</button>
//         <button onClick={(() => setColor(prev => !prev))}>Color</button>
//       </section>
//       <br /><br />
//       <p>{userInput}</p>
//     </main>
//   );
// }

// export default App;
