import { queryAppstoreMenu } from '../services/api';

export default {
  namespace: 'appstore',

  state: {
    menuData: [],
    loading: true,
  },

  effects: {
    *fetchMenu(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryAppstoreMenu);
      yield put({
        type: 'saveMenu',
        payload: Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveMenu(state, action) {
      return {
        ...state,
        menuData: action.payload,
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};