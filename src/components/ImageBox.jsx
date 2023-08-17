export const ImageBox = (props) => {
    return (
        <>
            <div >

                <img className="hover:opacity-80 px-2 " onClick={props.switchImage} src={props.img} alt="" />
            </div >
        </>
    )
}