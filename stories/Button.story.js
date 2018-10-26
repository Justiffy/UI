import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'
import { text, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import './style.css'

storiesOf('1. Buttons', module)
  .add('1.0 All type',
  () => {
    const name = text('Name', 'My test btn');
    
    return(
      <Button>{name}</Button>  
    )
  })
  .addDecorator((story, context) =>
    withInfo({ header: true, inline: true, maxPropsIntoLine: 1 })(story)(context),
  )
  .add('1.2 Simple Button',
    () => {
    const name = text('Name', 'My test btn');
    const age = number('Age', 2);

    return(
      <Button radius={age}>{name}</Button>
    )
  })