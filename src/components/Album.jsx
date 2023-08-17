//hooks
import { useState } from 'react'
//components

import { Modal } from './Modal'

// Images


export const Album = () => {
    const [images, setImages] = useState([
        { id: 1, picture: '1.jpg?url' },
        { id: 2, picture: '/2.jpg?url' },
        { id: 3, picture: '/3.jpg?url' },
        { id: 4, picture: '/4.jpg?url' },
        { id: 5, picture: '/5.jpg?url' },
        { id: 6, picture: '/6.jpg?url' },
        { id: 7, picture: '/7.jpg?url' },
        { id: 8, picture: '/8.jpg?url' },
        { id: 9, picture: '/9.jpg?url' },
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