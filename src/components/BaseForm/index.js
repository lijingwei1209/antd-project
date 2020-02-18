import React, { Component } from 'react'
import { Form, Checkbox } from 'antd'
import Utils from '../../utils/utils';

 class BaseForm extends Component {

    initFormList= ()=>{
        const {getFieldDecorator} = this.props.form;
        const formList = this.props.formList;
        const formItemList = []
        if(formList && formList.length>0){
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue;
                let placeholder = item.placeholder;
                let width = item.width;
                if(item.type == 'INPUT'){
                    const INPUT = <Form.Item label={label} key={field}>
                        {getFieldDecorator([field],{
                            initialValue:initialValue
                        })(
                            <Input type="text" placeholder={placeholder}></Input>
                        )}
                    </Form.Item>
                    formItemList.push(INPUT)
                }else if(item.type==='SELECTE'){
                    const SELECTE = <Form.Item label={label} key={field}>
                        {getFieldDecorator([field],{
                            initialValue:initialValue
                        })(
                            <Select
                            style={{width:width}}
                            placeholder={placeholder}
                        >
                           {Utils.getOptionList(item.list)}
                        </Select>
                        )}
                    </Form.Item>
                    formItemList.push(SELECTE)
                }else if(item.type==='CHECKBOX'){
                    const CHECKBOX = <Form.Item label={label} key={field}>
                        {getFieldDecorator([field],{
                            valuePropName:'checked',
                            initialValue:initialValue //必须是true 或者false
                        })(
                         <Checkbox>
                             {label}
                         </Checkbox>
                        )}
                    </Form.Item>
                    formItemList.push(CHECKBOX)
                }
            })
        }
        return formItemList

    }
    render() {
        return (
            <Form>
                {this.initFormList( )}
            </Form>
        )
    }
}

export default Form.create({})(BaseForm)