import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';

export default class EditableCell extends PureComponent {
    state = {
        value: this.props.value,
        type: this.props.type
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
    typeIpt = (value, type) => {
        switch (type) {
            case "radio":
                return (<div className="editable-cell-input-wrapper">radio</div>);
                break;
            case "checkbox":
                return (<div className="editable-cell-input-wrapper">checkbox</div>);
            default:
                return (<div className="editable-cell-input-wrapper">
                    <Input
                        value={value}
                        onChange={this.handleChange}
                        onPressEnter={this.check}
                    />
                </div>);
        }
    }
    render() {
        const { value, type } = this.state;
        return (
            <div className="editable-cell">
                {
                    this.typeIpt(value, type)
                }
            </div>
        );
    }
}