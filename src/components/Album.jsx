//hooks
import { useState } from 'react'
//components

import { Modal } from './Modal'

import picture2 from '../../dist/assets/1.jpg'

export const Album = () => {
    const [images, setImages] = useState([
        { id: 1, picture: '/dist/assets/1.jpg' },
        { id: 2, picture: { picture2 } },
        { id: 3, picture: '/src/assets/3.JPG' },
        { id: 4, picture: '/src/assets/4.jpg' },
        { id: 5, picture: '/src/assets/5.jpg' },
        { id: 6, picture: '/src/assets/6.jpg' },
        { id: 7, picture: '/src/assets/7.jpg' },
        { id: 8, picture: '/src/assets/8.jpg' },
        { id: 9, picture: '/src/assets/9.jpg' },
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
            <div >
                <div>
                    <div className=''>
                        {switchButton === true ? <Modal handleSwitch={handleSwitch} modalImg={individualImg[0].picture} /> : null}
                    </div>
                    <h1 className="text-white text-center text-4xl py-8 ">Fotos Intergalácticas</h1>
                    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 cursor-pointer ">
                        {images.map((item) => {
                            return <div key={item.id} onClick={() => handleIndividualImg(item.picture, item.id)}>
                                <img src={item.picture} onClick={handleSwitch} alt="" />
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}