import React from 'react'
import { normalizeImagePath } from 'rspress/runtime'
import { Image as ArcoImage } from '@arco-design/web-react'
import { withNativeProps } from '../../utils/native-props'
import style from './style.module.scss'

const Image = props => {
  const {
    src,
    ...restProps
  } = props

  const normalizedSrc = normalizeImagePath(props.src)

  return withNativeProps(
    props,
    <ArcoImage 
      src={normalizedSrc}
      {...restProps} 
      className={style.container}
    />
  )
}

export default React.memo(Image)