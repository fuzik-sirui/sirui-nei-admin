import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './filterTable.less'

import Filter from './Filter'
import MTable from './MTable'

class FilterTable extends Component {
  constructor (props) {
    super(props)
    const self = this
    let {filterList, filterGrade, filterForm, fetch, addBtn, rowKey, opreat, tableList, otherList, localName, pagination, menuClick, scroll, onAdd} = this.props
    let filterParams = {
      filterList: filterList,
      filterGrade: filterGrade,
      filterForm: filterForm,
      tableList: tableList,
      otherList: otherList,
      addBtn: addBtn,
      onAdd: onAdd,
      onSearch (value) {
        tableParams.fetch.data = value
        self.setState({
          tableParams: tableParams
        })
      },
      tableSetFun (value) {

      }
    }
    let tableParams = {
      columns: tableList,
      otherList: otherList,
      fetch: fetch,
      localName: localName,
      rowKey: rowKey,
      pagination: pagination,
      opreat: opreat,
      menuClick: menuClick,
      scroll: scroll,
    }
    tableParams.fetch.data = filterParams.filterForm
    this.state = {
      filterParams,
      tableParams
    }
  }

  render () {
    return (
      <div className={styles.tablePage}>
        <Filter {...this.state.filterParams} />
        <MTable {...this.state.tableParams} />
      </div>
    )
  }
}

FilterTable.propTypes = {
  filterList: PropTypes.array.isRequired,
  filterGrade: PropTypes.array,
  filterForm: PropTypes.object,
  addBtn: PropTypes.bool,
  onAdd: PropTypes.func,
  fetch: PropTypes.object.isRequired,
  tableList: PropTypes.array.isRequired,
  otherList: PropTypes.array,
  opreat: PropTypes.array.isRequired,
  rowKey: PropTypes.string.isRequired,
  localName: PropTypes.string.isRequired,
  menuClick: PropTypes.func.isRequired,
  scroll: PropTypes.number.isRequired,
  pagination: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
}

export default FilterTable