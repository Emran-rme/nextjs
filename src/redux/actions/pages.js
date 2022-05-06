import { news } from "../../services/mainService";

export const setPages = (take) => {
  return async (dispatch) => {
    try {
      const { data } = await news(take);
      await dispatch({ type: "SET_PAGES", payload: data.pages });
    } catch (error) {
      await dispatch({ type: "CLEAR_PAGES", payload: [] });
    }
  };
};
// export const clearPages = () => {
//   return async (dispatch) => {
//     await dispatch({ type: "CLEAR_PAGES", payload: {} });
//   };
// };
