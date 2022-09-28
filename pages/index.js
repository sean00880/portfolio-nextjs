import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Banner from '../components/Banner'

export const config = { unstable_runtimeJS: false}

export default function Home() {
  return (
    <div >
      <Head>
        <title>Decoded Web | Web Services</title>
        <meta name="description" content="Web services for brands and niches" />
        <link rel="icon" href="/favicon.ico" />
        <head>
          
        </head>
      </Head>
      <Navbar />
      <Main />
      <Banner /> 
      <About /> 
      <Skills />
      <Projects />
      <Faq />
      <Contact />
      <Footer />

    </div>
  )
}
