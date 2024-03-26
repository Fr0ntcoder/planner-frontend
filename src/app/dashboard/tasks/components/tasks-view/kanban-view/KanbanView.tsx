import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '../../../hooks/useTaskDnd'
import { useTasks } from '../../../hooks/useTasks'
import { COLUMNS } from '../columns.data'

import styles from './KanbanView.module.scss'
import { KanbanBlock } from './kanban-block/KanbanBlock'

export function KanbanView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map((column) => (
					<KanbanBlock
						items={items}
						label={column.label}
						value={column.value}
						setItems={setItems}
						key={column.value}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
