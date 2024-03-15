import { TBase } from '@/types/root.types'

export type TTimerRoundResponse = {
	isCompleted?: boolean
	totalSeconds: number
} & TBase

export type TTimerSessionResponse = {
	isCompleted?: boolean
	rounds?: TTimerRoundResponse[]
} & TBase

export type TypeTimerSessionState = Partial<
	Omit<TTimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypeTimerRoundState = Partial<
	Omit<TTimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
