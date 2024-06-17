import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

const defaultProps = {
  source: {
    type: {},
    src: '',
  },
  options: {
    controls: true,
    muted: false, // 默认不是静音
    autoplay: false,
    poster: '',
    loop: false,
  },
} 

const CzhDocVideo = (props) => {
  const {
    children,
    source,
    options,
    className,
    onPlay,
    onPause,
    onPlayEnd,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const rootRef = useRef(null)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    if (rootRef.current) {
      const videoRef = rootRef.current
      if (options.autoplay) {
        setTimeout(() => {
          videoRef.play()
        }, 200)
      }
     
      videoRef.addEventListener('play', () => {
        onPlay && onPlay(videoRef)
      })
      videoRef.addEventListener('pause', () => {
        onPause && onPause(videoRef)
      })
      videoRef.addEventListener('ended', () => {
        videoRef.currentTime = 0
        onPlayEnd && onPlayEnd(videoRef)
      })
    }
  }

  return (
    <div {...restProps} className={style.container}>
      <video
        className={style.player}
        muted={options.muted}
        autoPlay={options.autoplay}
        loop={options.loop}
        poster={options.poster}
        controls={options.controls}
        ref={rootRef}
        src={source.src}
      >
        <source src={source.src} type={source.type} />
        <track kind="captions" />
      </video>
    </div>
  )
}

CzhDocVideo.defaultProps = defaultProps
CzhDocVideo.displayName = 'CzhDocVideo'

export default React.memo(CzhDocVideo)
