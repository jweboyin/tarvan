import React from 'react'
import classNames from 'classnames'
import { useMemoizedFn } from 'ahooks'
import { Typography, Message, Image } from '@arco-design/web-react'
import DocSpace from '../doc-space'
import DocIcon from '../doc-icon'
import clipboard from '../../utils/clipboard'
import './style.scss'

const IconGridItem = props => {
  const { icon, type, imgWidth, imgExt } = props

  const isFont = type === 'font'

  const onClick = useMemoizedFn(async () => {
    const iconName = isFont ? icon : `${icon}${imgExt}`

    try {
      const copyText = `<Icon name="${iconName}" />`

      await clipboard(copyText)

      Message.success('复制成功')
    }catch (err) {
      Message.error(err.message)
    }
  })

  return (
    <DocSpace 
      direction="vertical"
      justify="center"
      align="center"
      className={classNames("czh-icon-grid-item", isFont && 'czh-icon-grid-item--font' )}
      block
    >
      {
        type === 'img'
        &&
        <Image 
          src={`https://9daye-icon.oss-cn-shanghai.aliyuncs.com/icons/${icon}${imgExt}`}
          className="czh-icon-grid-item__img"
        />
      }

      {
        isFont
        &&
        <DocIcon name={icon} />
      }

      <Typography.Text 
        className="czh-icon-grid-item__text"
        ellipsis
        onClick={onClick}
      >{icon}</Typography.Text>
    </DocSpace>
  )
}

IconGridItem.defaultProps = {
  imgWidth: 32,
  imgExt: '.png'
}

export default React.memo(IconGridItem)