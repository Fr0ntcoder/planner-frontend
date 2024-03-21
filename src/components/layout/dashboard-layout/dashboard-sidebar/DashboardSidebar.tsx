'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { Menu } from '@/components/layout/dashboard-layout/dashboard-sidebar/menu/Menu'
import { LogoutButton } from '@/components/ui/buttons/logout-button/LogoutButton'

import styles from './DashboardSidebar.module.scss'

export function DashboardSidebar() {
	return (
		<aside className={styles.sidebar}>
			<Link href="/" className={styles.logo}>
				<GanttChartSquare size={40} />
				<span className={styles.logo_text}>Планировщик задач</span>
			</Link>
			<LogoutButton className={styles.btn} />
			<Menu />
		</aside>
	)
}
