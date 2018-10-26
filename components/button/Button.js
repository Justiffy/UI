// @flow
import React from 'react'
import classnames from 'classnames/bind'
import icons from '../icon'

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
    const Image = icons[icon]
    return (
      <button className={buttonStyles}>
        <div className='button_content'>
          {icon && iconPosition === 'left' ? <Image className='button_icon icon_left'/> : null}
          {children}
          {icon && iconPosition === 'right' ? <Image className='button_icon icon_right'/> : null}
        </div>
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
