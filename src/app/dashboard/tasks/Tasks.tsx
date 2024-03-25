import { Heading } from '@/components/ui/heading/Heading'

import styles from './Tasks.module.scss'
import { TasksView } from '@/app/dashboard/tasks/components/tasks-view/TasksView'

export function Tasks() {
	return (
		<div className={styles.wrap}>
			<Heading title="Задачи" className={styles.heading} />
			<TasksView />
		</div>
	)
}
