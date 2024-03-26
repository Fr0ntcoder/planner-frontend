'use client'

import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import { TypeView } from '../../tasks-view/TasksView'

import styles from './SwitcherView.module.scss'

type TSwitchView = {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ type, setType }: TSwitchView) {
	return (
		<div className={styles.wrap}>
			<button
				className={cn(styles.btn, { [styles.active]: type === 'list' })}
				onClick={() => setType('list')}
			>
				<ListTodo />
				Список
			</button>
			<button
				className={cn(styles.btn, { [styles.active]: type === 'kanban' })}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				Доска
			</button>
		</div>
	)
}
