import clsx from 'clsx'
import Paragraph from '../../atoms/Paragraph'

interface ServicesCardProps {
  children: React.ReactNode
  title: string
  description: string
  className?: string
}

function ServicesCard({ children, className, title, description }: ServicesCardProps) {
  const wrapperStyles = clsx('z-20 bg-white flex flex-col gap-5 shadow-lg py-9 px-10', className)
  return (
    <article className={wrapperStyles}>
      {children}
      <Paragraph
        className='text-xl py-2 font-bold relative before:absolute before:-bottom-[20%] before:w-[20%] before:h-[2px] before:bg-red-500'
        type='span'
      >
        {title}
      </Paragraph>
      <Paragraph className='py-2' type='p'>
        {description}
      </Paragraph>
    </article>
  )
}

export default ServicesCard
