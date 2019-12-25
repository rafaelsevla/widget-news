import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'
import { newsMock, newsMock_2, sources } from 'utils/mocks'

test('should be return init fetch news', () => {
  const before = initialState

  const action = { type: types.FETCH_NEWS }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    news: {
      articles: [],
      totalResults: 0
    },
    sources: [],
    fetchingNews: true,
    pageSize: 5,
    hasMoreNews: false,
    source: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source', () => {
  const before = initialState

  const action = { type: types.FETCH_NEWS_BY_SOURCE }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    news: {
      articles: [],
      totalResults: 0
    },
    sources: [],
    fetchingNews: true,
    pageSize: 5,
    hasMoreNews: false,
    source: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_SUCCESS,
    payload: newsMock
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_BY_SOURCE_SUCCESS,
    payload: { ...newsMock, source: 'engadget' }
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: 'engadget',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news error', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_FAIL
  }

  const after = {
    fetchingNewsError: true,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source error', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_BY_SOURCE_FAIL
  }

  const after = {
    fetchingNewsError: true,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS_SUCCESS,
    payload: newsMock_2
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success with hasMoreNews true', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS_SUCCESS,
    payload: newsMock_2
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: true,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch source success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_MORE_NEWS_FAIL
  }

  const after = {
    fetchingNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 },
    fetchingMoreNewsError: true
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_SOURCES_SUCCESS,
    payload: sources
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: sources.sources,
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})