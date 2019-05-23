import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux'
import { withRouter } from 'next/router'
import withReduxStore from '../lib/with-redux-store';
import Head from '../components/Head';

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Head />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  };
}

export default withReduxStore(withRouter(MyApp));
