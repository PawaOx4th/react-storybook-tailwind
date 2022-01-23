import React from "react"
import ButtonDefault from "../components/atomices/button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Default/Button",
  component: ButtonDefault
} as ComponentMeta<typeof ButtonDefault>

const Tamplate: ComponentStory<typeof ButtonDefault> = (arg) => (
  <ButtonDefault {...arg} />
)

export const Default = Tamplate.bind({})
Default.args = {}

export const WithPatternText = Tamplate.bind({})
WithPatternText.args = {
  pattern: "text"
}
