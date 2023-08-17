export const Modal = (props) => {
    return (
        <div className="bg-black h-screen bg-fixed w-screen fixed">

            <img className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer m-auto md:w-screen md:h-screen" src={props.modalImg} onClick={props.handleSwitch} alt="" />
        </div>
    )
}