import './Cards.css';


function Cards({imgSrc, name, position, biography}) {

    return (
        <div className='cards'>
        <img src={imgSrc} alt={name} className='cards-img' />
        <div className='cards-description'>
            <h3 className='cards-name'>{name}</h3>
            <h4 className='cards-position'>{position}</h4>
            <p className='cards-biography'>{biography}</p> 
        </div>
      </div>
    
    );
  };
  
  export default Cards