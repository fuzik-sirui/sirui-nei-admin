import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar } from 'antd';

import FilterTable from '../../../components/FilterTable/FilterTable';
import FormModal from '../../../components/FormModal/FormModal';

import styles from './interface.less';

@connect(state => ({
  interface: state.interface,
}))

export default class Interface extends PureComponent {
  constructor (props) {
    super(props);
    let tableHeight = window.innerHeight - 260;
    this.state = {
      FilterTableParams: {
        filterList: [
          { key: 'name', type: 'input', label: '名称', placeholder: '请输入接口名称' },
          { key: 'path', type: 'input', label: '路径', placeholder: '请输入接口路径' },
          { key: 'group', type: 'input', label: '分组', placeholder: '请输入接口分组' },
        ],
        filterGrade: [],
        filterForm: { name: '', path: '', group: ''},
        addBtn: true,
        fetch: { url: '/api/project/interface', data: () => this.filterForm, dataKey: 'rows' },
        tableList: [
          { title: '名称', dataIndex: 'name', key: 'name',
            render (text, record) {
              return <Link to={`/appstore/interfaceDetail?id=${record.id}`}>{text}</Link>
            }
          },
          { title: '方法', dataIndex: 'method', key: 'method' },
          { title: '路径', dataIndex: 'path', key: 'path' },
          { title: '标签', dataIndex: 'tips', key: 'tips',
            render (text, record) {
              return text.join(',')
            }
          },
          { title: '分组', dataIndex: 'group', key: 'group' },
          { title: '状态', dataIndex: 'state', key: 'state' },
          { title: '版本', dataIndex: 'version', key: 'version' },
          { title: '负责人', dataIndex: 'principal', key: 'principal' },
          { title: '创建者', dataIndex: 'creator', key: 'creator' },
          { title: '创建时间', dataIndex: 'creatTime', key: 'creatTime' },
        ],
        otherList: [],
        opreat: [{ key: 1, name: '详情' }, { key: 2, name: '删除' }],
        rowKey: 'id',
        localName: 'equipment',
        pagination: false,
        scroll: tableHeight
      }
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
  }
  
  render () {
    let { FilterTableParams, modalVisible, modalLevel, levelTableParams  } = this.state;
    FilterTableParams.menuClick = this.props.tableOpreat
    FilterTableParams.onAdd = this.props.addFun
    return (
      <FilterTable {...FilterTableParams}   />
    )
  }
}

