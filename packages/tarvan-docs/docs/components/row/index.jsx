import React from 'react'
import { withNativeProps } from '../../utils/native-props'
import Flex from '../flex'

const classPrefix = `tan-row`

const Row = props => {
	const { 
		children,
		...flexProps
	} = props

	return withNativeProps(
		props,
		<Flex 
			{...flexProps}
			direction="horizontal" 
			className={classPrefix}
		>
			{children}
		</Flex>
	) 
}

export default React.memo(Row)