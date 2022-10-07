import * as actionTypes from "../actionTypes";

let initialState = {
  quizzKey: 0,
  quizzes: [
    {
      key: 0,
      title: "Quizz 1",
      description: "description for quizz 1",
      score: 10,
      url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUIZZ:
      state.quizzKey = state.quizzKey + 1;
      return {
        ...state,
        quizzes: [...state.quizzes, { key: state.quizzKey, ...action.quizz }],
      };
    case actionTypes.REMOVE_QUIZZ:
      return {
        ...state,
        quizzes: [...action.quizzes],
      };
    case actionTypes.EDIT_QUIZZ:
      return {
        ...state,
        quizzes: [...action.quizzes, { ...action.quizz }],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
