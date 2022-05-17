import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, MenuButton, MenuButtonProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface SelectButtonProps extends MenuButtonProps {
  //
}

const SelectButton = forwardRef(
  ({ children, ...rest }: SelectButtonProps, ref) => {
    return (
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        textAlign="left"
        overflow="hidden"
        {...rest}
      >
        {children}
      </MenuButton>
    )
  }
)

export default SelectButton
