import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2><b>Delicious Food, On Your Order, For You.</b></h2>
      <p>
            Choose from our <span ><b>Shahi FOOD Khazaana </b> </span> meals from our world class cuisine
        and enjoy a delicious breakfast, lunch or dinner at the go.
      </p>
    </section>
  );
};

export default MealsSummary;
