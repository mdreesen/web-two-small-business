import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

// Using Framer Motion
import { useScroll, useTransform } from "framer-motion"

// Importing components
import Hero from '../components/Hero';

export default function Home() {

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  return (
    <>
      <Head>
        <title>Landing Page | Web Small Business Two</title>
        <meta name="description" content="Small business website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Here is the landing page content */}
        <Hero video={true} videoSource={'/video/background-video.mp4'}/>
      </main>
    </>
  )
}
