import { ActionTypes as types } from './constants';
import client from 'client';
import CONSTANTS from '../../constants';

export const fetchNews = (pageSize) => dispatch => {
  dispatch({
    type: types.FETCH_NEWS,
  });

  client
    .get(`${CONSTANTS.API.BASE}${CONSTANTS.API.TOP_HEADLINES}?country=us&pageSize=${pageSize}`)
    .then(response => {
      dispatch({
        type: types.FETCH_NEWS_SUCCESS,
        payload: response.data
      });
    })
    .catch(e => dispatch({type: types.FETCH_NEWS_FAIL}))
}