import { BackPackIcon, BookIcon, ServicesCard, TeachIcon } from '..'

function Services() {
  return (
    <section className='wrapper lg:-translate-y-[30%] xl:-translate-y-[40%] justify-items-center grid z-20 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      <ServicesCard
        title='Expert instruction'
        description='The gradual accumulation of
        information about atomic and
        small-scale behaviour...'
      >
        <TeachIcon />
      </ServicesCard>
      <ServicesCard
        title='Expert instruction'
        description='The gradual accumulation of
        information about atomic and
        small-scale behaviour...'
      >
        <BackPackIcon />
      </ServicesCard>
      <ServicesCard
        title='Expert instruction'
        description='The gradual accumulation of
        information about atomic and
        small-scale behaviour...'
      >
        <BookIcon />
      </ServicesCard>
    </section>
  )
}

export default Services
