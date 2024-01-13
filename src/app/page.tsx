import { Header, Hero, Services, Stats } from './components'

function Home() {
  return (
    <>
      <Header />
      <main className='py-14 flex flex-col gap-12'>
        <Hero />
        <Services />
        <Stats />
      </main>
    </>
  )
}

export default Home
