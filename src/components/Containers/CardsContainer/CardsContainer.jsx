import { HOME_CARD_DATA } from '../../../Data/CardData/HOME_CARD_DATA';
import Card from '../../Resuable/Card/Card';
import './CardsContainer.scss';

const CardsContainer = ({ navOption }) => {
  return (
    <div className='cards-container-main'>
          { navOption === 1 && HOME_CARD_DATA.map(card => <Card key={ card.id } data={ card }/>) }
    </div>
  )
}

export default CardsContainer