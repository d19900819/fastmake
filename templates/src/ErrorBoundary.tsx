import React, { ReactNode } from 'react';

// import logger from '@/utils/logger';

type State = {
  hasError: boolean;
  error: any;
};

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo): void {
    // You can also log the error to an error reporting service
    // logger.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
