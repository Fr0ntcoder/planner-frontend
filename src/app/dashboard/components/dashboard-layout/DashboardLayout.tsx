import { PropsWithChildren } from 'react'

import styles from './DashboardLayout.module.scss'
import { DashboardHeader } from './dashboard-header/DashboardHeader'
import { DashboardSidebar } from './dashboard-sidebar/DashboardSidebar'

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrap}>
			<DashboardSidebar />
			<main className={styles.main}>
				<DashboardHeader />
				{children}
			</main>
		</div>
	)
}
