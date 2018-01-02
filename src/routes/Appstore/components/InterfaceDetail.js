import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs, Icon } from 'antd';

import styles from './interfaceDetail.less';

const TabPane = Tabs.TabPane;

@connect(state => ({
  interface: state.interface,
}))

export default class InterfaceDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render () {
    return (
      <div className={styles.interDetailWrap}>
        <div className={styles.header}>
          <div className={styles.backBtn}>
            <Icon type="left" />
          </div>
        </div>
      </div>
    )
  }
}