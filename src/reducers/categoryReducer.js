import {
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/actionContstants";

export const categoryListReducer = (
  state = { loading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const categorytDetailsReducer = (
  state = { category: {}, loading: true },
  action
) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
