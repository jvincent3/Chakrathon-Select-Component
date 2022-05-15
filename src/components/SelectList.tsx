import { chakra, HTMLChakraProps } from "@chakra-ui/react"

export default function Select({ children }: HTMLChakraProps<"ul">) {
  return <chakra.ul>{children}</chakra.ul>
}
