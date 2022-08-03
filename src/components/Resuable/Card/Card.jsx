import './Card.scss';
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

const Card = ({ data }) => {
  return (
    <div className='trip-card-main'>
            <div className="card-top">
                    <img src={ data.image } alt="" />
                    <BsHeartFill id='card-favourate-icon'/>
            </div>
            <footer className="card-footer">
                    <div className="card-footer-top">
                            <p className="card-location-name">{ data.locationName}</p>
                            <p className="card-location-rating"><AiFillStar />&nbsp;{ data.rating }</p>
                    </div>
                    <div className="card-footer-info">
                            <p className="card-location-info">{ data.kmsAway } kilometers away</p>
                            <p className="card-location-info">{ data.tripPeriod }</p>
                            <p className="card-location-price"><span>₹{ data.tripPrice }&nbsp;</span> night</p>
                    </div>
            </footer>
    </div>
  )
}

export default Card