import styles from './Heading.module.scss'

type THeading = {
	title: string
}

export function Heading({ title }: THeading) {
	return (
		<div className={styles.heading}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}
