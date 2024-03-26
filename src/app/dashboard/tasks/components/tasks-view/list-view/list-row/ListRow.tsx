import cn from 'clsx'
import { GripVertical, Loader, Trash } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '@/components/ui/checkbox/Checkbox'
import { TransparentField } from '@/components/ui/fields/transparent-field/TransparentFIeld'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'
import { SingleSelect } from '@/components/ui/task-edit/single-select/SingleSelect'

import type { TTaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '../../../../hooks/useDeleteTask'
import { useTaskDebounce } from '../../../../hooks/useTaskDebounce'

import styles from './ListRow.module.scss'

type TListRow = {
	item: TTaskResponse
	setItems: Dispatch<SetStateAction<TTaskResponse[] | undefined>>
}
export function ListRow({ item, setItems }: TListRow) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority,
		},
	})
	const { deleteTask, isDeletePending } = useDeleteTask()
	useTaskDebounce({ watch, itemId: item.id })
	return (
		<div
			className={cn(styles.row, watch('isCompleted') ? styles.completed : '')}
		>
			<span className={styles.manipulate}>
				<button className={styles.grip}>
					<GripVertical />
				</button>
				<Controller
					control={control}
					name="isCompleted"
					render={({ field: { value, onChange } }) => (
						<Checkbox onChange={onChange} checked={value} />
					)}
				/>
				<TransparentField {...register('name')} />
			</span>
			<div className={styles.datepicker}>
				<Controller
					control={control}
					name="createdAt"
					render={({ field: { value, onChange } }) => (
						<DatePicker onChange={onChange} value={value || ''} />
					)}
				/>
			</div>
			<div className={styles.select}>
				<Controller
					control={control}
					name="priority"
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map((item) => ({
								value: item,
								label: item,
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div className={styles.btn}>
				<button
					onClick={() =>
						item.id
							? deleteTask(item.id)
							: setItems((prev) => prev?.slice(0, -1))
					}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
