import React, { PureComponent } from 'react';
import { Input, Button, Form, Select, Modal, message } from 'antd';
import { Row, Col, Divider } from 'antd';
import styles from './Category.less';

import { addCategory } from "../../services/api";

const FormItem = Form.Item;

@Form.create()
export default class Category extends PureComponent {
    state = {
        visible: false,
        confirmLoading: false
    }

    handleModal = (val) => {
        this.props.handleModal(val);
    }
    handleGroupSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                addCategory(values).then(ret => {
                    if (ret.status == "ok") {
                        message.info('保存成功');
                        this.handleModal(false);
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let visible = !!(this.props.visible);
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
        return (
            <Modal title="新建业务分组"
                visible={visible}
                onOk={() => this.handleModal(false)}
                confirmLoading={this.state.confirmLoading}
                onCancel={() => this.handleModal(false)}
                footer={null}
            >
                <Form ref="addForm" onSubmit={this.handleGroupSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="名称:"
                    >
                        {getFieldDecorator('groupName', {
                            rules: [{
                                required: true, message: '请输入数据模型名称',
                            }],
                        })(
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Input />
                                </Col>
                                <Col span={16}>
                                    最多20个中文或者40个英文字符
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
                    <FormItem  {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            </Modal>)
    }
}