import { Component } from 'react'
import styles from './index.less'
import avatarImg from '../../assets/img/avatar.jpg'
import replyImg from '../../assets/img/reply.png'
import heartImg from '../../assets/img/heart.png'

class Circle extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.user}>
            <img src={avatarImg} className={styles.avatar} alt='avatar'/>
            <div className={styles.name}>Monica</div>
          </div>
          <div className={styles.title}>这是展位的啊啊啊啊</div>
          <div className={styles.content}>这是展位的啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊这是展位的啊啊啊啊</div>
          <div className={styles.reply}>
            <img src={replyImg} alt='reply'/>
            <div className={styles.numText}>5</div>
            <img src={heartImg} alt='heart'/>
            <div className={styles.numText}>20</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.user}>
            <img src={avatarImg} className={styles.avatar} alt='avatar'/>
            <div className='name'>Monica</div>
          </div>
          <div className={styles.title}>这是展位的啊啊啊啊</div>
          <div className={styles.content}>这是展位的啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊啊这是展位的啊啊啊啊这是展位的啊啊啊啊</div>
          <div className={styles.reply}>
            <img src={replyImg} alt='reply'/>
            <div className={styles.numText}>5</div>
            <img src={heartImg} alt='heart'/>
            <div className={styles.numText}>20</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Circle;