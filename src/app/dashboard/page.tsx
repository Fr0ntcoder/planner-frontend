import { Metadata } from 'next'

import { Heading } from '@/components/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from './Dashboard.module.scss'
import { Statistics } from '@/app/dashboard/statistics/Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
}

export default function DashboardPage() {
	return (
		<div className={styles.dashboard}>
			<Heading title="Статистика" className={styles.heading} />
			<Statistics />
		</div>
	)
}
