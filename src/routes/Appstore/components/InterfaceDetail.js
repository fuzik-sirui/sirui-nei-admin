import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs, Icon, Card } from 'antd';
import queryString from 'query-string';

import styles from './interfaceDetail.less';

import HoverForm from '../../../components/HoverForm/HoverForm';

const TabPane = Tabs.TabPane;

@connect(state => ({
  interface: state.interface,
}))

export default class InterfaceDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [
        {key: 'request', tab: '请求信息',},
        {key: 'response', tab: '响应信息',}
      ],
      tabKey: 'request',
      textList: [
        { label: '标签', value: 'tips' },
        { label: '创建者', value: 'creator' },
        { label: '业务分组', value: 'group' },
        { label: '负责人', value: 'principal' },
        { label: '描述', value: 'decs' },
      ],
      formList: [
        { placeholder: '标签', key: 'tips', rules: [] },
        { placeholder: '创建者', key: 'creator', rules: [] },
        { placeholder: '业务分组', key: 'group', rules: [] },
        { placeholder: '负责人', key: 'principal', rules: [] },
        { placeholder: '描述', key: 'decs', rules: [] },
      ]
    }
  }
  
  componentDidMount () {
    this.props.dispatch({
      type: 'interface/getData',
      payload: queryString.parse(this.props.location.search)
    })
  }

  contentList = (key) => {
    const List = {
      request: <div></div>
    }
  }

  render () {
    let { tabList, tabKey, textList } = this.state;
    let { pageData, detailLoading } = this.props.interface;
    return (
      <Card loading={detailLoading} title={pageData.title} className={styles.interDetailWrap}>
        <ul className={styles.textList}>
          {
            textList.map((item) => {
              return <li key={item.value}>
                <span className={styles.textLabel}>{item.label}</span>
                <span className={styles.textValue}>{pageData[item.value]}</span>
              </li>
            })
          }
        </ul>
        <Card tabList={tabList} >
          {this.contentList([tabKey])}
        </Card>
      </Card>
    )
  }
}