import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar } from 'antd';

import FilterTable from '../../../components/FilterTable/FilterTable';
import FormModal from '../../../components/FormModal/FormModal';

import styles from './interface.less';

export default class Interface extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      FilterTableParams: {
        filterList: [
          { key: 'name', type: 'input', label: '名称', placeholder: '请输入接口名称' },
          { key: 'path', type: 'input', label: '路径', placeholder: '请输入接口路径' },
          { key: 'group', type: 'input', label: '分组', placeholder: '请输入接口分组' },
          { key: 'state', type: 'select', options: [{ key: 1, label: '未开始' }, { key: 2, label: '开发中'}, { key: 3, label: '已发布' }, { key: 3, label: '已废弃' }], label: '状态', placeholder: '请选择接口状态' },
        ],
        filterGrade: [],
        filterForm: { name: '', path: '', group: '', state: '' },
        addBtn: true,
        fetch: { url: '/api/project/interface', data: () => this.filterForm, dataKey: 'rows' },
        tableList: [
          { title: '名称', dataIndex: 'name', key: 'name' },
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
        scroll: 1200
      }
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    
  }
  
  render () {
    let { FilterTableParams, modalVisible, modalLevel, levelTableParams  } = this.state
    const menuHandle = function (e, record) {
      switch(e.key) {
        case 1: 
        break;
        case 2:
        break;
      }
    }
    const onAdd = () => {
      this.props.dispatch({
        type: 'equipment/showModal',
        payload: {
          modalTitle: '新增优惠券',
        },
      })
    }
    FilterTableParams.menuClick = menuHandle
    FilterTableParams.onAdd = onAdd
    return (
      <FilterTable {...FilterTableParams}   />
    )
  }
}

