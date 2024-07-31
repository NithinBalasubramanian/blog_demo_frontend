import '../styles/globals.scss'
import Layout from '../layout/layout'

const App = ({ Component, pageProps }) => {

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default App