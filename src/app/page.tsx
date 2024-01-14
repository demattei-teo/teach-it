import { Courses, Feature, Footer, Header, Hero, Services, Stats } from './components'

function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col '>
        <Hero />
        <Services />
        <Stats />
        <Feature />
        <Courses />
      </main>
      <Footer />
    </>
  )
}

export default Home
