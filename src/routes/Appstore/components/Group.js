import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar, Modal } from 'antd';

import FilterTable from '../../../components/FilterTable/FilterTable';
import FormModal from '../../../components/FormModal/FormModal';

import styles from './interface.less';

@connect(state => ({
  group: state.group,
}))

class GroupClass extends PureComponent {
  constructor (props) {
    super(props);
    const self = this;
    let tableHeight = window.innerHeight - 320;
    this.state = {
      FilterTableParams: {
        filterList: [
          { key: 'label', type: 'input', label: '名称', placeholder: '请输入接口名称' },
        ],
        filterGrade: [],
        filterForm: { name: '', path: '', group: ''},
        addBtn: true,
        fetch: { url: '/api/project/group', data: () => this.filterForm, dataKey: 'rows' },
        tableList: [
          { title: '名称', dataIndex: 'label', key: 'label',
            render (text, record) {
              return <a href="javascript:;" onClick={self.detail(record.id)}>{text}</a>
            }
          },
          { title: '描述', dataIndex: 'desc', key: 'desc' },
          { title: '负责人', dataIndex: 'principal', key: 'principal' },
          { title: '创建者', dataIndex: 'creator', key: 'creator' },
          { title: '创建时间', dataIndex: 'creatTime', key: 'creatTime' },
        ],
        otherList: [],
        opreat: false,
        rowKey: 'id',
        localName: 'group',
        pagination: false,
        scroll: tableHeight
      },
      visible: false,
      detailId: null,
    }
  }

  detail = (id) => {
    this.setState({
      visible: true,
      detailId: id,
    })
  }
  
  handleOk = () => {

  }

  handleCancel = () => {

  }

  componentDidMount() {
    const { dispatch } = this.props;
  }
  
  render () {
    const { getFieldDecorator } = this.props.form;
    let { FilterTableParams, modalVisible, modalLevel, levelTableParams  } = this.state;
    FilterTableParams.menuClick = this.props.tableOpreat;
    FilterTableParams.onAdd = this.props.addFun;
    return (
      <div>
        <FilterTable {...FilterTableParams}   />
        <Modal
          title="新增分组"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.modifly}>
            <FormItem label="名称" {...formItemLayout} >
              {getFieldDecorator('name', {
                rules: [ { required: true, message: '请输入分组名称', } ]
              })(
                <Input placeholder="分组名称" />
              )}
            </FormItem>
            <FormItem label="负责人" {...formItemLayout} >
              {getFieldDecorator('principal', {
                rules: [ { required: true, message: '请选择分组负责人', } ]
              })(
                <Input placeholder="负责人" />
              )}
            </FormItem>
            <FormItem label="描述" {...formItemLayout} >
              {getFieldDecorator('desc', {
                rules: [ { required: true, message: '请输入分组描述', } ]
              })(
                <Input placeholder="描述" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

const Group = Form.creat()(GroupClass);

export default Group;