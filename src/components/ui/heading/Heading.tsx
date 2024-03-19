import cn from 'clsx'

import styles from './Heading.module.scss'

type THeading = {
	title: string
	className?: string
}

export function Heading({ title, className }: THeading) {
	return (
		<div className={cn(styles.heading, className)}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}
