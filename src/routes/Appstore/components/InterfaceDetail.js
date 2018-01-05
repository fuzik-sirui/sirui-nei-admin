import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs, Icon, Card, Form, Input, Button, Select, Spin, Table } from 'antd';
import queryString from 'query-string';

import styles from './interfaceDetail.less';

import HoverForm from '../../../components/HoverForm/HoverForm';
import EditableCell from '../../../components/EditableCell/EditableCell';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

@connect(state => ({
  interface: state.interface,
}))

class DetailInterface extends PureComponent {
  constructor(props) {
    super(props);
    let { interface: { pageData } } = this.props;
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
        { type: 'input', placeholder: '标签', key: 'tips', rules: [] },
        { type: 'input', placeholder: '创建者', key: 'creator', rules: [] },
        { type: 'input', placeholder: '业务分组', key: 'group', rules: [] },
        { type: 'input', placeholder: '负责人', key: 'principal', rules: [] },
        { type: 'input', placeholder: '描述', key: 'decs', rules: [] },
      ],
      pageData: pageData,
    }
  }
  
  componentDidMount () {
    this.props.dispatch({
      type: 'interface/getData',
      payload: queryString.parse(this.props.location.search)
    })
    
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.interface.pageData) {
      this.setState({
        pageData: nextProps.interface.pageData
      })
    }
  }

  methodChange (value) {
    console.log(value);
    this.setState({

    })
  }

  contentList = (key) => {
    let { pageData: { request, response } } = this.state;
    let option = [
      { value: 0, label: '否' },
      { value: 1, label: '是' }
    ]
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    }, {
      title: '类型',
      dataIndex: 'type',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    }, {
      title: '描述',
      dataIndex: 'decs',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    }, {
      title: '必需',
      dataIndex: 'isRequired',
      render (text, record) {
        return (
          <EditableCell value={text} type="select" option={option} />
        )
      }
    }, {
      title: '默认值',
      dataIndex: 'defaultValue',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    }, {
      title: '生成规则',
      dataIndex: 'rules',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    }]
    const List = {
      request: <div className={styles.requestWrap}>
        { request ? <div>
          <span>请求地址：</span>
          <Select defaultValue={request.method} style={{width: '150px', marginRight: '10px' }} onChange={this.methodChange} >
            <Option value="POST">POST</Option>
            <Option value="GET">GET</Option>
            <Option value="DELETE">DELETE</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="PUT">PUT</Option>
          </Select>
          <Input value={request.url} style={{width: '350px'}} />
          <div style={{marginTop: '20px'}}>
            <span>请求数据</span>
            <Table columns={columns} dataSource={this.state.pageData.request.data} rowKey={record => record.name} pagination={false} />
          </div>
        </div> : <Spin /> }
      </div>,
      response:  <div className={styles.responseWrap}>
        {
          response ? 
          <div>
            <div style={{marginTop: '20px'}}>
              <span>返回数据</span>
              <Table columns={columns} dataSource={this.state.pageData.response.data} rowKey={record => record.name} pagination={false} />
            </div>
          </div> : <Spin />
        }
      </div>
    }
    return List[key]
  }

  handleSubmit = () => {

  }

  onTabChange = (key) => {
    this.setState({
      tabKey: key
    })
  }

  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

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

    let { pageData, tabList, tabKey, textList, formList, topForm } = this.state;
    let { detailLoading } = this.props.interface;
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
          <FormItem label="分组"  {...formItemLayout} >
            {getFieldDecorator('group', { 
              initialValue: pageData.group,
            })(
              <Input placeholder="分组" />
            )}
          </FormItem>
          <FormItem label="负责人"  {...formItemLayout} >
            {getFieldDecorator('principal', { 
              initialValue: pageData.principal,
            })(
              <Input placeholder="负责人"  />
            )}
          </FormItem>
          <FormItem label="描述"  {...formItemLayout} >
            {getFieldDecorator('decs', {
              initialValue: pageData.decs,
            })(
              <Input placeholder="描述" />
            )}
          </FormItem>
        </Form>
        <Card tabList={tabList} onTabChange={(key) => { this.onTabChange(key)}} >
          {this.contentList([tabKey])}
        </Card>
      </Card>
    )
  }
}

const InterfaceDetail = Form.create()(DetailInterface)
export default InterfaceDetail