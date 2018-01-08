import React from 'react';
import dynamic from 'dva/dynamic';
import { getMenuData } from './menu';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  // add routerData prop
  component: () => {
    const p = component();
    return new Promise((resolve, reject) => {
      p.then((Comp) => {
        resolve(props => <Comp {...props} routerData={getRouterData(app)} />);
      }).catch(err => reject(err));
    });
  },
});

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = item.name;
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = item.name;
    }
  });
  return keys;
}

export const getRouterData = (app) => {
  const routerData = {
    '/': {
      component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    },
    '/dashboard': {
      component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
      hideInBreadcrumb: true,
      name: '工作台',
    },
    '/appstore': {
      component: dynamicWrapper(app, ['appstore'], () => import('../routes/Appstore/index'))
    },
    '/appstore/appList': {
      component: dynamicWrapper(app, ['appstore', 'interface'], () => import('../routes/Appstore/AppList'))
    },
    '/appstore/interfaceDetail': {
      component: dynamicWrapper(app, ['interface'], () => import('../routes/Appstore/components/InterfaceDetail'))
    },
    '/appstore/interfaceAdd': {
      component: dynamicWrapper(app, ['interface'], () => import('../routes/Appstore/components/InterfaceAdd'))
    },
    '/appstore/attr/:id': {
      component: dynamicWrapper(app, [], () => import('../routes/Attr/Attr')),
    },
    '/appstore/attrAdd': {
      component: dynamicWrapper(app, [], () => import('../routes/MdAdd/MdAdd')),
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
    },
    '/user/register': {
      component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
    },
    '/user/register-result': {
      component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
    },
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData());
  const routerDataWithName = {};
  Object.keys(routerData).forEach((item) => {
    routerDataWithName[item] = {
      ...routerData[item],
      name: routerData[item].name || menuData[item.replace(/^\//, '')],
    };
  });
  return routerDataWithName;
};
