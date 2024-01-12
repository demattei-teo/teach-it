import { ArrowIcon, Button, CloseIcon, Link, Paragraph } from '..'

interface NavbarProps {
  className: string
  state: boolean
  changeState: Function
}

function Navbar({ className, state, changeState }: NavbarProps) {
  return (
    <nav className={className}>
      <div className='cursor-pointer text-base lg:hidden col-start-3 col-end-4 justify-self-end' onClick={() => changeState(state)}>
        <CloseIcon className='fill-black' />
      </div>
      <ul className='col-span-full lg:flex lg:gap-5 items-center text-gray-500'>
        <li className='py-2 hover:text-gray-900 border-b border-gray-300 hover:border-gray-700 transition-colors lg:border-none'>
          <Link href='/#hero'>Home</Link>
        </li>
        <li className='py-2 hover:text-gray-900 border-b border-gray-300 hover:border-gray-700 transition-colors lg:border-none'>
          <Link href='/#carrousel'>Products</Link>
        </li>
        <li className='py-2 hover:text-gray-900 border-b border-gray-300 hover:border-gray-700 transition-colors lg:border-none'>
          <Link href='/#choose'>Pricing</Link>
        </li>
        <li className='py-2 hover:text-gray-900 border-b border-gray-300 hover:border-gray-700 transition-colors lg:border-none'>
          <Link href='/#wrapperFeature'>Contact</Link>
        </li>
      </ul>
      <div className='flex items-center gap-5'>
        <Link className='text-green-500 font-medium text-lg' href='#'>
          Login
        </Link>
        <Button className='green-button grid gap-4 text-white items-center hover:bg-green-900 ease-linear duration-300 transition-opacity-colors group'>
          <Paragraph type='span' className='col-start-1 col-end-2 hover:col-span-full group-hover:translate-x-3.5 transition-transform'>
            JOIN US
          </Paragraph>
          <ArrowIcon className='fill-white hover:-translate-x-5 group-hover:opacity-0 col-start-2 col-end-3' />
        </Button>
      </div>
    </nav>
  )
}
export default Navbar
