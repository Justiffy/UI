import { configure, addDecorator } from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'


addDecorator(centered)
addDecorator(withKnobs)


function loadStories() {
  require('./stories.js')
}

setOptions({
  name: 'My stories',
  url: 'Nope',
  sidebarAnimations: true
})

configure(loadStories, module)