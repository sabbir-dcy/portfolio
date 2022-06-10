import Head from 'next/head'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sabbir Ahmed Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mb-20'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
