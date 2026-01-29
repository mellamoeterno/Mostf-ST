/* // EnhancedErrorBoundary.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EnhancedErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);  
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Send to monitoring service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleReportError = () => {
    // Implement error reporting functionality
    const errorData = {
      error: this.state.error?.toString(),
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userInfo: {} // Add user context if available
    };
    console.log('Report error:', errorData);
    // Send to your backend or error tracking service
  };

  renderFallback() {
    const { fallback, fallbackComponent: FallbackComponent } = this.props;
    
    if (FallbackComponent) {
      return <FallbackComponent 
        error={this.state.error}
        errorInfo={this.state.errorInfo}
        onRetry={this.handleReset}
        onReport={this.handleReportError}
      />;
    }

    if (fallback) {
      return fallback;
    }

    return (
      <div className="error-boundary-fallback">
        <div className="error-content">
          <h2>Oops! Something went wrong</h2>
          <p>We apologize for the inconvenience. Please try again.</p>
          
          <div className="error-actions">
            <button 
              className="retry-button" 
              onClick={this.handleReset}
            >
              Retry
            </button>
            
            <button 
              className="report-button" 
              onClick={this.handleReportError}
            >
              Report Issue
            </button>
          </div>
          
          {this.props.showDetails && (
            <details className="error-details">
              <summary>Technical Details</summary>
              <pre>
                {this.state.error?.toString()}
                {'\n\n'}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.hasError) {
      return this.renderFallback();
    }

    return this.props.children;
  }
}

EnhancedErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  fallbackComponent: PropTypes.elementType,
  onError: PropTypes.func,
  showDetails: PropTypes.bool,
  resetOnChange: PropTypes.any // Reset when this prop changes
};

EnhancedErrorBoundary.defaultProps = {
  showDetails: process.env.NODE_ENV !== 'production'
};

export default EnhancedErrorBoundary; */