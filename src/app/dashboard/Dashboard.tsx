import { Heading } from '@/components/ui/heading/Heading'

import styles from './Dashboard.module.scss'
import { Statistics } from './components/statistics/Statistics'

export function Dashboard() {
	return (
		<div className={styles.dashboard}>
			<Heading title="Статистика" className={styles.heading} />
			<Statistics />
		</div>
	)
}
