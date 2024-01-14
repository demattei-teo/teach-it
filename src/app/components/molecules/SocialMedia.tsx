import { FacebookIcon, InstagramIcon, Item, List, TwitterIcon } from '..'

function SocialMedia() {
  return (
    <List className='flex items-center gap-2'>
      <Item className='hover:scale-125 transition-transform cursor-pointer'>
        <FacebookIcon />
      </Item>
      <Item className='hover:scale-125 transition-transform cursor-pointer'>
        <InstagramIcon />
      </Item>
      <Item className='hover:scale-125 transition-transform cursor-pointer'>
        <TwitterIcon />
      </Item>
    </List>
  )
}

export default SocialMedia
