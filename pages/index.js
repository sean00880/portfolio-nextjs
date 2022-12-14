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

export default function Home() {
  return (
    <div >
      <Head>
        <title>Decoded Web | Web Development Services</title>
        <meta name="description" content="Websites and digital services for all brands and niches | Websites, digital design, marketing & more." />
        <meta name="google-site-verification" content="HaKP2hPcnleHL77Ut6RaNNEYiCsnZOWOTnAuZ3ZyXaE" />
        <link rel="icon" href="/favicon.ico" />
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
