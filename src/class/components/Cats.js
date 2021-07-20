import '../../public/Cats.scss'
import { Component } from 'react'
import { getCatsBreeds } from '../../utils/api'
import LodingIndicator from './LodingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'



class breeds extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      breeds: [],
      isLoading: false,
    }
  }


  handlePreviousPage = () => {
    if (this.props.currentPage <= 1) {
      return
    }
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1
    }))
  }

  handleNextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1
    }))
  }

  async componentDidMount() {

    this.setState({
      isLoading: true,
    })

    const breeds = await getCatsBreeds(this.state.currentPage)

    this.setState({
      breeds,
      isLoading: false,
    });
  }


  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentPage === this.state.currentPage) {
      return
    }

    this.setState({
      isLoading: true,
    })

    const nextBreeds = await getCatsBreeds(this.state.currentPage, 10)

    this.setState({
      breeds: prevState.breeds.concat(nextBreeds),
      isLoading: false,
    });
  }


  render() {
    return (
      <div className="Cats">
        <p>현재 페이지: {this.state.currentPage}</p>
        <HeaderButtonGroup onPreviousPage={this.handlePreviousPage} onNextPage={this.handleNextPage} />
        <LodingIndicator isLoading={this.state.isLoading} />
        <ul>
          {this.state.breeds.map((cat, index) => (
            <li className="Cat" key={`${cat.id}-${index}`}>
              <span>Name: {cat.name}</span>
              <span>Origin: {cat.origin}</span>
              <span>Description: {cat.description}</span>
              <span>
                Wiki:{' '}
                <a href={cat.wikipedia_url} target="_blank">
                  {cat.wikipedia_url}
                </a>
              </span>
              <img className="Image" src={cat.image ? cat.image.url : null} />
            </li>
          ))}
        </ul>
        <LodingIndicator isLoading={this.state.isLoading} />
        <HeaderButtonGroup onPreviousPage={this.handlePreviousPage} onNextPage={this.handleNextPage} />

      </div>
    )
  }

}


export default breeds