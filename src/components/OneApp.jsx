import { useRef, useEffect, useState } from 'react';
import styles from "../style";

const OneApp = ({ name, content, images }) => {
  
  const headingRef = useRef();
  const [headingVisible, setHeadingVisible] = useState(false);

  const contentRef = useRef();
  const [contentVisible, setContentVisible] = useState(false);

  const imagesRef = useRef();
  const [imagesVisible, setImagesVisible] = useState(false);

  const messageRef = useRef();
  const [messageVisible, setMessageVisible] = useState(false);

  const messageRef2 = useRef();
  const [messageVisible2, setMessageVisible2] = useState(false);

  useEffect(() => {

    const heading_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!headingVisible && entry.isIntersecting) {
        setHeadingVisible(true);
      }
    })

    heading_observer.observe(headingRef.current);


    const content_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!contentVisible && entry.isIntersecting) {
        setContentVisible(true);
      }
    })

    content_observer.observe(contentRef.current);


    const images_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // if (name === 'afia') {
      //   console.log('images observed.');
      // }

      if (!imagesVisible && entry.isIntersecting) {

        if (name === 'afia') {
          console.log('intesecting: ' + entry.isIntersecting);
        }

        setImagesVisible(true);
      }
    })

    images_observer.observe(imagesRef.current);


    const message_observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!messageVisible && entry.isIntersecting) {
        setMessageVisible(true);
      }
    })

    message_observer.observe(messageRef.current);

    const message_observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!messageVisible2 && entry.isIntersecting) {
        setMessageVisible2(true);
      }
    })

    message_observer2.observe(messageRef2.current);

  }, [])

  // const  [origin_y, setOriginY] = useState(0);
  // const [height, setHeight] = useState("h-[20px]");

  // const beforePicsRef = useRef();
  // const picsRef = useRef();
  // // const pics = useRef();

  // useEffect(() => {
  //   if (beforePicsRef.current) {
  //     const value = beforePicsRef.current;
  //     console.log('beforePicsRef.current is valid: offset height: ' + value.offsetHeight + ', offset top: ' + value.offsetTop);
  //     setOriginY(value.offsetHeight + value.offsetTop);
  //   }
  //   if (picsRef.current) {
  //     console.log('picsRef.current is valid: element height: ' + picsRef.current.offsetHeight);
  //     const height = picsRef.current.offsetHeight;
  //     setHeight("h-[" + height + "px]");
  //   } else {
  //     console.log('picsRef.current is not valid');
  //   }
  // }, [])

  // const ref = useRef(null);

  // const [height, setHeight] = useState(0);
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   setHeight(ref.current.offsetHeight);
  //   setWidth(ref.current.offsetWidth);

  //   // 👇️ if you need access to parent
  //   // of the element on which you set the ref
  //   console.log(ref.current.parentElement);
  //   console.log(ref.current.parentElement.offsetHeight);
  //   console.log(ref.current.parentElement.offsetWidth);
  // }, []);

  // function calcInnerWidth() {
  //   // see: https://betterprogramming.pub/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568
  //   /* Get window inner width here */
  //   if (window.innerWidth > 768) {
  //     console.log("window width greater");
  //     "max-w-[768px] aspect-[100/61]"
  //   } else {
  //     console.log("window width lesser");
  //     "h-[" + window.innerWidth * 0.61 + "px]"
  //   }
  // }
  
  // const heightByWindow = window.innerWidth * 0.61;
  // console.log("heightByWindow: " + heightByWindow);

  // 768 * 0.61

  return (
    <div className="lg:flex lg:justify-between lg:items-start px-10 py-12 rounded-[12px] border-[1px] border-[#262626] bg-[#101019] md:max-w-full md:min-w-full md:mr-10 sd:mr-5 mr-0 my-5">
      <div className="flex flex-col justify-start items-start lg:w-1/4 lg:min-w-[200px] lg:m-2">
        <h2 ref={headingRef} className={`${ headingVisible ? 'show' : '' } animate_hidden animate_right font-poppins font-semibold ss:text-[36px] text-[32px] text-cloud-gradient`}>{name}</h2>
        <p ref={contentRef} className={`${ contentVisible ? 'show' : '' } animate_hidden animate_right font-lato font-normal text-[18px] leading-[32px] text-white my-10`}>{content}</p>
        <p ref={messageRef} className={`${ messageVisible ? 'show' : '' } lg:block hidden animate_hidden animate_right italic font-lato text-[#d4cac8] sm:mt-0 mt-7`}>(Swipe left to scroll images)</p>
        {/* <p ref={messageRef} className={`${ messageVisible ? 'show' : '' } lg:block hidden animate_hidden animate_right italic font-lato text-gray-500 sm:mt-0 mt-7`}>(Swipe left to scroll images)</p> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {/* <div className={`${styles.directAppPhotosParent} w-full ${ (window.innerWidth * 0.61 > 768) ? "max-w-[768px] aspect-[100/61]" : "h-[" + heightByWindow + "px]" }`}>  */}
        <div className={`${styles.directAppPhotosParent} w-full max-w-[768px] aspect-[100/61] sm:pb-0 min-[700px]:pb-[427px] min-[650px]:pb-[396px] min-[600px]:pb-[366px] min-[550px]:pb-[335px] min-[500px]:pb-[305px] min-[450px]:pb-[274px] min-[400px]:pb-[244px] min-[350px]:pb-[213px] min-[300px]:pb-[183px] min-[250px]:pb-[152px]`}> 
          <div ref={imagesRef} className={`${styles.appPhotosScrollDiv} ${ imagesVisible ? 'show' : '' } animate_hidden animate_up snap-x snap-mandatory flex absolute left-0 items-center overflow-x-scroll`}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt={image.id}
                className="snap-center w-full aspect-[100/61]"
              />
            ))}
          </div>
        </div>
        <p ref={messageRef2} className={`${ messageVisible2 ? 'show' : '' } lg:hidden animate_hidden animate_right italic font-lato text-[#d4cac8] sm:mt-0 mt-7`}>(Swipe left to scroll images)</p>
        {/* <p ref={messageRef2} className={`${ messageVisible2 ? 'show' : '' } lg:hidden animate_hidden animate_right italic font-lato text-gray-500 sm:mt-0 mt-7`}>(Swipe left to scroll images)</p> */}
      </div>
    </div>
  )
}

export default OneApp