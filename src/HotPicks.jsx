import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect} from 'react'
import { db } from "./firebaseConfig"
import { doc, getDoc} from "firebase/firestore"
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './HotPicks.css'

function HotPicks(){ 
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)
    const [image5, setImage5] = useState(null)
    const [image6, setImage6] = useState(null)
    
    useEffect(() => {
        async function fetchImage() {
        const docSnap = await getDoc(doc(db, "hot-picks", "hot"))
            if (docSnap.exists()) {
                setImage1(docSnap.data().img1)
                setImage2(docSnap.data().img2)
                setImage3(docSnap.data().img3)
                setImage4(docSnap.data().img4)
                setImage5(docSnap.data().img5)
                setImage6(docSnap.data().img6)
            }
        } 
        fetchImage();
    },[]);


return( 
    <div className="hotpicks-carousel"> 
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={0}
            loop={true} 
        > 
        <SwiperSlide><img src={image1} className="item" /> </SwiperSlide>
        <SwiperSlide><img src={image2} className="item" /> </SwiperSlide>
        <SwiperSlide><img src={image3} className="item" /> </SwiperSlide>
        <SwiperSlide><img src={image4} className="item" /> </SwiperSlide>
        <SwiperSlide><img src={image5} className="item" /> </SwiperSlide>
        <SwiperSlide><img src={image6} className="item" /> </SwiperSlide>
        </Swiper>
    </div>
)
}

export default HotPicks
