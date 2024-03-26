import type { Dispatch, SetStateAction } from 'react'

import type { TTaskResponse } from '@/types/task.types'

import styles from './KanbanInput.module.scss'

type TListInput = {
	filterDate?: string
	setItems: Dispatch<SetStateAction<TTaskResponse[] | undefined>>
}
export function KanbanInput({ filterDate, setItems }: TListInput) {
	const addRow = () => {
		setItems((prev) => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate,
				},
			]
		})
	}
	return (
		<div className={styles.wrap}>
			<button onClick={addRow} className={styles.btn}>
				Добавить задачу
			</button>
		</div>
	)
}
