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
  pageSize: 5,
  sources: [],
  source: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_NEWS:
    case types.FETCH_NEWS_BY_SOURCE:
      return { ...state, fetchingNews: true, pageSize: 5, hasMoreNews: false, source: '' }

    case types.FETCH_NEWS_SUCCESS:
      return { 
        ...state,
        fetchingNews: false,
        pageSize: state.pageSize + 5,
        news: { articles: action.payload.articles, totalResults: action.payload.totalResults }
      }

    case types.FETCH_NEWS_BY_SOURCE_SUCCESS:
      return { 
        ...state,
        fetchingNews: false,
        pageSize: state.pageSize + 5,
        source: action.payload.source,
        news: { articles: action.payload.articles, totalResults: action.payload.totalResults }
      }

    case types.FETCH_NEWS_FAIL:
    case types.FETCH_NEWS_BY_SOURCE_FAIL:
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

    case types.FETCH_SOURCES_SUCCESS:
      return { ...state, sources: action.payload.sources }

    default:
      return state;
  }
};
