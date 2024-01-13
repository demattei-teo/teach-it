import { Paragraph } from '..'

interface DetailProps {
  title: string
  description: string
}

function Detail({ title, description }: DetailProps) {
  return (
    <div className='flex flex-col justify-start gap-4'>
      <Paragraph className='text-6xl font-bold text-center text-green-500' type='span'>
        {title}
      </Paragraph>
      <Paragraph type='p' className='text-center font-semibold'>
        {description}
      </Paragraph>
    </div>
  )
}

export default Detail
