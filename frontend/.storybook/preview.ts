import React from 'react'
import type { Preview } from '@storybook/react'
import page from './page'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: page,
      toc: true,
    },
  },
}

export default preview
