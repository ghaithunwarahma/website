import styles from './style'

import { NavBar, Hero, Apps, Quotes, Footer, StrengthProject } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} backdrop-blur-xl z-10 bg-black/30 fixed w-full`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar /> 
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} mt-[112px]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Apps />
      </div>
    </div>
    
    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}  mt-[112px]`}>
      <div className={`${styles.boxWidth}`}>
        <Quotes />
        <Footer />
      </div>
    </div>
  </div>
)

export default App