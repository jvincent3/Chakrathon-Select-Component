import { Children, createContext, useContext, useMemo, useRef } from "react"
import {
  MenuProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Button,
  MenuListProps,
  MenuItemProps,
  MenuButtonProps,
  Box,
  forwardRef,
  Flex,
} from "@chakra-ui/react"
import { ChevronIcon, ClearIcon } from "../../icons"

function isObject(value: any) {
  return Object.getPrototypeOf(value) === Object.prototype
}

type SelectProps = Pick<MenuProps, "onClose" | "children"> & {
  onChange?: (item: any) => void
  onClear?: () => void
  onSearch?: (value: string) => void
  value: any
  labelKey?: string | ((item: any) => any)
  valueKey?: string | ((item: any) => any)
  isClearable?: boolean
  isSearchable?: boolean
}

const SelectContext = createContext<
  | null
  | (SelectProps & {
      displayValue: string
    })
>(null)

type SelectListProps = Pick<MenuListProps, "children"> & {}

type SelectItemProps = Pick<MenuItemProps, "children"> & {
  isActive: boolean
  value: any
}

type SelectInputProps = Pick<MenuButtonProps, "children"> & {}

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

const SelectInput = forwardRef(
  ({ children, ...rest }: SelectInputProps, ref) => {
    const context = useContext(SelectContext)
    const inputRef = useRef<HTMLInputElement>(null)
    return (
      <Flex align="center" justify="space-between" ref={ref}>
        {context?.isSearchable ? (
          <Input
            ref={inputRef}
            type="text"
            value={context?.displayValue}
            onChange={(e) => {
              context?.onSearch?.(e.target.value)
              if (inputRef.current) {
                inputRef.current.value = e.target.value
              }
            }}
            {...rest}
          />
        ) : (
          <Button as={Box} ref={ref} {...rest} />
        )}
        <Flex align="center" gap="5px" pos="relative" left="-55px" zIndex={5}>
          {context?.isClearable && (
            <ClearIcon
              onClick={(e) => {
                e.stopPropagation()
                context?.onClear?.()
              }}
              cursor="pointer"
            />
          )}
          {context?.isSearchable && <ChevronIcon cursor="pointer" />}
        </Flex>
      </Flex>
    )
  }
)

export function Select({
  onChange,
  onClear,
  onSearch,
  value,
  labelKey,
  valueKey,
  children,
  isClearable = false,
  isSearchable = false,
}: SelectProps) {
  const childrenArray = Children.toArray(children)
  const hasSelectInput = useMemo(
    () => childrenArray.some((child) => child?.type === SelectInput),
    [childrenArray.length]
  )

  const displayValue = isObject(value) ? value[labelKey] : value

  return (
    <SelectContext.Provider
      value={{
        value,
        displayValue,
        isSearchable,
        isClearable,
        onChange,
        onClear,
        onSearch,
      }}
    >
      <Menu autoSelect={false}>
        {[
          children,
          !hasSelectInput && (
            <MenuButton as={SelectInput}>{displayValue}</MenuButton>
          ),
        ]}
      </Menu>
    </SelectContext.Provider>
  )
}
