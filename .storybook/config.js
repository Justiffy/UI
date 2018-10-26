import { configure, addDecorator } from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)


function loadStories() {
  require('./stories.js')
}

setOptions({
  name: 'My stories',
  url: 'Nope',
  sidebarAnimations: true,
  downPanelInRight: true
})

configure(loadStories, module)