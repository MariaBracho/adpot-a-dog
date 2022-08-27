import { Flex, Text } from '@chakra-ui/react'

export default function EmpetyList () {
  const message = 'Empty list, add a dog card.'
  return (
    <Flex h="58vh" alignItems="center" justifyContent="center">
      <Text color="brand.grayIcon">{message}</Text>
    </Flex>
  )
}
