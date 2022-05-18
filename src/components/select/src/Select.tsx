import { createContext, ReactNode, useContext, useMemo } from "react"
import {
  MenuProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuButtonProps,
  forwardRef,
  HTMLChakraProps,
  chakra,
} from "@chakra-ui/react"
import { ChevronIcon } from "../../icons"

type SelectProps = Pick<MenuProps, "onClose" | "onOpen" | "children"> & {
  onChange?: (item: any) => void
  value: any
  children: ReactNode
  getLabel: (item: any) => string
}

const SelectContext = createContext<
  | null
  | (Omit<SelectProps, "onClose" | "children" | "getLabel"> & {
      displayValue: string
      isOpen: boolean
    })
>(null)

type SelectListProps = HTMLChakraProps<"ul"> & {}

type SelectItemProps = Omit<HTMLChakraProps<"li">, "value"> & {
  isActive: boolean
  value: any
}

type SelectInputProps = MenuButtonProps & {}

export function SelectList({ children }: SelectListProps) {
  return <MenuList>{children}</MenuList>
}

export function SelectItem({
  children,
  value,
  isActive,
  ...rest
}: SelectItemProps) {
  const context = useContext(SelectContext)

  return (
    <chakra.li
      w={{ sm: "56" }}
      as={MenuItem}
      bg={isActive ? "#E5E5E5" : "transparent"}
      _hover={{ bg: "#00000029" }}
      onClick={() => context?.onChange?.(value)}
      {...rest}
    >
      {children}
    </chakra.li>
  )
}

export const SelectValue = forwardRef(
  ({ children, ...rest }: SelectInputProps, ref) => {
    const context = useContext(SelectContext)
    return (
      <MenuButton
        ref={ref}
        as={Button}
        color="#404040"
        textAlign="left"
        w={{ sm: "56" }}
        d="flex"
        align="center"
        justify="space-between"
        bg="white"
        border="2px solid #E5E5E5"
        _hover={{ bg: "white" }}
        _active={{ bg: "white" }}
        rightIcon={
          <ChevronIcon
            width="13px"
            height="13px"
            transform={context?.isOpen ? "rotate(180deg)" : undefined}
          />
        }
        {...rest}
      >
        {context?.displayValue}
      </MenuButton>
    )
  }
)

export function Select({
  onChange,
  value,
  children,
  getLabel,
  onClose,
  onOpen,
}: SelectProps) {
  const displayValue = useMemo(() => {
    return getLabel(value)
  }, [value])

  return (
    <Menu onClose={onClose} onOpen={onOpen} autoSelect={false}>
      {({ isOpen }) => {
        return (
          <SelectContext.Provider
            value={{
              value,
              displayValue,
              onChange,
              isOpen,
            }}
          >
            {children}
          </SelectContext.Provider>
        )
      }}
    </Menu>
  )
}
