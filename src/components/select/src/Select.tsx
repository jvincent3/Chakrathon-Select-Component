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
  HTMLChakraProps,
  ComponentWithAs,
  chakra,
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
      as={MenuItem}
      bg={isActive ? "gray.200" : "transparent"}
      onClick={() => context?.onChange?.(value)}
      {...rest}
    >
      {children}
    </chakra.li>
  )
}

export const SelectInput = forwardRef(
  ({ children, ...rest }: SelectInputProps, ref) => {
    const context = useContext(SelectContext)
    return (
      <Flex align="center" justify="space-between" ref={ref}>
        <Button
          as={Box}
          {...rest}
          rightIcon={
            <ChevronIcon
              transform={context?.isOpen ? "rotate(180deg)" : undefined}
            />
          }
        >
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
  onClose,
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

  console.log({ hasSelectInput })

  return (
    <Menu onClose={onClose} autoSelect={false}>
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
            {!hasSelectInput && (
              <MenuButton as={SelectInput} {...rest}>
                {displayValue}
              </MenuButton>
            )}
          </SelectContext.Provider>
        )
      }}
    </Menu>
  )
}
