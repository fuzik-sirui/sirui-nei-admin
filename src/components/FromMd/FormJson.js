import React, { PureComponent } from 'react';
import { Table, Button, Form, Modal, Upload, Icon, Input } from 'antd';
import { config } from '../../common/config';

const FormItem = Form.Item;

@Form.create()
export default class FromJson extends PureComponent {
    state = {
        confirmLoading: false
    }


    goModelClose(val) {
        this.props.handleModal(val);
    }

    render() {
        let formItemLayout = config.formItemLayout;
        let visible = !!(this.props.visible);
        const upconfig = {
            action: '/upload.do',
            listType: 'text',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            }
        };
        return (<Modal title="导入JSON"
            visible={visible}
            onOk={() => this.goModelClose(false)}
            confirmLoading={this.state.confirmLoading}
            onCancel={() => this.goModelClose(false)}
        >
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="上传文件"
                    extra=".json或txt文件"
                >
                    <Upload name="logo" {...upconfig}>
                        <Button>
                            <Icon type="upload" />点击上传</Button>
                    </Upload>
                </FormItem>
                <FormItem label="JSON:" {...formItemLayout}>
                    <Input type="textarea" row={5} placeholder="内容" style={{ height: '5rem' }} />
                </FormItem>
            </Form>
        </Modal>);
    }

}