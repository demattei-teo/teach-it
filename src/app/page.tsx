import { Header, Hero, Services } from './components'

function Home() {
  return (
    <>
      <Header />
      <main className='py-14'>
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default Home
