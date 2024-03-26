import cn from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { TTimerRoundResponse } from '@/types/timer.types'

import styles from './TimerRounds.module.scss'

type TTimerRounds = {
	rounds: TTimerRoundResponse[] | undefined
	nextRoundHandler: () => void
	prevRoundHandler: () => void
	activeRound: TTimerRoundResponse | undefined
}
export function TimerRounds({
	rounds,
	nextRoundHandler,
	prevRoundHandler,
	activeRound,
}: TTimerRounds) {
	const isCanPrevRound = rounds
		? rounds.some((item) => item.isCompleted)
		: false
	const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false
	return (
		<div className={styles.wrap}>
			<button
				className={styles.btn}
				disabled={!isCanPrevRound}
				onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
			>
				<ChevronLeft size={25} />
			</button>
			<div className={styles.container}>
				{rounds &&
					rounds.map((item, i) => (
						<div
							className={cn(styles.round, {
								[styles.completed]: item.isCompleted,
								[styles.active]:
									item.id === activeRound?.id && !item.isCompleted,
							})}
							key={i}
						></div>
					))}
			</div>
			<button
				className={styles.btn}
				disabled={!isCanNextRound}
				onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
			>
				<ChevronRight size={25} />
			</button>
		</div>
	)
}
