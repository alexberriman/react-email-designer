import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Example } from './example'

export default {
  component: Example,
  title: 'Components/Example',
} as Meta

const Template: Story = () => <Example />

export const BasicUsage = Template.bind({})
