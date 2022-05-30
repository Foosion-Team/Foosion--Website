import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/organisms/AboutSection'
import Footer from '../components/organisms/Footer'

//COMPONENTS
import HeroSection from '../components/organisms/HeroSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foosion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/foosion-icon.png" />
      </Head>

      <HeroSection></HeroSection>

      <AboutSection></AboutSection>

      <Footer></Footer>
    </div>
  )
}
