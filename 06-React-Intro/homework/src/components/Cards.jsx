import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  props.cities.map(city => console.log(city));
  return <div>
    algo
    {
      props.cities.map((city, i) => {
        i = city.id;
        return <Card
          name={city.name}
          min={city.main.temp_min}
          max={city.main.temp_max}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)} 
          key={city.id} />
      }
      )
    }

  </div>
};

