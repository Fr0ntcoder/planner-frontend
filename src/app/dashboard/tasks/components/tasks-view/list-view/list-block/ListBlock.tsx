import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { TTaskResponse } from '@/types/task.types'

import { filterTasks } from '../../../../utils/filter-task'
import { FILTERS } from '../../columns.data'
import { ListInput } from '../list-input/ListInput'
import { ListRow } from '../list-row/ListRow'

import styles from './ListBlock.module.scss'

type TListBlock = {
	value: string
	label: string
	items: TTaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<TTaskResponse[] | undefined>>
}
export function ListBlock({ value, label, items, setItems }: TListBlock) {
	return (
		<Droppable droppableId={value}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.row}
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
									<ListRow key={item.id} item={item} setItems={setItems} />
								</div>
							)}
						</Draggable>
					))}

					{provided.placeholder}
					{value !== 'completed' && !items?.some((item) => !item.id) && (
						<ListInput
							setItems={setItems}
							filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
