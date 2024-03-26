'use client'

import { Loader } from 'lucide-react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import styles from './TasksView.module.scss'
import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './list-view/ListView'
import { SwitcherView } from './switcher-view/SwitcherView'

export type TypeView = 'list' | 'kanban'

export function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list',
	})

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className={styles.wrap}>
			<SwitcherView type={type} setType={setType} />
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}
