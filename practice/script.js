// select dom elements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = () => {
  const value = parseInt(document.getElementById("increment-value").value) || 0;
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = () => {
  const value = parseInt(document.getElementById("decrement-value").value) || 0;
  return {
    type: DECREMENT,
    payload: value,
  };
};

//initial state

const initialState = {
  value: 0,
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

// store

const store = Redux.createStore(reducer);

// button click listeners

incrementEl.addEventListener("click", () => {
  store.dispatch(increment());
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement());
});

// render

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.value;
};

// subscribe

store.subscribe(render);

// initial render

render();
