import { Feature, Header, Hero, Services, Stats } from './components'

function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col '>
        <Hero />
        <Services />
        <Stats />
        <Feature />
      </main>
    </>
  )
}

export default Home
