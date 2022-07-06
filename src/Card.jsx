
function Card (props) {
    
    let badgeText;
    if(props.openSpots === 0) {badgeText = 'SOLD OUT'}
    else if(props.country === 'Online') {badgeText = 'ONLINE'}
    
    return(
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} alt="[profile]" className='card--image'/>
            <div className='card-stats'>
                <img src='../images/star.png' alt="Star Icon" className='card--star'/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviews}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"></p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card