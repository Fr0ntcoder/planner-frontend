import { PropsWithChildren } from 'react'

import { DashboardHeader } from '@/components/layout/dashboard-layout/dashboard-header/DashboardHeader'
import { DashboardSidebar } from '@/components/layout/dashboard-layout/dashboard-sidebar/DashboardSidebar'

import styles from './DashboardLayout.module.scss'

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
