import { ReactNode } from "react"
import { chakra } from "@chakra-ui/system"

interface Props {
  children: ReactNode
}

export default function Select({ children }: Props) {
  return <chakra.div>{children}</chakra.div>
}
