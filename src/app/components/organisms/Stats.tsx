import { Detail } from '..'

function Stats() {
  return (
    <section className='wrapper grid sm:grid-cols-2 pt-48 lg:pt-0 lg:grid-cols-4 justify-items-center items-center gap-20'>
      <Detail title='+15K' description='Happy Customers' />
      <Detail title='15OK' description='Monthly Visitors' />
      <Detail title='15' description='Countries  Worldwide' />
      <Detail title='+100' description='Top Partners' />
    </section>
  )
}

export default Stats
