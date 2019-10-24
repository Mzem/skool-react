import React, { useEffect, useState }  from 'react';
import './App.css';


import axios from 'axios';


export function BeerOfTheDay() 
{
  const [beers, setBeers] = useState([]);

  useEffect(() => 
  {
    axios.get('https://api.punkapi.com/v2/beers/?page=1&per_page=5')
      .then(beers => {
        console.log(beers);

        let newBeerList = [];
        
        beers.data.forEach(beer => 
          {
          let newBeer = {
            name: beer.name,
            image: beer.image_url
          };

          newBeerList.push(newBeer)
        });
        

        setBeers(newBeerList)
      })

      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Bières du jour</h1>

      <div className="beers">
      <ul>
        {beers.map(beer => (
          <li key={beer.name}>
            <h2>{beer.name}</h2>
            <img src={beer.image} alt="a beer pic"></img>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}