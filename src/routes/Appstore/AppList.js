import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs } from 'antd';

import styles from './appList.less';

import { Interface } from './components/index';
import Md from '../Md/Md';
import Group from './components/Group';

const TabPane = Tabs.TabPane;

@connect(state => ({
  appstore: state.appstore,
  interface: state.interface,
}))

export default class AppList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  tabChange = () => {

  }

  tableMenuClick = (e, record) => {
    if (e.key == 1) {
      this.props.dispatch({
        type: 'interface/detail',
        payload: {
          id: record.id
        }
      });
    }
  }

  interfaceAdd = () => {
    this.props.dispatch({
      type: 'interface/add',
    })
  }

  render () {
    return (
      <div className={styles.projectWrap}>
        <Tabs className={styles.projectTabs} onChange={this.tabChange}>
          <TabPane tab="异步接口" key="1">
            <Interface tableOpreat={this.tableMenuClick} addFun={this.interfaceAdd} />
          </TabPane>
          <TabPane tab="数据模型" key="2">
            <Md />
          </TabPane>
          <TabPane tab="业务分组" key="3">
            <Group />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}