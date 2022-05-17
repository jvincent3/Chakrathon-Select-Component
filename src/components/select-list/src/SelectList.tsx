import { MenuList, MenuListProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SelectListProps extends MenuListProps {
  //
}

const SelectList = forwardRef(({ children, ...rest }: SelectListProps, ref) => {
  return (
    <MenuList w="56" {...rest}>
      {children}
    </MenuList>
  )
})

export default SelectList
