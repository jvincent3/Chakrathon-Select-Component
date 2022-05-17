import { MenuList, MenuListProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SelectListProps extends MenuListProps {
  //
}

const SelectList = forwardRef(({ children, ...rest }: SelectListProps, ref) => {
  return (
    <MenuList shadow="md" {...rest}>
      {children}
    </MenuList>
  )
})

export default SelectList
