import React from 'react'
import { Link, Image } from '@chakra-ui/react'

// icons
import Twitter from 'assets/twitter.png'
import Whatsapp from 'assets/Whatsapp.svg'
import Facebook from 'assets/facebook.svg'

export default function SocialMedia () {
  const urlBase = window.location.href
  return (
    <>
      <Link
        display="flex"
        alignItems="center"
        target="_blank"
        href={`https://api.whatsapp.com/send?text=${urlBase}`}
      >
        <Image src={Whatsapp} />
      </Link>

      <Link
        display="flex"
        alignItems="center"
        target="_blank"
        href={`https://www.facebook.com/sharer.php?display=page&u=${urlBase}`}
      >
        <Image src={Facebook} m="auto 0" />
      </Link>
      <Link
        display="flex"
        alignItems="center"
        href={`https://twitter.com/intent/tweet?url=${urlBase}`}
        target="_blank"
      >
        <Image boxSize="60px" src={Twitter} />
      </Link>
    </>
  )
}
