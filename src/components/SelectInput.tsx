import { ComponentProps, ReactNode } from "react"
import { chakra } from "@chakra-ui/react"

interface Props extends ComponentProps<"input"> {
  children: ReactNode
}

export default function Select({ children }: Props) {
  return <chakra.input>{children}</chakra.input>
}
