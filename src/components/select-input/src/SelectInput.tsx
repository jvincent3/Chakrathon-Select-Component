import { chakra, HTMLChakraProps } from "@chakra-ui/react"

export default function SelectInput({ children }: HTMLChakraProps<"input">) {
  return <chakra.input>{children}</chakra.input>
}
