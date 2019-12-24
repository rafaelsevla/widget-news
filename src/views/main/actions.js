import { ActionTypes as types } from './constants';
import client from 'client';
import CONSTANTS from '../../constants';

export const fetchNews = () => dispatch => {
  dispatch({
    type: types.FETCH_NEWS,
  });

  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.TOP_HEADLINES}?country=us&pageSize=5`)
    .then(response => {
      dispatch({
        type: types.FETCH_NEWS_SUCCESS,
        payload: response.data
      });
    })
    .catch(e => dispatch({type: types.FETCH_NEWS_FAIL}))
}

export const fetchMoreNews = (pageSize) => dispatch => {
  dispatch({
    type: types.FETCH_MORE_NEWS,
  });

  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.TOP_HEADLINES}?country=us&pageSize=${pageSize}`)
    .then(response => {
      dispatch({
        type: types.FETCH_MORE_NEWS_SUCCESS,
        payload: response.data
      });
    })
    .catch(e => dispatch({type: types.FETCH_MORE_NEWS_FAIL}))
}