import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('error here', error, errorInfo);
      this.setState({ hasError: true })
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return <p>{this.props.errorMessage}</p>;
      }
      return this.props.children; 
    }
  }

export default (ChildrenComponent, errorMessage) => props => <ErrorBoundary errorMessage={errorMessage}><ChildrenComponent {...props}/></ErrorBoundary>; 