import React from 'react'
import { Link, Image } from '@chakra-ui/react'
import Twitter from '../assets/twitter.png'
import Whatsapp from '../assets/Whatsapp.svg'
import Facebook from '../assets/facebook.svg'

export default function SocialMedia () {
  const facebookUrl = window.location.href
  const twitterUrl = window.location.href
  return (
    <>
      <Link
        display="flex"
        alignItems="center"
        target="_blank"
        href="https://api.whatsapp.com/send?text=texto_codificad"
      >
        <Image src={Whatsapp} />
      </Link>

      <Link
        display="flex"
        alignItems="center"
        target="_blank"
        href={`//www.facebook.com/sharer.php?u=${facebookUrl}`}
      >
        <Image src={Facebook} m="auto 0" />
      </Link>
      <Link
        display="flex"
        alignItems="center"
        href={`https://twitter.com/intent/tweet?text=text&url=${twitterUrl}`}
        target="_blank"
      >
        <Image boxSize="60px" src={Twitter} />
      </Link>
    </>
  )
}
