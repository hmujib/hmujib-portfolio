// import App from 'next/app'
import { Fragment } from 'react'

import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`{
  html, body {
    margin: 0px;
    overflow-x: hidden;
  }
}
`

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet'></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
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