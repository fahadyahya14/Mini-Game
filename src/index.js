import React from 'react';
import ReactDOM from 'react-dom';
//  import App from './redux.jsx/redux'
 import App from './Timer'
import './index.css'


ReactDOM.render(<App />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// // import Counter from './components/counter';

// // import './index.css';
// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return state += 1
//     }
//     default: return state;
//   }
// }

// let store = createStore(counter);

// store.subscribe(() => {
//   console.log(store.getState())
// })

// ReactDOM.render(
//   <Provider store={store}>
//     <div>
//       <div>
//         <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>Increment</button><br />
//       </div>
//     </div>
//   </Provider>
//   , document.getElementById('root'))







