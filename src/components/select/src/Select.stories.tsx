import React, { useState, useEffect} from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { Select, SelectList, SelectItem, SelectValue } from '../index'
import theme from '../../../utils/theme'

export default {
  title: "Components / Forms / Select",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Select"),
} as Meta

interface StoryProps extends ThemingProps<"Select"> {}

export const BasicUsage: StoryFn<StoryProps> = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ])
  const [selectedFruit, setSelectedFruit] = useState(fruits[0])

  return(
    <Select
      getLabel={(item) => item.label}
      value={selectedFruit}
      onChange={(value) => setSelectedFruit(value)}
    >
      <SelectValue />
      <SelectList>
        {fruits.map((fruit) => (
          <SelectItem
            m={0}
            key={fruit.value}
            isActive={selectedFruit.value === fruit.value}
            value={fruit}
          >
            {fruit.label}
          </SelectItem>
        ))}
      </SelectList>
    </Select>
  )

}




