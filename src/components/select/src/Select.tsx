import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useRef,
} from "react"
import {
  MenuProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuListProps,
  MenuItemProps,
  MenuButtonProps,
  Box,
  forwardRef,
  Flex,
} from "@chakra-ui/react"
import { ChevronIcon } from "../../icons"

type SelectProps = Pick<MenuProps, "onClose" | "children"> & {
  onChange?: (item: any) => void
  value: any
  getLabel: (item: any) => string
}

const SelectContext =
  createContext<
    | null
    | (Omit<SelectProps, "onClose" | "children" | "getLabel"> & {
        displayValue: string
      })
  >(null)

type SelectListProps = Pick<MenuListProps, "children"> & {}

type SelectItemProps = Pick<MenuItemProps, "children"> & {
  isActive: boolean
  value: any
}

type SelectInputProps = MenuButtonProps & {}

export function SelectList({ children }: SelectListProps) {
  return <MenuList>{children}</MenuList>
}

export function SelectItem({ children, value, isActive }: SelectItemProps) {
  const context = useContext(SelectContext)

  return (
    <MenuItem
      bg={isActive ? "gray.200" : "transparent"}
      onClick={() => context?.onChange?.(value)}
    >
      {children}
    </MenuItem>
  )
}

export const SelectInput = forwardRef(
  ({ children, ...rest }: SelectInputProps, ref) => {
    return (
      <Flex align="center" justify="space-between" ref={ref}>
        <Button as={Box} {...rest} rightIcon={<ChevronIcon />}>
          {children}
        </Button>
      </Flex>
    )
  }
)

export function Select({
  onChange,
  value,
  children,
  getLabel,
  ...rest
}: SelectProps) {
  const childrenArray = Children.toArray(children as ReactNode)
  const hasSelectInput = useMemo(
    () => childrenArray.some((child) => child?.type === SelectInput),
    [childrenArray.length]
  )
  const displayValue = useMemo(() => {
    return getLabel(value)
  }, [value])

  return (
    <SelectContext.Provider
      value={{
        value,
        displayValue,
        onChange,
      }}
    >
      <Menu autoSelect={false}>
        <>
          {children}
          {!hasSelectInput && (
            <MenuButton as={SelectInput} {...rest}>
              {displayValue}
            </MenuButton>
          )}
        </>
      </Menu>
    </SelectContext.Provider>
  )
}
