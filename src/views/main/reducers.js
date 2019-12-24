import { ActionTypes as types } from './constants';

export const initialState = {
  fetchingNews: false,
  fetchingNewsError: false,
  loadingMore: false,
  news: {
    articles: [],
    totalResults: 0
  },
  pageSize: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_NEWS:
      return { ...state, fetchingNews: true }

    case types.FETCH_NEWS_SUCCESS:
      const { articles, totalResults } = action.payload
      return { 
        ...state,
        fetchingNews: false,
        news: { articles, totalResults },
        pageSize: pageSize + 5
      }

    case types.FETCH_NEWS_FAIL:
      return { ...state, fetchingNews: false, fetchingNewsError: true }

    default:
      return state;
  }
};
