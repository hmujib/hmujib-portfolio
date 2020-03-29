// import App from 'next/app'
import { Fragment } from 'react'

import Head from 'next/head'
import "../styles/globals.scss"
import { ThemeProvider } from 'styled-components'

// these lines are used to pass the globals.scss file as a Theme to styled-components
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/globals.scss');

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet'></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <title>Humza Mujib | Portfolio</title>
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