import React from 'react'
import { TabBar, NavBar, Icon, Popover, Drawer, List } from 'antd-mobile'
import Diary from '../components/Diary'
import Question from '../components/Question'
import Circle from '../components/Circle'
import Story from '../components/Story'
import My from '../components/My'
import styles from './IndexPage.less'
import diaryGrey from '../assets/icon/diary-grey.png'
import diaryPink from '../assets/icon/diary-pink.png'
import questionGrey from '../assets/icon/question-grey.png'
import questionPink from '../assets/icon/question-pink.png'
import circleGrey from '../assets/icon/circle-grey.png'
import circlePink from '../assets/icon/circle-pink.png'
import storyGrey from '../assets/icon/story-grey.png'
import storyPink from '../assets/icon/story-pink.png'
import myGrey from '../assets/icon/my-grey.png'
import myPink from '../assets/icon/my-pink.png'

const Item = Popover.Item

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      visible: false,
      selected: '',
      open: false,
    }
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  onSelect = (opt) => {
    // console.log(opt.props.value)
    this.setState({
      visible: false,
      selected: opt.props.value,
    })
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    })
  }
  render() {
    const sidebar = (<List className={styles.sidebar}>
      <List.Item key="diary"
        thumb={
          <img src={diaryGrey} alt="diaryGrey" width="22" height="22" />
        }
      >亲子日记</List.Item>
      <List.Item key="question"
        thumb={
          <img src={questionGrey} alt="questionGrey" width="22" height="22" />
        }
      >育儿问答</List.Item>
      <List.Item key="circle"
        thumb={
          <img src={circleGrey} alt="circleGrey" width="22" height="22" />
        }
      >妈妈圈</List.Item>
      <List.Item key="story"
        thumb={
          <img src={storyGrey} alt="storyGrey" width="22" height="22" />
        }
      >睡前故事</List.Item>
      <List.Item key="my"
        thumb={
          <img src={myGrey} alt="myGrey" width="22" height="22" />
        }
      >个人中心</List.Item>
    </List>)
    return (
      <div>
        <NavBar
          mode="dark"
          className={styles.navBar}
          icon={<Icon type="ellipsis" />}
          onLeftClick={this.onOpenChange}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={
                <Item key="logout" value="logout" icon={<Icon type="right" className={styles.icon} />}>退出登录</Item>
              }
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div className={styles.rightIcon}>
                <Icon type="down" />
              </div>
            </Popover>
          }
        >柚宝</NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          点击左侧按钮
          </Drawer>
        <div className={styles.tabBar}>
          <TabBar
            unselectedTintColor="#515151"
            tintColor="#f46e66"
            barTintColor="white"
          >
            <TabBar.Item
              title="记录"
              key="diary"
              icon={<img src={diaryGrey} alt="diaryGrey" width="22" height="22" />}
              selectedIcon={<img src={diaryPink} alt="diaryPink" width="22" height="22" />}
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                })
              }}
            >
              <Diary />
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={storyGrey} alt="storyGrey" width="22" height="22" />}
              selectedIcon={<img src={storyPink} alt="storyPink" width="22" height="22" />}
              title="故事"
              key="story"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                })
              }}
            >
              <Story />
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={circleGrey} alt="circleGrey" width="22" height="22" />}
              selectedIcon={<img src={circlePink} alt="circlePink" width="22" height="22" />}
              title="圈子"
              key="circle"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                })
              }}
            >
              <Circle />
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={questionGrey} alt="questionGrey" width="22" height="22" />}
              selectedIcon={<img src={questionPink} alt="questionPink" width="22" height="22" />}
              title="问答"
              key="question"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                })
              }}
            >
              <Question />
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={myGrey} alt="myGrey" width="22" height="22" />}
              selectedIcon={<img src={myPink} alt="myPink" width="22" height="22" />}
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'pinkTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'pinkTab',
                })
              }}
            >
              <My />
            </TabBar.Item>
          </TabBar>
        </div>
      </div >
    )
  }
}

export default IndexPage