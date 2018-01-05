import { queryAppstoreMenu } from '../services/api';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'appstore',

  state: {
    menuData: [],
    loading: true,
    showBack: false,
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
    *back (_, { call, put }) {
      yield put(routerRedux.goBack());
    }
  },

  reducers: {
    saveMenu(state, action) {
      return {
        ...state,
        menuData: action.payload,
      };
    },
    showBack(state, action) {
      return {
        ...state,
        showBack: true,
      }
    },
    hideBack(state, action) {
      return {
        ...state,
        showBack: false,
      }
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};