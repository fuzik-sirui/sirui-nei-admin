import React, { PureComponent } from 'react';
import { Table, Input, Icon, Button, Popconfirm, Form, Modal } from 'antd';
import { Row, Col, Card, Tooltip, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableCell from '../../components/EditableCell/EditableCell';
import { getType } from '../../utils/utils';
import { queryAttrList } from '../../services/api';
import styles from './Attr.less';

import FromJson from "../../components/From/FormJson";
import FromMd from "../../components/From/FromMd";

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

export default class Attr extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      mdModal: false,
      jsonModal: false,
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

  onDelete = (key) => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  }

  /**
   * 检查
   */
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      render(text, record) {
        return (
          <EditableCell value={text} type="input" />
        )
      }
    },
    {
      title: '类型',
      dataIndex: 'type',
      render(text, record) {
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
      render(text, record) {
        return (
          <EditableCell value={text} record="input" />
        )
      }
    },
    {
      title: '生成规则',
      dataIndex: 'rule',
      render(text, record) {
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

    return (
      <div>
        <Card title="数据模型详情" bordered={false}>
          <div style={{ marginBottom: '16px' }}>
            <ButtonGroup>
              <Button onClick={this.handleAdd}>添加</Button>
              <Button onClick={this.goMd}>从数据模型导入</Button>
              <Button onClick={this.goJson}>从JSON导入</Button>
            </ButtonGroup>
          </div>
          <Table columns={columns} dataSource={this.state.attrList} pagination={false} />
        </Card>
        <FromJson visible={this.state.jsonModal} handleModal={this.handleJson}></FromJson>
        <FromMd visible={this.state.mdModal} handleModal={this.handleMd}></FromMd>
      </div>
    );
  }
}
