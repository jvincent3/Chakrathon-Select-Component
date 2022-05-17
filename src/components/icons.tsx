import { Icon, IconProps } from "@chakra-ui/react"

export function ClearIcon(props: IconProps) {
  return (
    <Icon width="20px" h="20px" viewBox="0 0 16 17" {...props}>
      <path
        d="M12 4.5L4 12.5"
        stroke="#737373"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.5L12 12.5"
        stroke="#737373"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <Icon width="20px" h="20px" viewBox="0 0 16 17" {...props}>
      <path
        d="M12 10.5L8 6.5L4 10.5"
        stroke="#737373"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
