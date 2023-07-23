import Link from 'next/link'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>Crossfit Events</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
