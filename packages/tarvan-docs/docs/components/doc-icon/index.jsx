import React from 'react'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props'
import { bemBlock } from '../../utils/class-name'
import './icon.scss'

const BLOCK = 'doc-icon'

const DocIcon = props => {
	const {
		name,
		classPrefix,
		onClick
	} = props

	const blockClassName = classNames(
		bemBlock(BLOCK),
		classPrefix,
		`${classPrefix}-${name}`
	)

	return withNativeProps(
		props,
		<div
			className={blockClassName}
			onClick={onClick}
		/>
	)
}

DocIcon.defaultProps = {
	classPrefix: 'czh-icon'	
}

export default React.memo(DocIcon)
