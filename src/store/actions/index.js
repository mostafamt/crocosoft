import * as actionTypes from "../actionTypes";

export const addQuizz = (quizz) => {
  return {
    type: actionTypes.ADD_QUIZZ,
    quizz,
  };
};

export const EditQuizz = (quizzes, quizz) => {
  return {
    type: actionTypes.EDIT_QUIZZ,
    quizzes,
    quizz,
  };
};

export const RemoveQuizz = (quizzes) => {
  return {
    type: actionTypes.REMOVE_QUIZZ,
    quizzes: quizzes,
  };
};
