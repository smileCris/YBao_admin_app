import { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import styles from './index.less'
import storyImg from '../../assets/img/story.jpg'
import listenImg from '../../assets/img/listen.png'

class Story extends Component {
  render() {
    return (
      <div className={styles.content}>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <div className={styles.card}>
            <img src={storyImg} alt=''/>
            <div className={styles.desc}>
              <div className={styles.title}>小猫钓鱼</div>
              <div className={styles.listen}>
                <img src={listenImg} alt=''/>
                <div>10</div>
              </div>
            </div>
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