import clsx from 'clsx'
import { Paragraph, Title } from '..'
import { TitleProps } from '../atoms/Title'

interface WrapperTitleProps {
  titleHeadingLevel: TitleProps['headingLevel']
  pretitle: string
  children: React.ReactNode
  className: string
  title: string
  fontSizeTitle: 'hero' | 'section'
}

function WrapperTitle({ titleHeadingLevel, pretitle, children, className, title, fontSizeTitle }: WrapperTitleProps) {
  const style = {
    wrapper: clsx('', className),
    title: clsx('font-bold col-span-full', fontSizeTitle === 'hero' && 'text-4xl md:text-6xl', fontSizeTitle === 'section' && 'text-3xl md:text-5xl')
  }
  return (
    <div className={style.wrapper}>
      <Paragraph className='text-base font-semibold text-green-600' type='span'>
        {pretitle}
      </Paragraph>
      <Title className={style.title} headingLevel={titleHeadingLevel}>
        {title}
      </Title>
      {children}
    </div>
  )
}

export default WrapperTitle
