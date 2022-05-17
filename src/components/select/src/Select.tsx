import { Box, BoxProps, Menu, MenuProps } from "@chakra-ui/react"
import { forwardRef, ReactNode, useState } from "react"
import SelectButton, {
  SelectButtonProps,
} from "../../select-button/src/SelectButton"
import { SelectListProps } from "../../select-list"
import SelectListItem, {
  SelectListItemProps,
} from "../../select-list-item/src/SelectListItem"
import SelectList from "../../select-list/src/SelectList"

export interface SelectProps extends BoxProps {
  children?: ReactNode
  placeholder?: string
  value?: any
  options?: Array<any>
  getOptionLabel?: (option: any) => string
  menuProps?: MenuProps
  selectButtonProps?: SelectButtonProps
  selectListProps?: SelectListProps
  selectListItemProps?: SelectListItemProps
}

const Select = forwardRef(
  (
    {
      children = undefined,
      placeholder = "Select a Value",
      value,
      options = [],
      getOptionLabel,
      menuProps,
      selectButtonProps,
      selectListProps,
      selectListItemProps,
      ...rest
    }: SelectProps,
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState<any>(value)

    const getButtonLabel = (val: any): string => {
      if (getOptionLabel) return getOptionLabel(val)
      else return val
    }

    const getWidth = () => {
      if (rest.width) return rest.width
      if (rest.w) return rest.w
      return "56"
    }

    return (
      <Box w={getWidth()} width={getWidth()} {...rest}>
        <Menu {...menuProps}>
          {!!children ? (
            <>{children}</>
          ) : (
            <>
              <SelectButton
                w={getWidth()}
                width={getWidth()}
                {...selectButtonProps}
              >
                {selectedValue ? getButtonLabel(selectedValue) : placeholder}
              </SelectButton>
              <SelectList
                w={getWidth()}
                width={getWidth()}
                {...selectListProps}
              >
                {options.map((opt, i) => (
                  <SelectListItem
                    onClick={() => setSelectedValue(opt)}
                    key={`option-${i}`}
                    {...selectListItemProps}
                  >
                    {!!getOptionLabel ? getOptionLabel(opt) : opt}
                  </SelectListItem>
                ))}
              </SelectList>
            </>
          )}
        </Menu>
      </Box>
    )
  }
)

export default Select
