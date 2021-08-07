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

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    if (isProduction) {
      Sentry.captureException(error, { extra: info })
    }
  }

  render() {
    const { errorFallback } = this.props
    if (this.state.hasError) {
      // error fallback
      return (<errorFallback />
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary