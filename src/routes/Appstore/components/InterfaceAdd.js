import React, { Component } from 'react';
import { Form, Input, Radio, Select, Button, Card } from 'antd';
import { connect } from 'dva';

import { getGroup } from '../../../services/api';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const ButtonGroup = Button.Group;
const { TextArea } = Input;

@connect(state => ({
  interface: state.interface,
}))

class InterfaceAddClass extends Component {
  constructor (porps) {
    super(porps);
    this.state = {
      group: []
    }
  }

  componentWillMount () {
    const self = this;
    getGroup().then(data => {
      self.setState({
        group: data
      })
    }).catch((err) => {
      Message.error(err.message)
    })
  }

  methodChange = () => {

  }

  tipsChange = () => {

  }

  render () {
    let { group } = this.state;
    const { getFieldDecorator } = this.props.form;
    const methodSelector = getFieldDecorator('method', {
      initialValue: 'POST',
    })(
      <Select style={{ width: 100 }}>
        <Option value="POST">POST</Option>
        <Option value="GET">GET</Option>
        <Option value="DELETE">DELETE</Option>
        <Option value="PATCH">PATCH</Option>
        <Option value="PUT">PUT</Option>
      </Select>
    );

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };

    return (
      <Card title="新增接口">
        <Form>
          <FormItem label="名称" {...formItemLayout} >
            {getFieldDecorator('name', {
              rules: [ { required: true, message: '请输入接口名称', } ]
            })(
              <Input placeholder="请输入接口名称" />
            )}
          </FormItem>
          <FormItem label="请求" {...formItemLayout} >
            {getFieldDecorator('url', {
              rules: [ { required: true, message: '请输入接口名称', } ]
            })(
              <Input addonBefore={methodSelector}  placeholder="请输入接口名称" />
            )}
          </FormItem>
          <FormItem label="描述" {...formItemLayout} >
            {getFieldDecorator('desc', {
              rules: [ { required: true, message: '请输入异步接口描述信息', } ]
            })(
              <TextArea row={4} placeholder="请输入异步接口描述信息" />
            )}
          </FormItem>
          <FormItem label="业务分组" {...formItemLayout} >
            {getFieldDecorator('group', {
              rules: [ { required: true, message: '业务分组', } ]
            })(
              <Select placeholder="请选择业务分组">
                {
                  group.map((item) => {
                    return <Option key={item.id} value={item.id}>{ item.label }</Option>
                  })
                }
              </Select>
            )}
          </FormItem>
          <FormItem label="标签" {...formItemLayout} >
            {getFieldDecorator('tips', {
              rules: [ { required: true, message: '请输入接口标签', } ]
            })(
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="可以输入多个标签"
                onChange={this.tipsChange}
              >
              </Select>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout} >
            <Button style={{marginRight: 10}} type="primary" icon="check" >确定</Button>
            <Button icon="reload">重置</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

const InterfaceAdd = Form.create()(InterfaceAddClass)

export default InterfaceAdd