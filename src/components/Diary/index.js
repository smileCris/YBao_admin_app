import { Component } from 'react'
import { Carousel, WingBlank, Card, WhiteSpace, Steps } from 'antd-mobile'
import styles from './index.less'

const Step = Steps.Step

class Diary extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <div className={styles.content}>
        <WingBlank className={styles.wingblank}>
          <Carousel
            autoplay
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <div
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </div>
            ))}
          </Carousel>
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <div className="sub-title">亲子日记</div>
          <WhiteSpace size="lg" />
          <Steps current={1}>
            <Step
              title="2018/11/9"
              icon="ellipsis"
              description={
                <Card>
                  <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              }
            />
            <Step
              title="2018/11/9"
              icon="ellipsis"
              description={
                <Card>
                  <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              }
            />
            <Step
              title="2018/11/9"
              icon="ellipsis"
              description={
                <Card>
                  <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              }
            />
            <Step
              title="2018/11/9"
              icon="ellipsis"
              description={
                <Card>
                  <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              }
            />
            <Step
              title="2018/11/9"
              icon="ellipsis"
              description={
                <Card>
                  <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              }
            />
          </Steps>
        </WingBlank>
      </div>
    )
  }
}

export default Diary;