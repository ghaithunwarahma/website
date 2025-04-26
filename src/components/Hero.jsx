import { useRef, useEffect, useState } from 'react';
// import { flower } from '../assets';
import styles from '../style'

const Hero = () => {
  const hookRef = useRef();
  const [hookVisible, setHookVisible] = useState(false);
  
  // const coverRef = useRef();
  // const [coverVisible, setCoverVisible] = useState(false);

  const headingRef = useRef();
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const hook_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!hookVisible && entry.isIntersecting) {
        setHookVisible(true)
      }
    })
    hook_observer.observe(hookRef.current);

    // const cover_observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];

    //   if (!coverVisible && entry.isIntersecting) {
    //     setCoverVisible(true)
    //   }
    // })
    // cover_observer.observe(coverRef.current);

    const heading_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!headingVisible && entry.isIntersecting) {
        setHeadingVisible(true)
      }
    })
    heading_observer.observe(headingRef.current);

  }, [])

  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} bg-hero-cloud-gradient`}>
    {/* // <section className={`flex md:flex-row flex-col justify-center items-center ${styles.paddingY} min-h-screen relative`}> */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div ref={hookRef} className={`${ hookVisible ? 'show' : '' } flex flex-row items-center py-[6px] px-4 bg-cloud-gradient rounded-[10px] mb-2 animate_hidden animate_up`}>
          <p className={`${styles.paragraph} ml-2`}>
            A {" "}
            <span className="">people-first</span> entity
            {/* <span className="text-white">pro-social</span> entity. */}
            {/* A {" "}
            <span className="text-white">solutions</span> and {" "}
            <span className="text-white">portfolio</span> company. */}
          </p> 
        </div>
        <div ref={headingRef} className={`${ headingVisible ? 'show' : '' } flex flex-row justify-between items-center w-full animate_hidden animate_up `}>

          {/* need to fix line spacing for breakpoints less than ss */}
          
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] min-[580px]:text-[67px] min-[560px]:text-[64px] min-[540px]:text-[60px] min-[520px]:text-[56px] min-[460px]:text-[52px] min-[430px]:text-[48px] min-[400px]:text-[44px] min-[365px]:text-[40px] text-[36px] text-black ss:leading-[100px] leading-[75px] break_word">
          {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] min-[580px]:text-[67px] min-[560px]:text-[64px] min-[540px]:text-[60px] min-[520px]:text-[56px] min-[460px]:text-[52px] min-[430px]:text-[48px] min-[400px]:text-[44px] min-[365px]:text-[40px] text-[36px] text-white ss:leading-[100px] leading-[75px] break_word"> */}
            <span>
              Cataylising and <br className="sm:block hidden"/> Channelling <span className="text-cloud-gradient">Benefit</span>
              {/* Cataylising and <br className="sm:block hidden"/> Imparting <span className="text-gradient2">Good.</span> */}
              {/* Producing and <br className="sm:block hidden"/> imparting <span className="text-gradient2">value.</span> <br className="sm:block hidden"/> Guided by <span className="text-gradient2">wisdom</span><br className="sm:block hidden"/> and <span className="text-gradient2">fortitude.</span> */}
              {/* Applying <span className="text-gradient2">wisdom</span> <br className="sm:block hidden"/> and <span className="text-gradient2">fortitude</span> in generating <br className="sm:block hidden"/> and distributing <span className="text-gradient2">value</span> */}
              {/* Utilizing <span className="text-gradient2">wisdom</span> <br className="sm:block hidden"/> and <span className="text-gradient2">tenacity</span> in generating <br className="sm:block hidden"/> and distributing <span className="text-gradient2">value</span> */}
            </span>
          </h1>
        </div>
      </div>
      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={flower} alt="petal" className="h-[250px] z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div ref={coverRef} className={`${ coverVisible ? 'hide' : '' } animate_cover_shown animate_side_disappear bg-white z-50 h-full w-full`}>
        Hello
      </div> */}
    </section>
  );
}

export default Hero