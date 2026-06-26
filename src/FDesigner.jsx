import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect} from 'react'
import { db } from "./firebaseConfig"
import { doc, getDoc} from "firebase/firestore"
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './FDesigner.css'

function FDesigner() {
    return (
        <div className="Designer"> 
            <header>Designer Spotlight</header>
            <Swiper> 
            </Swiper>
        </div>
    )
}
export default FDesigner; 