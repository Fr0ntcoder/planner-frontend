import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

import styles from './LogoutButton.module.scss'

type TLogoutButtonProps = {
	className?: string
}
export function LogoutButton({ className }: TLogoutButtonProps) {
	const router = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			router.push('/auth')
		},
	})
	return (
		<button className={cn(styles.btn, className)} onClick={() => mutate()}>
			<LogOut size={20} />
		</button>
	)
}
