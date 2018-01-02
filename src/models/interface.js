import { queryAppstoreMenu } from '../services/api';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'interface',
  state: {
    menuData: [],
    loading: true,
  },
  effects: {
    *detail ({
      payload,
    }, {call, put}) {
      console.log(1);
      yield put(routerRedux.push({
        pathname: '/appstore/interfaceDetail',
        search: {
          id: payload.id
        },
      }));
    }
  },
  reducers: {
  },
};