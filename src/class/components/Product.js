import { Component } from 'react'


class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nike Shoes',
      price: 119000,
    }
  }

  handleUpdate = () => {
    // this.state의 결과는 어떻게 될까?
    this.setState({
      price: 5000,
    })
  }

  render() {

    if (this.props.isAwesomeHelloWorld) {
      return (
        <div>
          Hello {this.props.name}! This is Special Hello World!
          <span>{this.state.count}</span>
        </div>
      )
    }
    // 또는 render() JSX 내부에서 ternary를 이용한 Conditional Rendering도 가능하다.
    return (
      <div>
        <span>Name: {this.state.name}</span>
        <span>Price: {this.state.price}</span>
        <span>Price: {this.props.lastName}</span>
        <button onClick={this.handleUpdate}>Update Product</button>
      </div>)
  }
}

export default Product