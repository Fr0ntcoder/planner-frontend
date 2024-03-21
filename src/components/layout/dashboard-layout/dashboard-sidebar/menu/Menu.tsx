import styles from './Menu.module.scss'
import { MenuItem } from './menu-item/MenuItem'
import { MENU } from './menu.data'

export function Menu() {
	const list = MENU.map((item) => <MenuItem item={item} key={item.link} />)
	return <div className={styles.list}>{list}</div>
}
