//hooks
import { useState } from 'react'
//components
import { ImageBox } from '../components/ImageBox'
import { Modal } from '../components/Modal'
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

    const [switchButton, setSwitchButton] = useState(false)
    const [individualImg, setIndividualImg] = useState([])

    function handleSwitch() {
        if (switchButton === false) {
            setSwitchButton(true)
        } else {
            setSwitchButton(false)
        }
    }

    function handleIndividualImg(img, id) {
        setIndividualImg(images.filter((item) => item.id == id))
    }

    console.log(individualImg)

    return (
        <>
            <div className='h-full w-full bg-black'>
                <div>
                    <div>
                        {switchButton === true ? individualImg.map((item) => <Modal handleSwitch={handleSwitch} key={item.id} modalImg={item.picture} />) : null}
                    </div>
                    <h1 className="text-white text-center text-4xl py-8 ">Fotos Intergalácticas</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
                        {images.map((item) => {
                            return <div key={item.id} onClick={() => handleIndividualImg(item.picture, item.id)}>
                                <ImageBox key={item.id} img={item.picture} switchImage={handleSwitch} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}