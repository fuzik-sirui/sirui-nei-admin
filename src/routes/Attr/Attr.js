import React, { PureComponent } from 'react';
import { Table, Input, Icon, Button, Popconfirm, Form, Upload, Modal } from 'antd';
import { Row, Col, Card, Tooltip, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableCell from '../../components/EditableCell/EditableCell';
import { getType } from '../../utils/utils';
import { queryMd, queryAttrList } from '../../services/api';
import styles from './Attr.less';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

export default class Attr extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modelVisible: false,
      jsonVisible: false,
      confirmLoading: false,
      mdList: [],
      attrList: [],
    }
  }
  
  componentDidMount() {
    let { match: { params: { id } } } = this.props;
    this.getAttrList({ id: id });
  }

  getAttrList(params) {
    this.setState({ loading: true });
    queryAttrList(params).then(ret => {
      this.setState({
        attrList: ret.list
      })
    })
  }

  handleAdd = () => {
    const _key = Math.floor(1000 * Math.random());
    const newData = {
      key: _key,
      name: 'addddd',
      age: 4444,
      address: 'Sidney No. 1 Lake Park',
    };
    const { data } = this.state;
    this.setState({
      attrList: [...attrList, newData]
    })
  }

  onDelete = (key) => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    },
    {
      title: '类型',
      dataIndex: 'type',
      render (text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    },
    {
      title: '描述',
      dataIndex: 'desc',
      render(text, record) {
        return (
          <EditableCell value={text} record="input" />
        )
      }
    },
    {
      title: '默认值',
      dataIndex: 'default',
      render (text, record) {
        return (
          <EditableCell value={text} record="input" />
        )
      }
    },
    {
      title: '生成规则',
      dataIndex: 'rule',
      render (text, record) {
        return (
          <EditableCell value={text} type={record} />
        )
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          this.state.attrList.length > 1 ?
            (
              <Popconfirm title="确定删除吗?" onConfirm={() => this.onDelete(record.key)}>
                <a title="删除" href="javascript:;"><Icon type="delete" /></a>
              </Popconfirm>
            ) : null
        );
      }
    }];
    const columns_select = [{
      title: '类型',
      dataIndex: 'name'
    },
    {
      title: '描述',
      dataIndex: 'desc'
    }
    ];

    return (
      <PageHeaderLayout title="属性">
        <Card bordered={false}>
          <div style={{ marginBottom: '16px' }}>
            <ButtonGroup>
              <Button onClick={this.handleAdd}>添加</Button>
              <Button onClick={() => this.goMd(true)}>从数据模型导入</Button>
              <Button onClick={() => this.goJson(true)}>从JSON导入</Button>
            </ButtonGroup>
          </div>
          <Table columns={columns} dataSource={this.state.attrList} pagination={false} />
        </Card>

      </PageHeaderLayout>
    );
  }
}
