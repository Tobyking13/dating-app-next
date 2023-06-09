import Head from 'next/head'
import NavBar from '@/components/nav'
import Footer from '@/components/footer'
import WelcomeCards from '@/components/cards'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const authToken = false

  return (
    <>
      <Head>
        <title>Free Date</title>
        <meta name="description" content="Free Date" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <h1 className='center-align'>
          Free Date
        </h1>
        <div className={`center-align container`}>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
        <WelcomeCards />
      </main>
      <footer>
        <Footer />
      </footer>
 
    </>
  )
}
