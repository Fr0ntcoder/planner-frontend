import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TButton>) {
	return (
		<button className={cn(className)} {...rest}>
			{children}
		</button>
	)
}
