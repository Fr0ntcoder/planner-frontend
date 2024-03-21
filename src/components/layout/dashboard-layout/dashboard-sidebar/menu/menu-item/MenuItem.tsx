import Link from 'next/link'

import { TMunuItem } from '../menu.data'

import styles from './MenuItem.module.scss'

export function MenuItem({ item }: { item: TMunuItem }) {
	return (
		<Link href={item.link} className={styles.link}>
			<item.icon />
			<span className={styles.name}>{item.name}</span>
		</Link>
	)
}
