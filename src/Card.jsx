
function Card (props) {
    return(
        <div className='card'>
            <img src={`../images/${props.img}`} alt="Katie Zaferes" className='katie'/>
            <div className='card-stats'>
                <img src='../images/star.png' alt="Star Icon" className='star'/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviews}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card