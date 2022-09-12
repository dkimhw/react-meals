import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-ec2cd-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      let results = []
      for (let key in responseData) {
        results.push(Object.assign(responseData[key], {label: key}));
      }
      setMeals(results);
      setIsLoading(false);
    }

    fetchMeals().catch(error => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <section className={classes['meals-loading']}><p>Loading</p></section>
  }

  if (httpError) {
    return <section className={classes['meals-error']}><p>{httpError}</p></section>
  }

  const mealsList = meals.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
