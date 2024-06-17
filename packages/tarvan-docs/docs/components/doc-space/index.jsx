import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props'
import './style.scss'

const classPrefix = `tan-space`

const DocSpace = props => {
	const { 
		direction, 
		justify,
		align,
		wrap,
		block,
		children,
		onClick 
	} = props

	const clsName = classNames(classPrefix, {
		[`${classPrefix}-wrap`]: wrap,
		[`${classPrefix}-block`]: block,
		[`${classPrefix}-${direction}`]: true,
		[`${classPrefix}-align-${align}`]: !!align,
		[`${classPrefix}-justify-${justify}`]: !!justify,
	})

	return withNativeProps(
		props,
		<div className={clsName} onClick={onClick}>
			{children}
		</div>
	) 
}

DocSpace.propTypes = {
	// 间距方向
	direction: PropTypes.oneOf([
		'horizontal', 
		'vertical'
	]),

	// 主轴对齐方式
	justify: PropTypes.oneOf([
		'start', 
		'end', 
		'center', 
		'between', 
		'around', 
		'evenly', 
		'stretch'
	]),

	// 交叉轴对齐方式
	align: PropTypes.oneOf([
		'start', 
		'end', 
		'center', 
		'baseline'
	]),

	// 是否自动换行，仅在 horizontal 时有效
	wrap: PropTypes.bool,

	// 是否渲染为块级元素
	block: PropTypes.bool,

	// 点击事件
	onClick: PropTypes.func
} 

DocSpace.defaultProps = {
	direction: 'horizontal',
	wrap: false,
	block: false
}

export default React.memo(DocSpace)