import { DragDropContext } from '@hello-pangea/dnd'

import { COLUMNS } from '../../../components/tasks-view/columns.data'
import { useTaskDnd } from '../../../hooks/useTaskDnd'
import { useTasks } from '../../../hooks/useTasks'

import styles from './ListView.module.scss'
import { ListBlock } from './list-block/ListBlock'

export function ListView() {
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
