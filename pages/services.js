
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Payments from '../components/Payments'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Decoded Web | Web Development Services</title>
        <meta name="description" content="Web & branding services for all brands and niches" />
        <link rel="icon" href="/favicon.ico" />
        <head>
          
        </head>
      </Head>
      <Navbar />
      <Payments/>
      <Contact />
      <Footer />

    </div>
  )
}
