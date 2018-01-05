import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Cascader, Form, Row, Col, Input, Select, Radio, DatePicker, Button, Modal } from 'antd'
import { request } from '../../utils/request'
import styles from './formModal.less'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const Option = Select.Option
const { MonthPicker, RangePicker } = DatePicker
const FormItem = Form.Item

class ModalForm extends Component {
  constructor (props) {
    super(props)
    const { formList } = this.props
    this.state = {
      formList: formList
    }
  }
  

  filterItem (item) {
    const { getFieldDecorator } = this.props.form
    const self = this
    let Dom = null

    function itemChange (value) {
      const _this = this
      let form = self.state.formList
      form[_this['data-key']] = value
      self.setState({
        form: form
      })
    }

    let inputChange = (e) => {
      let key = e.target.getAttribute('data-key')
      let value = e.target.value
      let form = this.state.formList
      form[key] = value
      self.setState({
        form: form
      })
    }
    switch (item.type) {
      case 'cascader':
      Dom = <Cascader options={item.options} data-key={item.key} onChange={itemChange} placeholder={item.placeholder} />
      break;
      case 'input':
      Dom = <Input onChange={inputChange} data-key={item.key} addonAfter={item.unit} placeholder={item.placeholder} />
      break;
      case 'select':
      Dom = 
          <Select placeholder={item.placeholder}  data-key={item.key} onChange={itemChange}>
            { item.options.map((item) => { return (<Option key={item.key} value={item.key + ''}>{item.label}</Option>) }) }
          </Select>
      break;
      case 'radio':
      Dom = 
          <RadioGroup  data-key={item.key} onChange={itemChange}>
            { item.options.map((item) => { return (<RadioButton key={item.key} value={item.key}>{item.label}</RadioButton>) }) }
          </RadioGroup>
      break;
      case 'dateTime':
      Dom = <RangePicker className={styles.rangePicker} style={{ width: '100%' }} data-key={item.key} showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" placeholder={[item.placeArr[0], item.placeArr[1]]} onChange={itemChange} />
      break;
    }
    let span = 4
    switch(self.props.line) {
      case 1: 
      span = 24;
      break;
      case 2: 
      span = 12;
      break;
      case 3: 
      span = 6;
      break;
    }
    return (
      <Col span={span} sm={span} xs={span*2} key={item.key}>
        <FormItem label={item.placeholder} className={styles.itemForm} key={item.key} data-key={item.key}>
          {
            getFieldDecorator(item.key, {
              rules: item.rules
            })(Dom)
          }
        </FormItem>
      </Col>
    )
  }


  render () {
    const { formList, ...modalParams } = this.props
    return (
      <Modal
          {...modalParams}
          cancelText="取消"
          okText="确定"
        >
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={12}>
            {
              formList.map((item) => {
                return this.filterItem(item)
              })
            }
          </Row>
        </Form>
      </Modal>
    )
  }
}

ModalForm.propsTypes = {
  title: PropTypes.string.isRquired,
  width: PropTypes.number,
  formList: PropTypes.array.isRquired,
  visible: PropTypes.bool.isRquired,
  line: PropTypes.number.isRquired,
  onOk: PropTypes.func.isRquired,
  onCancel: PropTypes.func.isRquired,
}

const FormModal = Form.create()(ModalForm)
export default FormModal