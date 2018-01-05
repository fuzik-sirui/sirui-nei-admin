import { queryMd } from '../services/api';

export default {
  namespace: 'md',

  state: {
    data: [],
  },

  effects: {
    *fetchMd(_, { call, put }) {
      const response = yield call(queryMd);
      yield put({
        type: 'saveTags',
        payload: response.datatypes,
      });
    },
  },

  reducers: {
    saveTags(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
