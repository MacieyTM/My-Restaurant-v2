import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Pyszne jedzenie, przygotowane specjalnie dla Ciebie!</h2>
      <p>
        Wybierz swój ulubiony posiłek z naszego menu przez internet i odbierz go
        od naszego kuriera bez wychodzenia z domu!
      </p>
      <p>
        Wszystkie nasze posiłki są przygotowywane przez doświadczonych kucharzy
        i dostarczane do 30 minut od złożenia zamówienia!
      </p>
    </section>
  );
};

export default MealsSummary;
