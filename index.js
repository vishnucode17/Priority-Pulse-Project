import react from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import City from './city';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from "react-router-dom"
const city={
  name:["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Jaipur","Vishakapatnam"],
  description:["Mumbai also known as Bombay, the official name until 1995) is the capital city of the Indian state of Maharashtra. According to the United Nations, as of 2018, Mumbai is the second-most populous city in the country after Delhi and the seventh-most populous city in the world with a population of roughly 20 million.",
  "Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.[16][17] It is bordered by the state of Haryana on three sides and by Uttar Pradesh to the east. ",
  "Bangalore  officially known as Bengaluru , is the capital and the largest city of the Indian state of Karnataka. It has a population of more than 8 million and a metropolitan population of around 11 million, making it the third most populous city and fifth most populous urban agglomeration in India.",
  "Hyderabad is the capital and largest city of the Indian state of Telangana and the de jure capital of Andhra Pradesh.[A] It occupies 650 square kilometres (250 sq mi) on the Deccan Plateau along the banks of the Musi River, in the northern part of South India.",
  "Chennai also known as Madras,[a] the official name until 1996) is the capital of the Indian state of Tamil Nadu. Located on the Coromandel Coast of the Bay of Bengal, it is one of the largest cultural, economic and educational centres of south India. According to the 2011 Indian census, it is the sixth-most populous city and fourth-most populous urban agglomeration in India.",
  "Kolkata also known as Calcutta /kælˈkʌtə/,[16] the official name until 2001) is the capital of the Indian state of West Bengal. Located on the eastern bank of the Hooghly River, the city is approximately 80 kilometres (50 mi) west of the border with Bangladesh. ",
  "Jaipur is the capital and the largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant color scheme of its buildings. It is located 268 km (167 miles) from the national capital New Delhi.",
  "Visakhapatnam, formerly known as Vizagapatam (also known as Vizag), is the executive capital of the Indian state of Andhra Pradesh. It is also the most populated and largest city of Andhra Pradesh.[14] It lies between the Eastern Ghats and the coast of the Bay of Bengal.[15][16] It is the second largest city in the east coast of India after Chennai and also the fourth largest city in South India. "],
  img:["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bandra_Worli_Sea-Link_%28cropped%29.jpg/450px-Bandra_Worli_Sea-Link_%28cropped%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lotus_temple_Delhi.jpg/1200px-Lotus_temple_Delhi.jpg",
  "https://miro.medium.com/max/674/1*ZcpIjbV0m4o8bIrxVK06Tw.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_typical_charminar_evening.jpg/680px-A_typical_charminar_evening.jpg",
  "https://www.nationsonline.org/gallery/India/Chennai-High-Court.jpg",
  "https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg",
  "https://media.tacdn.com/media/attractions-content--1x-1/0b/17/29/5a.jpg",
  "https://assets.thehansindia.com/h-upload/feeds/2019/05/10/173219-vizag.jpg"],
  coord:["19.0760,72.8777","28.7041,77.1025","12.9716,77.5946","17.3850,78.4867","13.0827,80.2707","22.5726,88.3639","26.9124,75.7873","17.6868,83.2185"]
}

function Display(){
  
  return(
    <section>
      <article>
      <Navbar/>
      </article>
      <article className="city">
        <div className="one">
          <Places pic={city.img[0]} name={city.name[0]} description={city.description[0]}/>
          <Map pos={city.coord[0]}/>
        </div>
        <div className="two">
          <Places pic={city.img[1]} name={city.name[1]} description={city.description[1]}/>
          <Map pos={city.coord[1]}/>
        </div>
        <div className="three">
          <Places pic={city.img[2]} name={city.name[2]} description={city.description[2]}/>
          <Map pos={city.coord[2]}/>
          </div>
        <div className="four">
          <Places pic={city.img[3]} name={city.name[3]} description={city.description[3]}/>
          <Map pos={city.coord[3]}/>
        </div>
        <div className="five">
          <Places pic={city.img[4]} name={city.name[4]} description={city.description[4]}/>
          <Map pos={city.coord[4]}/>
        </div>
        <div className="six">
          <Places pic={city.img[5]} name={city.name[5]} description={city.description[5]}/>
          <Map pos={city.coord[5]}/>
        </div>
        <div className="seven">
          <Places pic={city.img[6]} name={city.name[6]} description={city.description[6]}/>
          <Map pos={city.coord[6]}/>
        </div>
        <div className="eight">
          <Places pic={city.img[7]} name={city.name[7]} description={city.description[7]}/>
          <Map pos={city.coord[7]}/>
        </div>
      </article>
    </section>
  )
}
const Navbar = () =>{
  var today = new Date();
  if (today.getHours()<12){
    var time ="Good Morning";
  }
  else if (today.getHours()>=12 &&today.getHours()<=4){
    var time="Good Afternoon";
  }
  else{
    var time="Good Evening";
  }
  return(
    <section className="home-bg">
      <img src="home-bg.svg" id='bg-img'></img>
      <div className="navbar">
        <nav>
          <div>
            <img src="logo.png" id="logo"></img>
          </div>
          <h1 id="exp">EXPLORE</h1>
          <div className="wish">
            <h3>Welcome,</h3>
            <h3>{time}</h3>
          </div>
        </nav>
      </div>
    </section>
  )
} 

function Places(props){
  
      return (
      <div className="city_details">
        <div className='city_info'>
          <img src={props.pic} alt="" id="city_img"></img>
          <h1 id="city_name">{props.name}</h1>
          <p id="city_desc">{props.description}</p>
        </div>
        
      </div>
    )
}
function Map(props){
  return(
    <div id="city_map">
        <img src={`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${props.pos}/6?mapSize=500,500&pp=${props.pos};66&mapLayer=Basemap,Buildings&key=AuxDEaPPwU32817jEPuPqGvo-BTR_fIeo8KlK_DNxx4h1tDi_iR1wnAS8MAMLSat`}></img>
        </div>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <Display/>
  </BrowserRouter>,
   document.getElementById('root'));
export default Display;