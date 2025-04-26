import styles from '../style'
import { socialMedia } from '../constants'

const Footer = () => (
  <section id="contact-us" className={`${styles.flexCenter} ${styles.paddingY}`}>
    <div className='w-full flex flex-col items-center pt-6'>
      <div className="flex flex-row">
        {socialMedia.map((social, index) => (
            <a href={social.link} className="mx-[8px]">
            {/* <div href={social.link} className="mx-3 my-1 cursor-pointer hover:brightness-100 brightness-50"> */}
              <div className="hover:border-[#eeeae9] border-transparent border-2 rounded-2xl hover:brightness-75 brightness-[0.25]">
              {/* <div className="hover:border-[#27a366] border-transparent border-2 rounded-2xl hover:brightness-75 brightness-[0.25]"> */}
              {/* <div className="hover:border-white hover:opacity-75 border-transparent border-2 rounded-2xl hover:brightness-75 brightness-[0.25]"> */}
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  // className={`w-[21px] h-[21px] object-contain cursor-pointer hover:brightness-100 brightness-50 ${ index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0' }`}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer mx-[18px] my-2`}
                  // className={`w-[21px] h-[21px] object-contain`}
                />
              </div>
            {/* </div> */}
            </a>
          ))}
      </div>

      <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-white brightness-[0.35] mt-11">
        2025 Ghaithun waRaḥma — غَيثٌ ورَحمَة
      </p>
    </div>
  </section>
)

export default Footer