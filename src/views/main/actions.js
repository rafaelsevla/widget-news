import { ActionTypes as types } from './constants'
import client from 'client'
import CONSTANTS from '../../constants'

export const fetchNews = () => dispatch => {
  dispatch({
    type: types.FETCH_NEWS
  })

  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.TOP_HEADLINES}?country=us&pageSize=5`)
    .then(response => {
      dispatch({
        type: types.FETCH_NEWS_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({ type: types.FETCH_NEWS_FAIL })
      alert('Algo inesperado aconteceu. Por favor, reinicie a página.')
    })
}

export const fetchMoreNews = (pageSize) => (dispatch, getState) => {
  dispatch({
    type: types.FETCH_MORE_NEWS
  })

  let url = getState().main.source.length
    ? `${CONSTANTS.API.BASE}${CONSTANTS.API.EVERYTHING}?pageSize=${pageSize}&sources=${getState().main.source}`
    : `${CONSTANTS.API.BASE}${CONSTANTS.API.TOP_HEADLINES}?country=us&pageSize=${pageSize}`

  client
    .get(url)
    .then(response => {
      dispatch({
        type: types.FETCH_MORE_NEWS_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({ type: types.FETCH_MORE_NEWS_FAIL })
      alert('Algo inesperado aconteceu. Por favor, reinicie a página.')
    })
}

export const fetchSources = () => dispatch => {
  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.SOURCES}?country=us&language=en`)
    .then(response => {
      dispatch({
        type: types.FETCH_SOURCES_SUCCESS,
        payload: response.data
      })
    })
}

export const fetchBySource = source => dispatch => {
  dispatch({
    type: types.FETCH_NEWS_BY_SOURCE
  })

  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.EVERYTHING}?pageSize=5&sources=${source}`)
    .then(response => {
      dispatch({
        type: types.FETCH_NEWS_BY_SOURCE_SUCCESS,
        payload: { ...response.data, source }
      })
    })
    .catch(() => {
      dispatch({ type: types.FETCH_NEWS_BY_SOURCE_FAIL })
      alert('Algo inesperado aconteceu. Por favor, reinicie a página.')
    })
}
