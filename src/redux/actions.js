import axios from 'axios';
import * as actions from './actionTypes';
import { pubKey } from '../config';

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      let offset = 0;
      let totalCount = 1;

      while (offset <= totalCount) {
        const response = await axios.get(
          'https://gateway.marvel.com/v1/public/characters',
          {
            params: {
              offset,
              limit: 100,
              apikey: pubKey,
            },
          }
        );

        offset = response.data.data.offset + response.data.data.limit;
        totalCount = response.data.data.total;

        dispatch({
          type: actions.GET_CHARACTERS_SUCCESS,
          payload: {
            list: response.data.data.results,
            total: response.data.data.total,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: actions.GET_CHARACTERS_FAILURE,
        payload: {
          error,
        },
      });
    }
  };
};
