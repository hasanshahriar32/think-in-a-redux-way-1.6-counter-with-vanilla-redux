// select dom elements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
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
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
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
