import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Input, Select, Spin, Table } from 'antd';
import queryString from 'query-string';

import styles from './interfaceDetail.less';

import EditableCell from '../../../components/EditableCell/EditableCell';

const FormItem = Form.Item;
const Option = Select.Option;

@connect(state => ({
  interface: state.interface,
}))

class DetailInterface extends PureComponent {
  constructor(props) {
    super(props);
    const { interface: { pageData } } = this.props;
    const option = [
      { value: 0, label: '否' },
      { value: 1, label: '是' },
    ];
    this.state = {
      tabList: [
        { key: 'request', tab: '请求信息' },
        { key: 'response', tab: '响应信息' },
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
        { type: 'input', placeholder: '标签', key: 'tips', rules: [] },
        { type: 'input', placeholder: '创建者', key: 'creator', rules: [] },
        { type: 'input', placeholder: '业务分组', key: 'group', rules: [] },
        { type: 'input', placeholder: '负责人', key: 'principal', rules: [] },
        { type: 'input', placeholder: '描述', key: 'decs', rules: [] },
      ],
      pageData,
      columns: [{
        title: '名称',
        dataIndex: 'name',
        render(text) {
          return (
            <EditableCell value={text} type="input" />
          );
        },
      }, {
        title: '类型',
        dataIndex: 'type',
        render(text) {
          return (
            <EditableCell value={text} type="input" />
          );
        },
      }, {
        title: '描述',
        dataIndex: 'decs',
        render(text) {
          return (
            <EditableCell value={text} type="input" />
          );
        },
      }, {
        title: '必需',
        dataIndex: 'isRequired',
        render(text) {
          return (
            <EditableCell value={text} type="select" option={option} />
          );
        },
      }, {
        title: '默认值',
        dataIndex: 'defaultValue',
        render(text) {
          return (
            <EditableCell value={text} type="input" />
          );
        },
      }, {
        title: '生成规则',
        dataIndex: 'rules',
        render(text) {
          return (
            <EditableCell value={text} type="input" />
          );
        },
      }],
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'interface/getData',
      payload: queryString.parse(this.props.location.search)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.interface.pageData) {
      this.setState({
        pageData: nextProps.interface.pageData,
      });
    }
  }

  onTabChange(value) {
    console.log(value);
    this.setState({
    });
  }

  expandedRowRender = (record) => {
    const { columns } = this.state;
    if (record.childern) {
      return (
        <Table
          rowKey={record => record.name}
          columns={columns}
          expandedRowRender={this.expandedRowRender}
          dataSource={record.childern}
          pagination={false}
        />
      );
    } else {
      return null;
    }
  }

  contentList = (key) => {
    const { pageData: { request, response }, columns } = this.state;
    const List = {
      request: <div className={styles.requestWrap}>
        { request ? <div>
          <span>请求地址：</span>
          <Select defaultValue={request.method} style={{width: '150px', marginRight: '10px' }} onChange={this.onTabChange} >
            <Option value="POST">POST</Option>
            <Option value="GET">GET</Option>
            <Option value="DELETE">DELETE</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="PUT">PUT</Option>
          </Select>
          <Input value={request.url} style={{width: '350px'}} />
          <div style={{marginTop: '20px'}}>
            <Table columns={columns} dataSource={this.state.pageData.request.data} rowKey={record => record.name} pagination={false} />
          </div>
        </div> : <Spin /> }
      </div>,
      response:
        <div className={styles.responseWrap}>
          {
            response ?
              <div style={{marginTop: '0px'}}>
                <Table columns={columns} expandedRowRender={this.expandedRowRender} dataSource={this.state.pageData.response.data} rowKey={record => record.name} pagination={false} />
              </div>
              : <Spin />
          }
        </div>
    };
    return List[key];
  }

  handleSubmit = () => {
  }

  onTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  }

  render () {
    const { getFieldDecorator, } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const { pageData, tabList, tabKey, } = this.state;
    const { detailLoading } = this.props.interface;
    return (
      <Card loading={detailLoading} title={pageData.title} className={styles.interDetailWrap}>
        <Form className={styles.topForm} layout="inline" onSubmit={this.handleSubmit} >
          <FormItem label="标签" {...formItemLayout} >
            {getFieldDecorator('tips', {
              initialValue: pageData.tips,
            })(
              <Input placeholder="标签" />
            )}
          </FormItem>
          <FormItem label="创建者" {...formItemLayout} >
            {getFieldDecorator('creator', {
              initialValue: pageData.creator,
            })(
              <Input placeholder="创建者" />
            )}
          </FormItem>
          <FormItem label="分组" {...formItemLayout} >
            {getFieldDecorator('group', {
              initialValue: pageData.group,
            })(
              <Input placeholder="分组" />
            )}
          </FormItem>
          <FormItem label="负责人" {...formItemLayout} >
            {getFieldDecorator('principal', {
              initialValue: pageData.principal,
            })(
              <Input placeholder="负责人" />
            )}
          </FormItem>
          <FormItem label="描述" {...formItemLayout} >
            {getFieldDecorator('decs', {
              initialValue: pageData.decs,
            })(
              <Input placeholder="描述" />
            )}
          </FormItem>
        </Form>
        <Card
          className={styles.sideTab}
          tabList={tabList}
          onTabChange={key => this.onTabChange(key)}
        >
          {this.contentList([tabKey])}
        </Card>
      </Card>
    );
  }
}

const InterfaceDetail = Form.create()(DetailInterface);

export default InterfaceDetail;
