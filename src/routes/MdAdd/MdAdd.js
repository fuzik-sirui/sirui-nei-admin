import React, { PureComponent } from 'react';
import { Table, Input, Icon, Button, Popconfirm, Form, Radio, Select, Upload, Modal, Badge, Dropdown, Menu } from 'antd';
import { Row, Col, Card, Tooltip, Divider } from 'antd';
import EditableCell from '../../components/EditableCell/EditableCell';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Link } from 'dva/router';
import { getType } from '../../utils/utils';
import Category from './Category';
import styles from "./MdAdd.less";

import { queryCategory, queryAttrList } from "../../services/api";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const ButtonGroup = Button.Group;

@Form.create()
export default class Add extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryModal: false,
      categoryList: [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
      attrList: []
    }
  }
  componentDidMount() {
    this.getAttrList();
  }
  handleModal = (val) => {
    this.setState({
      categoryModal: !!val
    });
  }
  getCategory = () => {
    queryCategory().then(ret => {
      if (ret.status == 'ok') {
        this.setState({
          categoryList: ret.list
        });
      }
    })
  }
  getAttrList = () => {
    queryAttrList({}).then(ret => {
      if (ret.status == 'ok') {
        this.setState({
          attrList: ret.list
        });
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  goCategory = () => {
    this.setState(
      { categoryModal: true }
    )
    console.log("goCategory：" + this.state.categoryModal);
  }


  tableFooter = () => {
    return (<ButtonGroup>
      <Button onClick={this.handleAdd}>添加</Button>
      <Button onClick={() => { }}>从数据模型导入</Button>
      <Button onClick={() => { }}>从JSON导入</Button>
    </ButtonGroup>)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 20,
          offset: 4,
        },
      },
    };
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      render: (text, record) => {
        return (
          <EditableCell value={text} type={getType(text)} />
        )
      }
    },
    {
      title: '类型',
      dataIndex: 'type',
      render: (text, record) => {
        return (
          <EditableCell value={text} type={getType(text)} />
        )
      }
    },
    {
      title: '描述',
      dataIndex: 'desc',
      render: (text, record) => {
        return (
          <EditableCell value={text} type={getType(text)} />
        )
      }
    },
    {
      title: '默认值',
      dataIndex: 'default',
      render: (text, record) => {
        return (
          <EditableCell value={text} type={getType(text)} />
        )
      }
    },
    {
      title: '生成规则',
      dataIndex: 'rule',
      render: (text, record) => {
        return (
          <EditableCell value={text} type={getType(text)} />
        )
      }
    }
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: '名称',
        upgradeNum: 'Upgraded: 56',
      });
    }
    let { categoryList } = this.state;
    console.log(JSON.stringify(categoryList))
    let Options = categoryList.map(item => <Option key={item.name}>{item.name}</Option>);
    return (
      <PageHeaderLayout title="新建数据模型">
        <Card bordered={false}>
          <Form ref="tableForm" onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="名称:"
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '请输入数据模型名称',
                }],
              })(
                <Row gutter={8}>
                  <Col span={8}>
                    <Input />
                  </Col>
                  <Col span={16}>
                    请输入数据模型名称，以英文字母，数字，下划线组成的1-40字符
                                    </Col>
                </Row>
                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="描述:"
            >
              {getFieldDecorator('desc', {
                rules: []
              })(
                <Input type='textarea' rows={5} className={styles.textarea} />
                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="类别:"
            >
              {getFieldDecorator('radio-group')(
                <div>
                  <RadioGroup>
                    <Radio value="a">哈希</Radio>
                    <Radio value="b">枚举</Radio>
                    <Radio value="c">数组</Radio>
                    <Radio value="d">字符</Radio>
                    <Radio value="e">数值</Radio>
                    <Radio value="f">布尔</Radio>
                    <Radio value="g">文件</Radio>
                  </RadioGroup>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    size='small'
                    footer={this.tableFooter}
                  />
                </div>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="分组"
              hasFeedback
            >
              {getFieldDecorator('select', {
                rules: []
              })(
                <Row gutter={8}>
                  <Col span={8}>
                    <Select placeholder="请选择分类">
                      {Options}
                    </Select>
                  </Col>
                  <Col span={16}>
                    <a onClick={this.goCategory}>新建</a>
                  </Col>
                </Row>

                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="标签:"
            >
              {getFieldDecorator('tags', {
                rules: []
              })(
                <Input />
                )}
            </FormItem>
            <FormItem  {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">保存</Button>
            </FormItem>
          </Form>
        </Card>
        <Category visible={this.state.categoryModal} handleModal={this.handleModal} />
      </PageHeaderLayout>
    )
  }
}