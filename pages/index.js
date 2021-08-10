import Header from '../components/Header/Header'
import style from '../styles/index.module.css'
import Container from '../components/Container/Container'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Container />
    </div>
  )
}
