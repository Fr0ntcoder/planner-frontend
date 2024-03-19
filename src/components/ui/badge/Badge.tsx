import cn from 'clsx'
import type { CSSProperties, PropsWithChildren } from 'react'

import styles from './Badge.module.scss'

type TBadge = {
	className?: string
	/* variant?: string */
	style?: CSSProperties
}

export function Badge({
	children,
	className,
	style,
}: PropsWithChildren<TBadge>) {
	return (
		<span className={cn(styles.badge, className)} style={style}>
			{children}
		</span>
	)
}
