import { ActionTypes as types } from './constants';

export const initialState = {
  hasMoreNews: false,
  fetchingNews: false,
  fetchingNewsError: false,
  fetchingMoreNewsError: false,
  fetchingMore: false,
  news: {
    articles: [],
    totalResults: 0
  },
  pageSize: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_NEWS:
      return { ...state, fetchingNews: true, pageSize: 5, hasMoreNews: false }

    case types.FETCH_NEWS_SUCCESS:
      return { 
        ...state,
        fetchingNews: false,
        pageSize: state.pageSize + 5,
        news: { articles: action.payload.articles, totalResults: action.payload.totalResults }
      }

    case types.FETCH_NEWS_FAIL:
      return { ...state, fetchingNews: false, fetchingNewsError: true }

    case types.FETCH_MORE_NEWS: 
      return { ...state, fetchingMore: true }
    
    case types.FETCH_MORE_NEWS_SUCCESS:
      return { 
        ...state,
        hasMoreNews: true ? state.news.articles.length >= state.news.totalResults : false,
        fetchingMore: false,
        pageSize: state.pageSize + 5,
        news: { articles: action.payload.articles, totalResults: action.payload.totalResults }
      }

    case types.FETCH_NEWS_FAIL:
      return { ...state, fetchingMore: false, fetchingMoreNewsError: true }

    default:
      return state;
  }
};
