import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Payments from '../components/Payments'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Sean | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About /> 
      <Skills />
      <Projects />
      <Payments />
      <Faq />
      <Footer />

    </div>
  )
}
