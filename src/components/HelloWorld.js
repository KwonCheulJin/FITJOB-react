import { Component } from 'react'


const now = new Date();
export const helloToday = `오늘은 ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 입니다.`


class HelloWorld extends Component {
  // static defaultProps: {
  //   name: 'James',
  // }

  render() {
    return (
      <div>
        Hello World! {helloToday}
        <h1>Name:</h1>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default HelloWorld

HelloWorld.defaultProps = {
  name: 'James'
}