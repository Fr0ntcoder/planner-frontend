import { GlobalLoader } from '@/components/layout/dashboard-layout/dashboard-header/global-loader/GlobalLoader'
import { Profile } from '@/components/layout/dashboard-layout/dashboard-header/profile/Profile'

import styles from './DashboardHeader.module.scss'

export function DashboardHeader() {
	return (
		<header className={styles.header}>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
