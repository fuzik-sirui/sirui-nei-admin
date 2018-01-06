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
import FromJson from "../../components/FromMd/FormJson";
import FromMd from "../../components/FromMd/FromMd";
import { config } from '../../common/config';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const ButtonGroup = Button.Group;

@Form.create()
export default class MdAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryModal: false,
            mdModal: false,
            jsonModal: false,
            categoryList: [],//分组数组
            attrList: []//属性数组
        }
    }

    componentDidMount() {
        let { match: { params: { id } } } = this.props;
        if (id) {
            this.getCategory({ id: id });
            this.getAttrList({ id: id });
        }

    }

    handleModal = (ret) => {
        this.setState({
            mdModal: false
        });
        this.getCategory();
    }

    /**
     * 分组
     */
    getCategory = (params) => {
        queryCategory(params).then(ret => {
            this.setState({
                categoryList: ret.list
            });
        })
    }

    /**
     * 属性
     */
    getAttrList = (params) => {
        queryAttrList(params).then(ret => {
            this.setState({
                attrList: ret.list
            });
        })
    }

    /**
     * 新增
     */
    handleAdd = () => {
        const _key = Math.floor(1000 * Math.random());
        //先存服务器再渲染
        const newData = {
            key: _key,
            name: '新增项',
            age: 0,
            address: 'Sidney No. 1 Lake Park',
        };
        const { attrList } = this.state;
        this.setState({
            attrList: [...attrList, newData]
        })
    }

    /**
     * 保存表单
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    /**
     * 新建分组
     */
    goCategory = () => {
        this.setState(
            { categoryModal: true }
        )
        console.log("goCategory：" + this.state.categoryModal);
    }

    /**
     * 从模型导入 
     */
    goMd = () => {
        this.setState({
            mdModal: true
        });
    }

    handleMd = (val) => {
        this.setState({
            mdModal: false
        });
    }
    /**
     * 从Json导入 
     */
    goJson = () => {
        this.setState({
            jsonModal: true
        });
    }

    handleJson = () => {
        this.setState({
            jsonModal: false
        });
    }

    /**
     * 表格footer
     */
    tableFooter = () => {
        return (<div><ButtonGroup>
            <Button onClick={this.handleAdd}>添加</Button>
            <Button onClick={this.goMd}>从数据模型导入</Button>
            <Button onClick={this.goJson}>从JSON导入</Button>
        </ButtonGroup>
            <FromJson visible={this.state.jsonModal} handleModal={this.handleJson}></FromJson>
            <FromMd visible={this.state.mdModal} handleModal={this.handleMd}></FromMd>
        </div>
        )
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let formItemLayout = config.formItemLayout;
        let tailFormItemLayout = config.tailFormItemLayout;
        let { categoryList } = this.state;
        let Options = categoryList.map(item => <Option key={item.name}>{item.name}</Option>);
        let { attrList } = this.state;
        //表头
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
            title: '生成规则',
            dataIndex: 'rule',
            render: (text, record) => {
                return (
                    <EditableCell value={text} type={getType(text)} />
                )
            }
        }];

        return (
            <div>
                <Card bordered={false} title="新建数据模型">
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
                                        dataSource={attrList}
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
            </div>
        )
    }
}