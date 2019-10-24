import React, { useEffect, useState }  from 'react';
import './App.css';


import axios from 'axios';


export function BeerOfTheDay() 
{
  const [beer, setBeer] = useState();

  useEffect(() => 
  {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then(beer => {
        console.log(beer);

        
        let newBeer = {
          name: beer.data[0].name,
          image: beer.data[0].image_url
        };

        setBeer(newBeer)
      })

      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Bierre du jour</h1>
      {beer ? (<p>{beer.name}</p>) : "rien"}

      <img src={(beer && beer.image) && beer.image} alt="a beer pic"></img>
      

    </div>
  );
}