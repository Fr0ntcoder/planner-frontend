import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import { TypeTaskFormState } from '@/types/task.types'

import { useCreateTask } from './useCreateTask'
import { useUpdateTask } from './useUpdateTask'

type TUseTaskDebounce = {
	watch: UseFormWatch<TypeTaskFormState>
	itemId: string
}
export function useTaskDebounce({ watch, itemId }: TUseTaskDebounce) {
	const { createTask } = useCreateTask()
	const { updateTask } = useUpdateTask()
	const debouncedCreateTask = useCallback(
		debounce((FormData: TypeTaskFormState) => {
			createTask(FormData)
		}, 444),
		[]
	)

	const debouncedUpdateTask = useCallback(
		debounce((FormData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: FormData })
		}, 444),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch((formData) => {
			if (itemId) {
				debouncedUpdateTask({
					...formData,
					priority: formData.priority || undefined,
				})
			} else {
				debouncedCreateTask(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTask, debouncedCreateTask])
}
