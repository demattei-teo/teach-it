import Image from 'next/image'
import { ArrowIcon, Link, Paragraph, WrapperTitle } from '..'

function Feature() {
  return (
    <section className='wrapper items-center grid md:grid-cols-2 gap-12 py-48'>
      <WrapperTitle
        fontSizeTitle='section'
        className='py-16 flex gap-7 flex-col relative before:absolute before:top-0 before:left-0 before:w-[20%] before:h-1.5 before:bg-red-500'
        titleHeadingLevel='h2'
        title='Every Client Matters'
      >
        <Paragraph className='font-light' type='p'>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </Paragraph>
        <Link
          href='#'
          className='font-bold text-green-500 flex gap-3 items-center hover:tracking-widest [transition:letter-spacing_300ms_ease-in-out] hover:letter-spacing-1'
        >
          Learn More <ArrowIcon className='fill-green-500' />
        </Link>
      </WrapperTitle>
      <Image
        width={500}
        height={500}
        src='/images/feature.jpg'
        alt='child image'
        className='bg-white justify-self-end row-start-1 row-end-2 md:row-auto'
      />
    </section>
  )
}
export default Feature
