import { Component } from 'react'
import styles from './index.less'

class Circle extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}></div>
            </div>
          </div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
      </div>
    )
  }
}

export default Circle;