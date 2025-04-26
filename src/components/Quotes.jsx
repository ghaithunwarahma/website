import { useRef, useEffect, useState } from 'react';
import styles from "../style";

const Quotes = () => {
  const textRef = useRef();
  const [textVisible, setTextVisible] = useState(false);

  const nameRef = useRef();
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const text_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
  
      if (!textVisible && entry.isIntersecting) {
        setTextVisible(true);
      }
    })
  
    text_observer.observe(textRef.current);

    const name_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
  
      if (!nameVisible && entry.isIntersecting) {
        setNameVisible(true);
      }
    })
  
    name_observer.observe(nameRef.current);
  }, [])

  return (
    <section className={`flex flex-row w-full justify-center items-center relative ${styles.paddingYT}`}>
      <div className="flex flex-col justify-center items-center my-10 z-[2]">
        <div ref={textRef} className={`${ textVisible ? 'show' : '' } animate_hidden animate_up w-[50%]`}>
          <p className="text-center text-cloud-gradient text-white font-lato md:text-[18px] ss:text-[16px] text-[14px]">
          {/* <p className="text-center text-gradient2 text-white font-lato md:text-[18px] ss:text-[16px] text-[14px]"> */}
            The most beloved people to Allah are those who are most beneficial to the people
          </p>
        </div>
        <div ref={nameRef} className={`${ nameVisible ? 'show' : '' } animate_hidden animate_up w-[50%]`}>
          <p className="text-center text-cloud-gradient text-white mt-7 font-lato md:text-[15px] ss:text-[13px] text-[11px]">Prophet Muhammad ﷺ</p>
        </div>
        {/* <p className="w-[50%] text-center text-gradient2 mt-12 font-noto-sans-arabic md:text-[18px] ss:text-[16px] text-[14px]">
        أحبُّ الناسِ إلى الله أنفعُهم للناس
        </p>
        <p className="w-[50%] text-center mt-7 font-noto-sans-arabic md:text-[15px] ss:text-[13px] text-[11px] text-white">محمد رسول الله ﷺ</p> */}
      </div>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
      <div className="absolute z-[0] w-[60%] h-[60%] bottom-0 rounded-full pink__gradient md:opacity-20 min-[650px]:opacity-30 opacity-50" />
      <div className="absolute z-[1] w-[60%] h-[60%] bottom-0 rounded-full white__gradient md:opacity-40 min-[650px]:opacity-50 opacity-60" />
      <div className="absolute z-[0] w-[60%] h-[60%] bottom-0 rounded-full blue__gradient md:opacity-30 min-[650px]:opacity-40 opacity-50" />
    </section>
  )
}

export default Quotes