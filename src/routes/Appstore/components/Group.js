import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';

import { formItemLayout } from '../../../common/config';

import FilterTable from '../../../components/FilterTable/FilterTable';

const FormItem = Form.Item;

@connect(state => ({
  group: state.group,
}))

class GroupClass extends PureComponent {
  constructor(props) {
    super(props);
    const self = this;
    const tableHeight = window.innerHeight - 320;
    this.state = {
      FilterTableParams: {
        filterList: [
          { key: 'label', type: 'input', label: '名称', placeholder: '请输入接口名称' },
        ],
        filterGrade: [],
        filterForm: { name: '', path: '', group: '' },
        addBtn: true,
        fetch: { url: '/api/project/group', data: () => this.filterForm, dataKey: 'rows' },
        tableList: [
          {
            title: '名称',
            dataIndex: 'label',
            key: 'label',
            render(text, record) {
              return <a onClick={() => self.detail(record)}>{text}</a>;
            },
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
        scroll: tableHeight,
      },
      visible: false,
      detail: {},
      addVisible: false,
    };
  }

  detail = (content) => {
    this.setState({
      visible: true,
      detail: content,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  addOk = () => {
    this.setState({
      addVisible: false,
    });
  }

  addCancel = () => {
    this.setState({
      addVisible: false,
    });
  }

  openAdd = () => {
    this.setState({
      addVisible: true,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { FilterTableParams, detail } = this.state;
    FilterTableParams.menuClick = this.props.tableOpreat;
    FilterTableParams.onAdd = this.openAdd;
    return (
      <div>
        <FilterTable {...FilterTableParams} />
        <Modal
          title="新增分组"
          visible={this.state.addVisible}
          onOk={this.addOk}
          onCancel={this.addCancel}
        >
          <Form onSubmit={this.addOk}>
            <FormItem label="名称" {...formItemLayout} >
              {getFieldDecorator('label', {
                rules: [{ required: true, message: '请输入分组名称' }],
              })(
                <Input placeholder="分组名称" />
              )}
            </FormItem>
            <FormItem label="负责人" {...formItemLayout} >
              {getFieldDecorator('principal', {
                rules: [{ required: true, message: '请选择分组负责人' }],
              })(
                <Input placeholder="负责人" />
              )}
            </FormItem>
            <FormItem label="描述" {...formItemLayout} >
              {getFieldDecorator('desc', {
                rules: [{ required: true, message: '请输入分组描述' }],
              })(
                <Input placeholder="描述" />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Modal
          title="编辑分组"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.modifly}>
            <FormItem label="名称" {...formItemLayout} >
              {getFieldDecorator('label', {
                initialValue: detail.label,
                rules: [{ required: true, message: '请输入分组名称' }],
              })(
                <Input placeholder="分组名称" />
              )}
            </FormItem>
            <FormItem label="负责人" {...formItemLayout} >
              {getFieldDecorator('principal', {
                initialValue: detail.principal,
                rules: [{ required: true, message: '请选择分组负责人' }],
              })(
                <Input placeholder="负责人" />
              )}
            </FormItem>
            <FormItem label="描述" {...formItemLayout} >
              {getFieldDecorator('desc', {
                initialValue: detail.desc,
                rules: [{ required: true, message: '请输入分组描述' }],
              })(
                <Input placeholder="描述" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const Group = Form.create()(GroupClass);

export default Group;
