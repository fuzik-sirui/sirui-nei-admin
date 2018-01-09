import React, { PureComponent } from 'react';
import { Table, Button, Modal } from 'antd';

import { queryMd } from '../../services/api';
import { config } from '../../common/config';
export default class FromMd extends PureComponent {
    state = {
        modelVisible: false,
        mdList: [],
        selectedRowKeys: []
    }

    componentDidMount() {
        this.getMdList();
    }

    getMdList() {
        queryMd().then(ret => {
            this.setState({
                mdList: ret.datatypes
            })
        })
    }

    goModelClose(val) {
        this.props.handleModal(val);
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        let formItemLayout = config.formItemLayout;
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const columns_select = [{
            title: '类型',
            dataIndex: 'name'
        },
        {
            title: '描述',
            dataIndex: 'desc'
        }];

        let visible = !!(this.props.visible);
        return (<Modal
            title="导入数据模型"
            wrapClassName="vertical-center-modal"
            visible={visible}
            onOk={() => this.goModelClose(false)}
            onCancel={() => this.goModelClose(false)}
        >
            <Table columns={columns_select} rowSelection={rowSelection} dataSource={this.state.mdList} pagination={false} />
        </Modal>)
    }
}