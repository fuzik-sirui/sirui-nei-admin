import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, List, Avatar, Menu, Icon } from 'antd';
import { Route, Redirect, Switch, Link } from 'dva/router';
import { getRoutes } from '../../utils/utils';
import classNames from 'classnames';

import NotFound from '../Exception/404';
import AppList from './AppList';
import InterfaceDetail from './components/InterfaceDetail';

import styles from './index.less';

const SubMenu = Menu.SubMenu;

@connect(state => ({
  appstore: state.appstore,
}))

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'appstore/fetchMenu'
    });
    if (this.props.location.pathname !== '/appstore/appList') {
      dispatch({ type: 'appstore/showBack'});
    } else {
      dispatch({ type: 'appstore/hideBack'});
    }
  }

  menuItem(data) {
    return (
      <Menu.Item key={data.key}>
        <span>{data.name}</span>
      </Menu.Item>
    )
  }

  handleClick() {
    
  }

  renderMenu(menuData) {
    if (!menuData) {
      return <div>暂无项目</div>
    } else {
      return (
        <Menu
          onClick={this.handleClick}
          mode="inline"
        >
          {
            menuData.map((item) => {
              if (item.childern) {
                return <SubMenu key={item.key} title={<span>{item.name}</span>}>
                  {
                    item.childern.map((items) => {
                      return this.menuItem(items)
                    })
                  }
                </SubMenu>
              } else {
                return this.menuItem(item)
              }
            })
          }
        </Menu>
      )
    }
  }

  backFun = () => {
    this.props.dispatch({
      type: 'appstore/back',
    })
  }

  render() {
    let { appstore: { loading: projectLoading, menuData, showBack }, match, routerData } = this.props
    return (
      <div className={styles.appWrap} >
        <div className={styles.leftMenu}>
          <div onClick={this.backFun} className={classNames({ [styles.backBtn]: true, [styles.backActive]: showBack })}> <Icon type="caret-left" /> </div>
          <h2 className={[styles.menuTitle]}><Icon type="appstore" style={{marginRight: '10px'}} />全部项目组</h2>
          { this.renderMenu(menuData) }
        </div>
        <div className={styles.rightPage} >
          <Switch>
            {
              getRoutes(match.path, routerData).map(item =>
                (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                )
              )
            }
            <Redirect exact from="/appstore" to="/appstore/appList" />
            <Route render={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}