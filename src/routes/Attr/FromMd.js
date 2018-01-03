import React, { PureComponent } from 'react';
import { Table, Button, Form, Modal } from 'antd';

@Form.create()
export default class FromMd extends PureComponent {
    state = {
        modelVisible: false,
        selectedRowKeys: []
    }

    componentDidMount() {
        this.getMdList();
    }

    getMdList() {
        queryMd().then(ret => {
            this.setState({
                mdList: ret.list
            })
        })
    }

    handleModelClose(val) {
        this.setState({
            modelVisible: !!val
        });
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (<Modal
            title="导入数据模型"
            wrapClassName="vertical-center-modal"
            visible={this.state.modelVisible}
            onOk={() => this.handleModelClose(false)}
            onCancel={() => this.handleModelClose(false)}
        >
            <Table columns={columns_select} rowSelection={rowSelection} dataSource={this.state.data} pagination={false} />
        </Modal>)
    }
}