import dynamic from 'next/dynamic'
const Banner = dynamic(()=>import('../components/Banner'))
const About = dynamic(()=>import('../components/About'))
const Main = dynamic(()=>import('../components/Main'))
const Skills = dynamic(()=>import('../components/Skills'))
const Projects = dynamic(()=>import('../components/Projects'))
const Faq = dynamic(()=>import('../components/Faq'))
const Contact = dynamic(()=>import('../components/Contact'))
const Footer = dynamic(()=>import('../components/Footer'))


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
