// select dom elements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//initial state

const initialState = {
  value: 0,
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

// store

const store = Redux.createStore(reducer);

// button click listeners

incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "INCREMENT",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "DECREMENT",
  });
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
