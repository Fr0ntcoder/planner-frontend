import styles from './DashboardHeader.module.scss'
import { GlobalLoader } from './global-loader/GlobalLoader'
import { Profile } from './profile/Profile'

export function DashboardHeader() {
	return (
		<header className={styles.header}>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
