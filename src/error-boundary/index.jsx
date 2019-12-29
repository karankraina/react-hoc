import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('error here', this.props);
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ?
      this.props.errorComponent() :
      this.props.children
    // if (this.state.hasError) {
    //   // You can render any custom fallback UI
    // return <p>{this.props.errorComponent}</p>;
    // }
    // return this.props.children; 
  }
}
const ErrorComp = props => <p>There was some error in this component.</p>

export default (ChildrenComponent, ErrorComponent = ErrorComp) => props => <ErrorBoundary errorComponent={ErrorComponent}><ChildrenComponent {...props} /></ErrorBoundary>; 