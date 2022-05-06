import { initMain } from "../../services/mainService";

export const setCategories = () => {
  return async (dispatch) => {
    const { data } = await initMain("categories");
    await dispatch({ type: "SET_CATEGORIES", payload: data.data.categories });
  };
};
