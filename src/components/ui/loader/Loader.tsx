import cn from 'clsx'
import { Loader as LoaderIcon } from 'lucide-react'

import styles from './Loader.module.scss'

export function Loader() {
	return (
		<div className={styles.loader}>
			<LoaderIcon className={cn(styles.icon, 'animate-spin')} />
		</div>
	)
}
