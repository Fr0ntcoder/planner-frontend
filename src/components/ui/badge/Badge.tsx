import cn from 'clsx'
import type { PropsWithChildren } from 'react'

import styles from './Badge.module.scss'

type TBadge = {
	className?: string
	value?: string
	variant?: string
}

export function Badge({
	children,
	className,
	variant,
}: PropsWithChildren<TBadge>) {
	return (
		<span
			className={cn(
				styles.badge,
				{
					[styles.default]: variant === 'default',
					[styles.high]: variant === 'high',
					[styles.medium]: variant === 'medium',
					[styles.low]: variant === 'low',
				},
				className
			)}
		>
			{children}
		</span>
	)
}
