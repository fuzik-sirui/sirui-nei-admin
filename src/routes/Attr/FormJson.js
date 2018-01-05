import React, { PureComponent } from 'react';
import { Table, Button, Form, Modal } from 'antd';
import styles from './Attr.less';

@Form.create()
export default class FromJson extends PureComponent {

    handleJsonClose(val) {
        this.setState({
            jsonVisible: !!val
        });
    }

    render() {
        return (<Modal title="导入JSON"
            visible={this.state.jsonVisible}
            onOk={() => this.handleJsonClose(false)}
            confirmLoading={this.state.confirmLoading}
            onCancel={() => this.handleJsonClose(false)}
        >
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="上传文件"
                    extra=".json或txt文件"
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" />点击上传</Button>
                    </Upload>
                </FormItem>
                <FormItem label="JSON:" {...formItemLayout}>
                    <Input type="textarea" row={5} placeholder="内容" className={styles.textarea} />
                </FormItem>
            </Form>
        </Modal>);
    }

}