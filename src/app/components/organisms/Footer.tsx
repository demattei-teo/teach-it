import { EmailIcon, Item, List, Paragraph, PhoneIcon, SocialMedia, UbicIcon } from '..'

function Footer() {
  return (
    <footer className='grid bg-gray-50'>
      <div className='wrapper grid min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 '>
        <List className='flex gap-4 flex-col items-start justify-start'>
          <Item className='text-black font-semibold'>Company Info</Item>
          <Item className='text-gray-400 font-medium' isLinked='/about' contentLink='About us' />
          <Item className='text-gray-400 font-medium' isLinked='/carrier' contentLink='Carrier' />
          <Item className='text-gray-400 font-medium' isLinked='/hiring' contentLink='We are hiring' />
          <Item className='text-gray-400 font-medium' isLinked='/blog' contentLink='blog' />
        </List>
        <List className='flex gap-4 flex-col items-start justify-start'>
          <Item className='text-black font-semibold'>Legal</Item>
          <Item className='text-gray-400 font-medium' isLinked='/about' contentLink='About us' />
          <Item className='text-gray-400 font-medium' isLinked='/carrier' contentLink='Carrier' />
          <Item className='text-gray-400 font-medium' isLinked='/hiring' contentLink='We are hiring' />
          <Item className='text-gray-400 font-medium' isLinked='/blog' contentLink='blog' />
        </List>
        <List className='flex gap-4 flex-col items-start justify-start'>
          <Item className='text-black font-semibold'>Features</Item>
          <Item className='text-gray-400 font-medium' isLinked='/about' contentLink='About us' />
          <Item className='text-gray-400 font-medium' isLinked='/carrier' contentLink='Carrier' />
          <Item className='text-gray-400 font-medium' isLinked='/hiring' contentLink='We are hiring' />
          <Item className='text-gray-400 font-medium' isLinked='/blog' contentLink='blog' />
        </List>
        <List className='flex gap-4 flex-col items-start justify-start'>
          <Item className='text-black font-semibold'>Resources</Item>
          <Item className='text-gray-400 font-medium' isLinked='/about' contentLink='About us' />
          <Item className='text-gray-400 font-medium' isLinked='/carrier' contentLink='Carrier' />
          <Item className='text-gray-400 font-medium' isLinked='/hiring' contentLink='We are hiring' />
          <Item className='text-gray-400 font-medium' isLinked='/blog' contentLink='blog' />
        </List>
        <List className='flex gap-4 flex-col items-start justify-start'>
          <Item className='text-black font-semibold'>Resources</Item>
          <Item className='text-gray-400 font-medium flex gap-2 items-center'>
            <PhoneIcon />
            (480) 555-0103
          </Item>
          <Item className='text-gray-400 font-medium flex gap-2 items-center'>
            <UbicIcon />
            Kentucky 39495
          </Item>
          <Item className='text-gray-400 font-medium flex gap-2 items-center'>
            <EmailIcon />
            debra.holt@example.com
          </Item>
        </List>
      </div>
      <div className='wrapper relative w-full flex flex-col gap-4 justify-between items-center sm:flex-row before:absolute before:top-0 before:left-[5%] before:w-[90%]  before:h-[1px] before:bg-gray-200'>
        <Paragraph className='text-gray-400 font-bold' type='span'>
          Made by Teo Demattei
        </Paragraph>
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer
