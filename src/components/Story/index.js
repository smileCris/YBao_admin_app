import { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import styles from './index.less'
import storyImg from '../../assets/img/story.jpg'

class Story extends Component {
  render() {
    return (
      <div className={styles.content}>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <div className={styles.card}>
            <img src={storyImg} />
            <div className={styles.title}>小猫钓鱼</div>
          </div>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <div className={styles.card}></div>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <div className={styles.card}></div>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Story