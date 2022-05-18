import { Box, BoxProps, Menu, MenuProps, Text } from "@chakra-ui/react"
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
  isMultiple?: boolean
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
      isMultiple = false,
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
    const [selectedValue, setSelectedValue] = useState<any>(
      value ? [value] : []
    )

    const getButtonLabel = (val: any): string => {
      if (getOptionLabel) return getOptionLabel(val)
      else return val
    }

    const getWidth = () => {
      if (rest.width) return rest.width
      if (rest.w) return rest.w
      return "56"
    }

    const handleValues = (opt: any): void => {
      if (!isMultiple) {
        setSelectedValue([opt])
        return
      }

      if (!selectedValue.includes(opt))
        setSelectedValue([...selectedValue, opt])
      else {
        setSelectedValue([...selectedValue.filter((i: any) => i !== opt)])
      }
    }

    const displayMultipleValues = (): string => {
      if (!!selectedValue.length) {
        return selectedValue
          .reduce(
            (arr: Array<any>, opt: any) => [...arr, getButtonLabel(opt)],
            []
          )
          .join(", ")
      } else return placeholder
    }

    const displaySingleValue = (): string => {
      if (!!selectedValue.length) return getButtonLabel(selectedValue[0])
      else return placeholder
    }

    return (
      <Box w={getWidth()} width={getWidth()} {...rest}>
        <Menu {...menuProps}>
          {!!children ? (
            <>{children}</>
          ) : (
            <>
              <SelectButton
                h="max-content"
                w={getWidth()}
                py="2"
                width={getWidth()}
                {...selectButtonProps}
              >
                {!isMultiple && (
                  <Box w="full" overflow="hidden">
                    {displaySingleValue()}
                  </Box>
                )}
                {isMultiple && (
                  <Text w="full" overflow="hidden" whiteSpace="normal">
                    {displayMultipleValues()}
                  </Text>
                )}
              </SelectButton>
              <SelectList
                w={getWidth()}
                width={getWidth()}
                {...selectListProps}
              >
                {options.map((opt, i) => (
                  <SelectListItem
                    onClick={() => handleValues(opt)}
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
