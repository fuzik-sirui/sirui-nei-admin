import { stringify } from 'qs';
import request from '../utils/request';

export async function queryAppstoreMenu(params) {
  return request('api/appstore/menu', {
    method: 'POST',
    body: params
  })
}

export async function getInterDetail(params) {
  return request('api/interface/detail', {
    method: 'GET',
    body: params
  })
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

//模型列表
export async function queryMd() {
  return request('/api/md');
}

//属性列表
export async function queryCategory(params) {
  return request('/api/getCategory', {
    method: 'GET',
    body: {
      ...params
    }
  })
}

//添加分组
export async function addCategory(params) {
  return request('/api/addCategory', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

//属性列表
export async function queryAttrList(params) {
  return request('/api/getAttrList', {
    method: 'GET',
    body: {
      ...params
    }
  })
}
