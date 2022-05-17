import { MenuItem, MenuItemProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SelectListItemProps extends MenuItemProps {
  //
}

const SelectListItem = forwardRef(
  ({ children, ...rest }: SelectListItemProps, ref) => {
    return <MenuItem {...rest}>{children}</MenuItem>
  }
)

export default SelectListItem
