import { ComponentProps, ReactNode } from "react"
import { chakra } from "@chakra-ui/system"

interface Props extends ComponentProps<"ul"> {
  children: ReactNode
}

export default function Select({ children }: Props) {
  return <chakra.ul>{children}</chakra.ul>
}
