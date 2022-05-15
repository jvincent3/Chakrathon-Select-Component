import { ReactNode } from "react"
import { chakra } from "@chakra-ui/react"

interface Props {
  children: ReactNode
}

export default function Select({ children }: Props) {
  return <chakra.div>{children}</chakra.div>
}
