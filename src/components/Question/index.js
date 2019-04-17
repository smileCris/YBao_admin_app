import { Component } from 'react'
import styles from './index.less'
import replyImg from '../../assets/img/reply.png'
import heartImg from '../../assets/img/heart.png'

class Question extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.question}>孩子发烧老不好？多半是肺热孩子发烧老不好？多半是肺热孩子发烧老不好？多半是肺热孩子发烧老不好？多半是肺热孩子发烧老不好？多半是肺热孩子发烧老不好？多半是肺热</div>
          <div className={styles.reply}>
            <img src={replyImg} alt=''/>
            <div className={styles.numText}>5</div>
            <img src={heartImg} alt=''/>
            <div className={styles.numText}>20</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.question}>孩子发烧老不好？多半是肺热</div>
          <div className={styles.reply}>
            <img src={replyImg} alt=''/>
            <div className={styles.numText}>5</div>
            <img src={heartImg} alt=''/>
            <div className={styles.numText}>20</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;