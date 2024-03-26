'use client'

import { Pause, Play, RefreshCcw } from 'lucide-react'

import { Button } from '@/components/ui/buttons/Button'
import { Heading } from '@/components/ui/heading/Heading'
import { Loader } from '@/components/ui/loader/Loader'

import styles from './Timer.module.scss'
import { TimerRounds } from './components/timer-rounds/TimerRounds'
import { formatTime } from './format-time'
import { useTimer } from './hooks/useTimer'
import { useTimerActions } from './hooks/useTimerActions'
import { useTodaySession } from './hooks/useTodaySession'
import { useCreateSession } from '@/app/dashboard/timer/hooks/useCreateSession'
import { useDeleteSession } from '@/app/dashboard/timer/hooks/useDeleteSession'

export function Timer() {
	const timerState = useTimer()
	const { sessionsResponse, isLoading, workInterval } =
		useTodaySession(timerState)
	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({
		...timerState,
		rounds,
	})
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)
	const { mutate, isPending } = useCreateSession()
	return (
		<div className={styles.wrap}>
			<Heading title="Таймер" className={styles.heading} />
			<div className={styles.container}>
				{!isLoading && (
					<div className={styles.time}>
						{formatTime(timerState.secondsLeft)}
					</div>
				)}
				{isLoading ? (
					<Loader />
				) : sessionsResponse?.data ? (
					<div className={styles.block}>
						<TimerRounds
							rounds={rounds}
							nextRoundHandler={actions.nextRoundHandler}
							prevRoundHandler={actions.prevRoundHandler}
							activeRound={timerState.activeRound}
						/>
						<button
							className={styles.btn}
							onClick={
								timerState.isRunning
									? actions.pauseHandler
									: actions.playHandler
							}
							disabled={actions.isUpdateRoundPending}
						>
							{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
						</button>
						<button
							className={styles.refresh}
							onClick={() => {
								timerState.setIsRunning(false)
								deleteSession(sessionsResponse.data.id)
							}}
							disabled={isDeletePending}
						>
							<RefreshCcw size={19} />
						</button>
					</div>
				) : (
					<Button onClick={() => mutate()} className="" disabled={isPending}>
						Создать сессию
					</Button>
				)}
			</div>
		</div>
	)
}
