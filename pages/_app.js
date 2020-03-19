// import App from 'next/app'
import { Fragment } from 'react'

import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

// these lines are used to pass the globals.scss file as a Theme to styled-components
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/globals.scss');

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet'></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp