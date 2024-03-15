import { TBase } from '@/types/root.types'

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high',
}

export type TTaskResponse = {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
} & TBase

export type TypeTaskFormState = Partial<Omit<TTaskResponse, 'id' | 'updatedAt'>>
