import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { TTaskResponse } from '@/types/task.types'

import styles from './KanbanBlock.module.scss'
import { FILTERS } from '@/app/dashboard/tasks/components/tasks-view/columns.data'
import { KanbanCard } from '@/app/dashboard/tasks/components/tasks-view/kanban-view/kanban-card/KanbanCard'
import { KanbanInput } from '@/app/dashboard/tasks/components/tasks-view/kanban-view/kanban-input/KanbanInput'
import { filterTasks } from '@/app/dashboard/tasks/utils/filter-task'

type TKanbanBlock = {
	value: string
	label: string
	items: TTaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<TTaskResponse[] | undefined>>
}
export function KanbanBlock({ value, label, items, setItems }: TKanbanBlock) {
	return (
		<Droppable droppableId={value}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.column}
				>
					<div className={styles.heading}>
						<span className={styles.label}>{label}</span>
					</div>
					{filterTasks(items, value)?.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} index={index}>
							{(provided) => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									<KanbanCard key={item.id} item={item} setItems={setItems} />
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
					{value !== 'completed' && !items?.some((item) => !item.id) && (
						<KanbanInput
							setItems={setItems}
							filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
