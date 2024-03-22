'use client'

import { Loader } from 'lucide-react'

import { useProfile } from '@/hooks/useProfile'

import styles from './Profile.module.scss'

export function Profile() {
	const { data, isLoading } = useProfile()
	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.profile}>
			<div className={styles.info}>
				<span className={styles.name}>{data?.user.name}</span>
				<span className={styles.text}>{data?.user.email}</span>
			</div>
			<div className={styles.icon}>{data?.user.name?.charAt(0) || 'A'}</div>
		</div>
	)
}
