import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TButton>) {
	return (
		<button className={cn(styles.btn, className)} {...rest}>
			{children}
		</button>
	)
}
