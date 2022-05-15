import { ComponentProps, ReactNode } from "react"
import { chakra } from "@chakra-ui/react"

interface SelectListItemProps extends ComponentProps<"li"> {
  children: ReactNode
}

export default function Select({ children }: SelectListItemProps) {
  return <chakra.li>{children}</chakra.li>
}
