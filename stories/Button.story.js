import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/button/Button'
import { text, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import './style.css'

storiesOf('1. Buttons', module)
  .add('1.0 All type',
  () => {
    const name = text('Name', 'Meow~');
    
    return(
      <div className='index_button_wrapp'>
        <h3>Normal</h3>
        <div className='normal_button'>
          <button className='button blue_intro'>{name}~</button>
          <button className='button white_intro'>{name}~</button>
          <button className='button gray_intro'>{name}~</button>
        </div>
        <h3>Hover</h3>
        <div className='normal_button'>
          <button className='button blue_hover'>{name}~</button>
          <button className='button white_hover'>{name}~</button>
          <button className='button gray_hover'>{name}~</button>
        </div>
      </div>
    )
  })
  .addDecorator((story, context) =>
    withInfo({ header: true, inline: true, maxPropsIntoLine: 1 })(story)(context),
  )
  .add('1.1 Simple Button',
    () => {
    const value = text('Текст кнопки', 'Meow~');
    const colors = {
      gray: 'Серый',
      blue: 'Синий',
      white: 'Белый',
    }

    const color = select('Цвет', colors, 'blue');

    const fontWeight = select('Толщина текста', {bold: 'Жирный', normal: 'Обычный'}, 'bold');

    const svg = select('Иконка', {cats: 'Meow~', '': 'Ничего'}, '');
    const icon = svg === '' ? undefined : svg

    const iconPosition = select('Расположение иконки', {left: 'Слева', right: 'Справа'}, 'left');

    return(
      <Button icon={icon} iconPosition={iconPosition} fontWeight={fontWeight} color={color}>{value}</Button>
    )
  })