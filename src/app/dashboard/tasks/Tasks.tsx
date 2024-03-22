import { Heading } from '@/components/ui/heading/Heading'

import styles from './Tasks.module.scss'

export function Tasks() {
	return (
		<div className={styles.tasks}>
			<Heading title="Задачи" />
		</div>
	)
}
