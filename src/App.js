import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>    
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://d3pah2c10lnl36.cloudfront.net/sura_wp/wp-content/uploads/2015/10/SUra-Korean-Cuisine-Koreas-Greatest-Food-Kimchi-Blog.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'http://www.koreadailyus.com/wp-content/uploads/2016/01/vegetarian-bibimpbap.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://i.ytimg.com/vi/K4JqEVr9rKM/maxresdefault.jpg',
    rating: 4.7,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
