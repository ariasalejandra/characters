import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
      <><Head>
      <title>Ali's Toyhouse</title>
      <link rel="icon" href="http://i122.photobucket.com/albums/o260/mhilka/minigifs/fetch_014-1.gif" />
    </Head><main class='typewriter'>
      <Header/>

        <section><h1 classname='og-text-color'>Welcome to my Characters Website!</h1></section>
        
        <img classname='giffy' src="https://i.pinimg.com/originals/04/dc/ff/04dcffa457a7334ce63e74daf28a95f0.gif" alt="Guadalupe Hernandez" />
      </main><Footer /></>
  )
}
