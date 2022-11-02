import Sidebar from '../components/Sidebar'
import Homex from '../components/Home'
import styles from '../styles/Home.module.css'
import authorData from '../data/sidebarData'

const data = authorData[0]

export default function Home() {
  return (
    <div className={styles.container}>

      {/* <div className={`${ styles["app"] } flex h-full`}> */}
      <div className={`${styles["app"]} flex h-full`}>

        <Sidebar
          name={data.name}
          description={data.description}
          socials={data.socials}
        />

        <Homex />

      </div>

    </div>
  )
}
