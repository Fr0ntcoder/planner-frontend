import clsx from 'clsx'

import styles from './Checkbox.module.scss'

const Checkbox = (props: {
	id?: string
	extra?: string
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'orange'
		| 'teal'
		| 'navy'
		| 'lime'
		| 'cyan'
		| 'pink'
		| 'purple'
		| 'amber'
		| 'indigo'
		| 'gray'
	[x: string]: any
}) => {
	const { extra, color, id, ...rest } = props
	return (
		<input
			id={id}
			type="checkbox"
			className={clsx(styles.checkbox, {
				[styles.red]: color === 'red',
				[styles.blue]: color === 'blue',
				[styles.green]: color === 'green',
				[styles.yellow]: color === 'yellow',
				[styles.orange]: color === 'orange',
				[styles.teal]: color === 'teal',
				[styles.navy]: color === 'navy',
				[styles.lime]: color === 'lime',
				[styles.cyan]: color === 'cyan',
				[styles.pink]: color === 'pink',
				[styles.purple]: color === 'purple',
				[styles.amber]: color === 'amber',
				[styles.indigo]: color === 'indigo',
				[styles.gray]: color === 'gray',
			})}
			name="weekly"
			{...rest}
		/>
	)
}

export default Checkbox
