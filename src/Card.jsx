import Star from './images/star.png'

function Card (props) {
    return(
        <div className='card'>
            <img src={props.img} alt="Katie Zaferes" className='katie'/>
            <div className='card-stats'>
                <img src={Star} alt="Star Icon" className='star'/>
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