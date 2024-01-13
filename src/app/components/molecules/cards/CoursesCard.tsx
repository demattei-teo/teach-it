import Image from 'next/image'
import { ArrowIcon, Buttons, Paragraph } from '../..'
import { TitleProps } from '../../atoms/Title'
import WrapperTitle from '../WrapperTitle'

interface CoursesCardProps {
  hrefImage: string
  altImage: string
  titleHeadingLevel: TitleProps['headingLevel']
}

function CoursesCard({ titleHeadingLevel, hrefImage, altImage }: CoursesCardProps) {
  return (
    <article className='grid shadow-md'>
      <div className='relative h-[200px]'>
        <Paragraph
          className='px-2.5 py-1 absolute top-2 left-2 z-10 text-white font-semibold bg-red-500 rounded-[3px]'
          type='span'
        >
          Sale
        </Paragraph>
        <Image fill src={hrefImage} className='object-cover z-0' alt={altImage} />
      </div>
      <WrapperTitle
        title='Get Quality Education'
        pretitle='Practice Advice'
        titleHeadingLevel={titleHeadingLevel}
        className='p-4 flex flex-col gap-3'
        fontSizeTitle='card'
      >
        <Paragraph className=' font-light' type='p'>
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </Paragraph>
        <Paragraph className='text-gray-500 flex gap-2' type='p'>
          $16.48
          <Paragraph className='text-green-500' type='span'>
            $6.48
          </Paragraph>
        </Paragraph>
        <Buttons className='flex gap-2 text-green-500 border px-5 py-2 group items-center self-start border-green-500 rounded-3xl'>
          <Paragraph className='group-hover:translate-x-2 transition-transform' type='span'>
            Learn More
          </Paragraph>
          <ArrowIcon className='fill-green-500 group-hover:opacity-0 transition-opacity' />
        </Buttons>
      </WrapperTitle>
    </article>
  )
}

export default CoursesCard
