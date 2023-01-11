// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return initialState;
//     default:
//       return state;
//   }
// };
// export default reducer;

const initialState = {
  counter: 0,
};

const reducer = (state: initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    case "CLEAR":
      // return {counter: 0}
      return initialState;

    default:
      return state;
  }
};

export default reducer;
