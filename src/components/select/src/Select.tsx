import { Menu, MenuProps } from "@chakra-ui/react"
import { forwardRef, ReactNode } from "react"
import SelectButton, {
  SelectButtonProps,
} from "../../select-button/src/SelectButton"
import { SelectListProps } from "../../select-list"
import SelectListItem, {
  SelectListItemProps,
} from "../../select-list-item/src/SelectListItem"
import SelectList from "../../select-list/src/SelectList"

export interface SelectProps {
  children?: ReactNode
  label?: string | ReactNode
  options?: Array<any>
  menuProps?: MenuProps
  selectButtonProps?: SelectButtonProps
  selectListProps?: SelectListProps
  selectListItemProps?: SelectListItemProps
}

const Select = forwardRef(
  (
    {
      children = undefined,
      label = "Select a Value",
      options = [],
      menuProps,
      selectButtonProps,
      selectListProps,
      selectListItemProps,
    }: SelectProps,
    ref
  ) => {
    return (
      <Menu {...menuProps}>
        {!!children ? (
          <>{children}</>
        ) : (
          <>
            <SelectButton {...selectButtonProps}>{label}</SelectButton>
            <SelectList {...selectListProps}>
              {options.map((label, i) => (
                <SelectListItem key={`option-${i}`} {...selectListItemProps}>
                  {label}
                </SelectListItem>
              ))}
            </SelectList>
          </>
        )}
      </Menu>
    )
  }
)

export default Select
