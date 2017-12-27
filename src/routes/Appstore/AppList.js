import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs } from 'antd';

import styles from './appList.less';

import { Interface } from './components/index';

const TabPane = Tabs.TabPane;

@connect(state => ({
  appstore: state.appstore,
}))

export default class AppList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  tabChange = () => {

  }

  render () {
    return (
      <div className={styles.projectWrap}>
        <Tabs onChange={this.tabChange}>
          <TabPane tab="异步接口" key="1">
            <Interface />
          </TabPane>
          <TabPane tab="数据模型" key="2">

          </TabPane>
          <TabPane tab="业务分组" key="3">

          </TabPane>
        </Tabs>
      </div>
    )
  }
}