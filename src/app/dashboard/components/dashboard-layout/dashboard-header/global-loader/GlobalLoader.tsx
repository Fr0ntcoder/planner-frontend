'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { Loader } from 'lucide-react'

import styles from './GlobalLoader.module.scss'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()
	return isFetching || isMutating ? (
		<span className={styles.loader}>
			<Loader />
		</span>
	) : null
}
