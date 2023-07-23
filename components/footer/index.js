import Link from 'next/link'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; CrossFit Events 2023</p>
      <p>
        <Link href='/about'>About this project</Link>
      </p>
    </footer>
  )
}
