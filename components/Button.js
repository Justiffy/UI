// @flow
import React from 'react'
import classnames from 'classnames/bind'

import styles from './style.css'

type Props = {
  /**
   * Содержимое кнопки
   */
  children: React.Node,
  /**
   * Цвет кнопки
   */
  color?: 'blue' | 'gray' | 'white',
  /**
   * Толщина шрифта
   */
  fontWeight?: 'bold' | 'normal',
  /**
   * Позвция иконки, относительно текста
   */
  iconPosition?: 'left' | 'right',
  /**
   * Название нужной иконки
   */
  icon?: string,
}

const cx = classnames.bind(styles)

class Button extends React.Component<Props> {
  render() {
    const { 
      color,
      fontWeight,
      icon,
      iconPosition,
      children,
     } = this.props

    const buttonStyles = cx('button', {
      [`button_${color}`]: true,
      [`button_${fontWeight}`]: true,
    })

    return (
      <button className={buttonStyles}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  color: 'blue',
  fontWeight: 'bold',
  iconPosition: 'left'
}

export default Button
