import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

// TODO: Look into how to keep the user logged in and fetch all necessary
// data to be passed in as props.
export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html className='no-js' lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <title>CBT</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <link href="/static/favicon.png" rel="icon shortcut" type="image/png" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700|Quattrocento:400,700" />
          <link rel='stylesheet' href='/static/semantic/dist/semantic.min.css' />
          <link rel='stylesheet' href='/static/styles.css' />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: [
              'document.documentElement.classList.remove("no-js")'
            ].join('\n') }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
