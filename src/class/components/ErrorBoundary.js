import { Component } from 'react'
import * as Sentry from '@sentry/react'

const isProduction = process.env.NODE_ENV === 'production'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    if (isProduction) {
      Sentry.captureException(error, { extra: info })
    }
  }

  render() {

    if (this.state.hasError) {
      // error fallback
      return <h1>Error!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary