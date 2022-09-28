import dynamic from 'next/dynamic'
import Head from 'next/head'
const Banner = dynamic(()=>import('../components/Banner'), {
  ssr: false,
})
const About = dynamic(()=>import('../components/About'), {
  ssr: false,
})
const Main = dynamic(()=>import('../components/Main'), {
  ssr: false,
})
const Skills = dynamic(()=>import('../components/Skills'), {
  ssr: false,
})
const Projects = dynamic(()=>import('../components/Projects'), {
  ssr: false,
})
const Faq = dynamic(()=>import('../components/Faq'))
const Contact = dynamic(()=>import('../components/Contact'), {
  ssr: false,
})
const Footer = dynamic(()=>import('../components/Footer'), {
  ssr: false,
})
const Navbar = dynamic(()=>import('../components/Navbar'), {
  ssr: false,
})

export default function Home() {
  return (
    <div >
      <Head>
        <title>Decoded Web | Web Services</title>
        <meta name="description" content="Web services for all brands and niches | Websites, digital design, marketing & more" />
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
