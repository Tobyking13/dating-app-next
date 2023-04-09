import { useEffect, useState, useRef } from "react";
import profileDataJson from "../../public/JSON/MOCK_DATA.json";
import cardStyles from '../styles/card.module.css';
import carouselStyles from '../styles/carousel.module.css'

const userArr = [];

export default function CardCarousel() {
  const [clickedCard, setClickedCard] = useState(null);
  const carouselRef = useRef(null);
  useEffect((card) => {
    import("materialize-css/dist/js/materialize.min.js").then((M) => {
      const carouselInstance = M.Carousel.init(carouselRef.current, {
        numVisible: 2,
        noWrap: true,
      });
      document.addEventListener('keydown', (e) => {
        if(e.key === "ArrowLeft") {
          carouselRef.current.carouselInstance.prev();
        }
        if(e.key === "ArrowRight") {
          carouselRef.current.carouselInstance.next();
        }    
      })
      carouselRef.current.carouselInstance = carouselInstance;
    });
  }, []);

  function handleCardClick(card, setIsLiked) {
    if (clickedCard === card) {
      setIsLiked(true)
      console.log(`I double-clicked on ${card.first_name} ${card.last_name}`);
      const savedUsers = {
        firstName: card.first_name,
        lastName: card.last_name,
        like: true
      };
      userArr.push(savedUsers);
      console.log(userArr);
    } else {
      console.log(`I clicked on ${card.first_name} ${card.last_name}`);
      
    }
    carouselRef.current.carouselInstance.next();

    setClickedCard(card);
    setTimeout(() => {
      setClickedCard(null);
    }, 300); 
  }

  return (
    <div className={`carousel ${carouselStyles.carousel}`} ref={carouselRef}>
      {profileDataJson.profiles.map((card, index) => {
        const [isLiked, setIsLiked] = useState(false); 
        return (
          <div
            className="carousel-item"
            key={index}
            onClick={(e) => handleCardClick(card, setIsLiked, e)}
          >
            <div className={`card ${cardStyles.card}`}>
              <div className="card-image">
                <img
                  src={card.profile_pic}
                  alt={`${card.first_name} ${card.last_name}`}
                ></img>
              </div>
              <span className="card-title"><strong>{`${card.first_name} ${card.last_name} ${isLiked ? '❤️' : '🤍'}`}</strong></span>

            </div>
          </div>
        );
      })}
    </div>
  );
}
