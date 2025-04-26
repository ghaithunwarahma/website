import { apps } from '../constants';
import styles from '../style';
import OneApp from './OneApp';
import { useRef, useEffect, useState } from 'react';


const Apps = () => {
  const labelRef = useRef();
  const [labelVisible, setLabelVisible] = useState(false);

  useEffect(() => {

    const label_observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (!labelVisible && entry.isIntersecting) {
            setLabelVisible(true);
        }
    })

    label_observer.observe(labelRef.current);

  }, [])

  // <div id="apps" className={layout.section}>
  //   <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
  //     {apps.map((card) => (
  //       <OneApp key={card.id} {...card} />
  //     ))}
  //   </div>
  // </div>

  return (
    <section id="apps" className={`${styles.paddingXAppContainer} ${styles.flexCenter} flex-col overflow-x-visible`}>
      <div ref={labelRef} className={`${ labelVisible ? 'show' : '' } animate_hidden animate_right w-full flex-col sm:mb-16 mb-6 sm:mt-16 mt-6 z-[1]`}>
      {/* <div ref={labelRef} className={`${ labelVisible ? 'show' : '' } animate_hidden animate_right w-full flex-col sm:mb-16 mb-6 z-[1]`}> */}
        {/* <h1 className="font-lato font-semibold xs:text-[24px] text-[34px] text-[#888888] w-full">List of apps by Ghaithun warahma — Alpha stage</h1> */}
        <p className="text-center font-lato text-[18px] leading-[32px] text-[#d4cac8]">
          Apps by Ghaithun waRaḥma — Alpha stage
        </p>
      </div>
      <div className="overflow-x-visible sm:justify-start justify-center w-full z-[1]">
        {apps.map((card) => (
          <OneApp key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Apps