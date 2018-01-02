import React from 'react';
import PropTypes from 'prop-types';
import { Table, Message } from 'antd';
import request from '../../utils/request';
import lodash from 'lodash';
import './MTable.less';
import DropOption from '../DropOption/DropOption';
import styles from './MTable.less';

class DataTable extends React.Component {
  constructor (props) {
    super(props)
    const { dataSource = [], fetch, pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: 100 },
    } = props
    this.state = {
      loading: false,
      dataSource,
      fetch: fetch,
      fetchData: {
        rows: 10,
        page: 1
      },
      pagination,
    }
  }
  
  componentDidMount () {
    if (this.props.fetch) {
      this.fetch()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (JSON.stringify(this.state.fetch.data) === JSON.stringify(nextProps.fetch.data)) {
      console.log('no change')
      return
    }
    this.setState({
      fetch: nextProps.fetch
    })
    this.fetch()
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination
    pager.current = pagination.current
    this.setState({
      pagination: pager,
      fetchData: {
        rows: pagination.pageSize,
        page: pagination.current,
        ...filters,
      },
    }, () => {
      this.fetch()
    })
  }

  fetch = () => {
    const { fetch: { url, data, dataKey } } = this.props;
    const { fetchData } = this.state;
    this.setState({ loading: true });
    request(url, {
      method: 'post',
      data: {
        ...data,
        ...fetchData,
      },
    }).then((result) => {
      if (!this.refs.DataTable) {
        return
      }
      let { pagination } = this.state
      if (typeof pagination !== 'boolean') {
        pagination.total = result.total || pagination.total
      }
      this.setState({
        loading: false,
        dataSource: dataKey ? result[dataKey] : result.data,
        pagination,
      })
    }).catch(error => {
      this.setState({loading: false});
      Message.error(error.message);
    })
  }

  render () {
    const self = this
    const { fetch, rowKey, ...tableProps } = this.props
    const { loading, dataSource, pagination } = this.state
    if (tableProps.columns[tableProps.columns.length - 1].title === '操作') {
      tableProps.columns.splice(tableProps.columns.length - 1, 1)
    } else {
      tableProps.columns.push({ 
        title: '操作', dataIndex: 'action', key: 'action',
        render (text, record) {
          return <DropOption onMenuClick={e => self.props.menuClick(e, record)} menuOptions={self.props.opreat} />
        }
      })
    }
    return (<Table
      ref="DataTable"
      size="middle"
      className={styles.dataTable}
      loading={loading}
      onChange={this.handleTableChange}
      {...tableProps}
      rowKey={record => record[rowKey]}
      pagination={pagination}
      dataSource={dataSource}
      scroll={{ y: this.props.scroll }}
    />)
  }
}


DataTable.propTypes = {
  fetch: PropTypes.object.isRequired,
  rowKey: PropTypes.string.isRequired,
  pagination: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  columns: PropTypes.array.isRequired,
  opreat: PropTypes.array.isRequired,
  otherList: PropTypes.array,
  menuClick: PropTypes.func.isRequired,
  localName: PropTypes.string.isRequired,
  dataSource: PropTypes.array,
  scroll: PropTypes.number.isRequired,
}

export default DataTable
