import React from 'react'
import { Tooltip } from 'react-tooltip'
import useHover from '../../hooks/useHover'

const TextClipperWithTooltip = ({
  content,
  id,
  contentClassName = '',
  ...props
}) => {
  const [hoverRef] = useHover()

  const isHiddenTooltip = () => {
    if (!hoverRef.current) return
    if (!hoverRef.current.offsetWidth) return
    if (!hoverRef.current.scrollWidth) return

    return hoverRef.current.offsetWidth >= hoverRef.current.scrollWidth
  }

  return (
    <>
      <span
        className="text-overflow"
        data-tooltip-id={id}
        data-tooltip-hidden={isHiddenTooltip()}
        data-tooltip-content={content}
        ref={hoverRef}
      >
        {content}
      </span>
      <Tooltip {...props} id={id} place="bottom-start" />
    </>
  )
}

export default TextClipperWithTooltip
