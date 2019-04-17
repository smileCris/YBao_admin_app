import { Component } from 'react'
import styles from './index.less'
import avatarImg from '../../assets/img/avatar.jpg'
import { List, InputItem } from 'antd-mobile'
import { createForm } from 'rc-form'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent)
let moneyKeyboardWrapProps
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  }
}

class My extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'money',
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    const { type } = this.state

    return (
      <div className={styles.main}>
        <div className={styles.avatar}>
          <img src={avatarImg} alt='avatar' />
        </div>
        <div className={styles.info}>
          <List>
            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder="auto focus"
              ref={el => this.autoFocusInst = el}
            >标题</InputItem>
            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder="auto focus"
              ref={el => this.autoFocusInst = el}
            >标题</InputItem>
            <InputItem
              {...getFieldProps('money3')}
              type={type}
              defaultValue={100}
              placeholder="start from left"
              clear
              moneyKeyboardAlign="left"
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >光标在左</InputItem>
            <InputItem
              type={type}
              placeholder="start from right"
              clear
              onChange={(v) => { console.log('onChange', v) }}
              onBlur={(v) => { console.log('onBlur', v) }}
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >光标在右</InputItem>
            <InputItem
              {...getFieldProps('money2', {
                normalize: (v, prev) => {
                  if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                    if (v === '.') {
                      return '0.'
                    }
                    return prev
                  }
                  return v
                },
              })}
              type={type}
              placeholder="money format"
              ref={el => this.inputRef = el}
              onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
              clear
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >数字键盘</InputItem>
          </List>
        </div>
        <div className={styles.submit}>保存</div>
      </div>
    )
  }
}

export default createForm()(My)
// export default connect(({ my }) => ({ my }))(createForm()(My))