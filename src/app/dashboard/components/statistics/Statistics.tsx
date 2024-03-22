'use client'

import { Loader } from '@/components/ui/loader/Loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './Statistics.module.scss'

export function Statistics() {
	const { data, isLoading } = useProfile()
	const list = data?.statistics.length ? (
		data.statistics.map((item) => (
			<div className={styles.item} key={item.label}>
				<h4 className={styles.title}>{item.label}</h4>
				<span className={styles.value}>{item.value}</span>
			</div>
		))
	) : (
		<div>Сатистика не найдена</div>
	)

	return isLoading ? <Loader /> : <div className={styles.list}>{list}</div>
}
