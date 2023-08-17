//hooks
import { useState } from 'react'
//components
import { ImageBox } from '../components/ImageBox'
//IMAGES
import picture1 from '../assets/1.jpg'
import picture2 from '../assets/2.jpg'
import picture3 from '../assets/3.jpg'
import picture4 from '../assets/4.jpg'
import picture5 from '../assets/5.jpg'
import picture6 from '../assets/6.jpg'
import picture7 from '../assets/7.jpg'
import picture8 from '../assets/8.jpg'
import picture9 from '../assets/9.jpg'


export const Album = () => {
    const [images, setImages] = useState([
        { id: 1, picture: picture1 },
        { id: 2, picture: picture2 },
        { id: 3, picture: picture3 },
        { id: 4, picture: picture4 },
        { id: 5, picture: picture5 },
        { id: 6, picture: picture6 },
        { id: 7, picture: picture7 },
        { id: 8, picture: picture8 },
        { id: 9, picture: picture9 },
    ])

    return (
        <>
            <div>
                <div>
                    <h1 className="text-white text-center text-4xl py-8 ">Fotos Intergalacticas</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 cursor-pointer ">
                        {images.map((item) => {
                            return <ImageBox key={item.id} img={item.picture} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}