import { CoursesCard, Paragraph, WrapperTitle } from '..'

function Courses() {
  return (
    <section className='wrapper w-full grid gap-16 items-start py-48'>
      <WrapperTitle
        title='Our Experts Teacher'
        pretitle='Practice Advice'
        titleHeadingLevel='h3'
        className='justify-self-start self-start flex flex-col gap-2'
        fontSizeTitle='section'
      >
        <Paragraph type='p' className='max-w-xl'>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </Paragraph>
      </WrapperTitle>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        <CoursesCard hrefImage='/images/courses_1.png' altImage='courses image' titleHeadingLevel='h4' />
        <CoursesCard hrefImage='/images/courses_2.png' altImage='courses image' titleHeadingLevel='h5' />
        <CoursesCard hrefImage='/images/courses_3.png' altImage='courses image' titleHeadingLevel='h6' />
      </ul>
    </section>
  )
}

export default Courses
