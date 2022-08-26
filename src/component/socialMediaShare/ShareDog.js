import SocialMediaModal from './SocialMediaModal'
import { useMediaQuery } from '@chakra-ui/react'
import SocialMediaDrawer from './SocialMediaDrawer'

export default function ShareDog ({ onClose, isOpen }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const title = ' !Share with your social media! 😄'
  return isLargerThan768
    ? (
    <SocialMediaModal onClose={onClose} isOpen={isOpen} Title={title} />
      )
    : (
    <SocialMediaDrawer onClose={onClose} isOpen={isOpen} Title={title} />
      )
}
