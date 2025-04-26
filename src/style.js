const x = "xl:px-16 lg:px-12 md:px-6 sm:px-6 px-2";
const y = "xl:px-16 lg:px-12 md:px-6 sm:px-6 px-2";

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    // paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    paragraph: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    // 8 because of the px-6 on paddingX property above
    paddingXAppContainer: "md:px-16 sm:px-6 min-[650px]:px-8 px-4",

    // Apps images were of resolution of 3104x1882, so to get the height we multiply by 0.606 ~ 0.61
    // directAppPhotosParent: "md:relative xl:h-[780px] lg:h-[624px] md:h-[468px] sm:h-[390px] h-[250px]",
    // directAppPhotosParent: "sm:relative xl:h-[780px] lg:h-[624px] md:h-[468px] sm:h-[390px] h-[390px]",
    // directAppPhotosParent: "sm:relative md:aspect-[100/61] md:h-none sm:h-[390px] h-[390px]",
    directAppPhotosParent: "sm:relative",

    // appPhotosScrollDiv: "xl:h-[780px] lg:h-[624px] md:h-[468px] sm:h-[390px] h-[250px]",
    // appPhotosScrollDiv: "xl:h-[780px] lg:h-[624px] md:h-[468px] sm:h-[390px] h-[390px]",
    // appPhotosScrollDiv: "md:aspect-[100/61] md:h-none sm:h-[390px] h-[390px]",
    appPhotosScrollDiv: "",
    paddingYT: "sm:pt-16 pt-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;