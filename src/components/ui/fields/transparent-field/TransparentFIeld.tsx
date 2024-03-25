import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './TransparentFIeld.module.scss'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return <input className={cn(styles.field, className)} ref={ref} {...rest} />
})

TransparentField.displayName = 'TransparentField'
