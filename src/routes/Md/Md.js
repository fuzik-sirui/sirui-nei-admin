import React, { PureComponent } from 'react';
import { queryMd } from '../../services/api';
import { Table, Input, Icon, Button, Popconfirm, Form, Upload, Modal } from 'antd';
import { Row, Col, Card, Tooltip, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { getType } from '../../utils/utils';
import { Link } from 'dva/router';

import styles from './Md.less';
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { Search } = Input;

export default class Md extends PureComponent {
  constructor(props) {
    super(props);

  }
  state = {
    data: [],
    selectedRowKeys: []
  }

  fetch() {
    this.setState({ loading: true });
    queryMd().then(ret => {
      this.setState({
        data: ret.datatypes
      })
    })
  }

  componentDidMount() {
    this.fetch();
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }


  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      render: (text, record) => {
        return (
          <Link to={`attr/${record.key}`}>{text}</Link>
        )
      }
    },
    {
      title: '类别',
      dataIndex: 'type'
    },
    {
      title: '描述',
      dataIndex: 'desc'
    },
    {
      title: '标签',
      dataIndex: 'default'
    },
    {
      title: '分组',
      dataIndex: 'rule'
    }];
    const extraContent = (
      <div className={styles.extraContent}>
        <ButtonGroup>
          <Link to="attrAdd"><Button type="primary">新建模型</Button></Link>
          <Button onClick={this.handleAdd} type="primary" disabled={!hasSelected}>删除</Button>
        </ButtonGroup>
        <Search
          className={styles.extraContentSearch}
          placeholder="请输入"
          onSearch={() => ({})}
        />
      </div>
    );
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card bordered={false} extra={extraContent}>
        {/* <EditableTable columns={columns} dataSource={data} /> */}
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={false} />
      </Card>
    );
  }
}
