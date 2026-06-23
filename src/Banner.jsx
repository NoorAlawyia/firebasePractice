import { useState, useEffect} from 'react'
import { db } from "./firebaseConfig"
import { doc, getDoc} from "firebase/firestore"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import saleImg from './assets/sale-banner.png'
import giftImg from './assets/gift-shop-banner.png'
import './Banner.css'

function Banner() { 
  const [eventImg, setEventImg] = useState(null)

  useEffect(() => {
    async function fetchImage() { 
      const docSnap = await getDoc(doc(db, "banner-images", "banners"))
      console.log("exists:", docSnap.exists());     
      console.log("data:", docSnap.data()); 
      if (docSnap.exists()) {
        setEventImg(docSnap.data().image)
      }
    }
    fetchImage();
  },[]);


  return ( 
    <div className="banner-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 10000 }}
        loop={true}
      >
        <SwiperSlide><img src={eventImg} className="banner1" /></SwiperSlide>
        <SwiperSlide><img src={saleImg} className="banner2" /></SwiperSlide>
        <SwiperSlide><img src={giftImg} className="banner3" /></SwiperSlide>
      </Swiper>
      <div className="nav-bottom">  
        <div className="Burger"> 
          <a href="#" className="cloth">Clothing</a>
          <a href="#" className="accessory">Accessories</a>
          <a href="#" className="beauty">Beauty</a>
          <a href="#" className="footwear">Footwear</a>
          <a href="#" className="sale">Sale</a>
          <a href="#" className="curated">Curated</a>
          <a href="#" className="designers">Designers</a>
          <a href="#" className="gift">Gift Shop</a> 
        </div> 
      </div>
    </div>
  ) 
} 

export default Banner