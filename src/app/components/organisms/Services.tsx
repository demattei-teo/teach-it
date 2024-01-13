import { BackPackIcon, BookIcon, ServicesCard, TeachIcon } from '..'

function Services() {
  return (
    <section className='wrapper z-0 lg:-translate-y-[30%] xl:-translate-y-[50%] justify-items-center grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
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
        className='col-span-full lg:col-auto'
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
