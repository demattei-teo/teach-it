import clsx from 'clsx'

interface wrapperProps {
  type: 'main' | 'header' | 'footer'
  children: JSX.Element
  className?: string
}

function Wrapper({ type, children, className }: wrapperProps) {
  const wrapperStyles = clsx('', className)
  const Wrappertype = type

  return <Wrappertype className={wrapperStyles}>{children}</Wrappertype>
}

export default Wrapper
