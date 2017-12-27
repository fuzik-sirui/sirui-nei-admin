const menuData = [{
  name: '工作台',
  icon: 'dashboard',
  path: 'dashboard',
}, {
  name: '项目管理',
  icon: 'appstore-o',
  path: 'appstore',
}, {
  name: '账户',
  icon: 'user',
  path: 'user',
  hideInMenu: true,
  children: [{
    name: '登录',
    path: 'login',
  }, {
    name: '注册',
    path: 'register',
  }, {
    name: '注册结果',
    path: 'register-result',
  }],
}];

function formatter(data, parentPath = '') {
  const list = [];
  data.forEach((item) => {
    if (item.children) {
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
        children: formatter(item.children, `${parentPath}${item.path}/`),
      });
    } else {
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
      });
    }
  });
  return list;
}

export const getMenuData = () => formatter(menuData);
