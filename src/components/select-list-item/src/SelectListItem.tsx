import { chakra, HTMLChakraProps } from "@chakra-ui/react"

export default function Select({ children }: HTMLChakraProps<"li">) {
  return <chakra.li>{children}</chakra.li>
}
