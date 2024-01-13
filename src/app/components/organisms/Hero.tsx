import Image from 'next/image'
import { Buttons, Paragraph, WrapperTitle } from '..'

function Hero() {
  return (
    <section className='wrapper grid items-start ms:justify-items-start lg:grid-cols-2'>
      <WrapperTitle
        title='25K+ STUDENTS TRUST US'
        className='grid gap-9 lg:py-6'
        pretitle='Join Us'
        titleHeadingLevel='h1'
        fontSizeTitle='hero'
      >
        <Paragraph type='p' className='col-span-full'>
          Every day brings with it a fresh set of learning possibilities.
        </Paragraph>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <Buttons className='text-white hover:bg-green-900 transition-colors green-button sm:col-start-1 sm:col-end-2 justify-self-start'>
            Get Quote Now
          </Buttons>
          <Buttons className='px-6 py-4 border rounded-md border-green-600 transition-colors hover:bg-green-600 hover:text-white sm:col-start-2 sm:col-end-3 justify-self-start'>
            Learn More
          </Buttons>
        </div>
      </WrapperTitle>

      <Image
        src='/shapes/shape_1.png'
        width={30}
        height={30}
        alt='img shape'
        className='hidden lg:block absolute right-[50%]'
      />

      <Image
        width={800}
        height={700}
        priority
        src='/images/hero.png'
        alt='student image'
        className='object-contain hidden lg:block self-center justify-self-center'
      />
    </section>
  )
}

export default Hero
