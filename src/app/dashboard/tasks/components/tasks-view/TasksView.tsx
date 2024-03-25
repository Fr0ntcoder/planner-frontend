'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import styles from './TasksView.module.scss'
import { COLUMNS } from '@/app/dashboard/tasks/components/tasks-view/columns.data'
import { ListBlock } from '@/app/dashboard/tasks/components/tasks-view/list-block/ListBlock'
import { useTaskDnd } from '@/app/dashboard/tasks/hooks/useTaskDnd'
import { useTasks } from '@/app/dashboard/tasks/hooks/useTasks'

export function TasksView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div className={styles.col}>Название задачи</div>
					<div className={styles.col}>Срок дата</div>
					<div className={styles.col}>Приоритетность</div>
					<div className={styles.col}></div>
				</div>
				<div className={styles.wrapper}>
					{COLUMNS.map((column) => (
						<ListBlock
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}
