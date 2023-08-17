SVGUnitTypes

export const Modal = (props) => {
    return (
        <div >
            <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90'>
                <img className='max-w-screen max-h-screen' src={props.modalImg} onClick={props.handleSwitch} alt="" />
            </div>
        </div >
    )
}