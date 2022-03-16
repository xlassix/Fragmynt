import style from "../styles/components/EveryThingYouNeed.module.css";

function EveryThingYouNeed() {
  return (
    <div className={style.EveryThingYouNeed}>
      <section>
        <h2>Everything you need, right at your fingertips.</h2>
        <div className={style.features}>
          <div className={style.first}>
            <div>
              <img
                className={style.icon}
                src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c1ebdd69931_icon-1-home-features-app-x-template.svg"
                alt="data"
              />
              <h3>Built-in digital wallet</h3>
              <p>
                Join in with your own digital wallet or let Fragmynt handle the
                hassle. Store your keys safely and trade without hesitation.
              </p>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/6206989079c1485191a2be48_1.2.png"
              alt=""
              className={style.phone}
            />
          </div>
          <figure>
            <img
              className={style.icon}
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c7621d69933_icon-2-home-features-app-x-template.svg"
              alt="data"
            />
            <h3>Trade with a click</h3>
            <p>
              Jump in & out of markets with just a click of a button — no prior
              trading experience required.
            </p>
          </figure>
          <figure>
            <img
              className={style.icon}
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c0b15d69932_icon-3-home-features-app-x-template.svg"
              alt="data"
            />
            <h3>Invest less than $1</h3>
            <p>
              Have some spare change lying around? Put it to work by investing
              in your favourite TV show.
            </p>
          </figure>
          <figure>
            <img
              className={style.icon}
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c8c28d69935_icon-4-home-features-app-x-template.svg"
              alt="data"
            />
            <h3>Secure by design</h3>
            <p>
              Keep your transactions, data & assets secured by the blockchain &
              complete encryption.
            </p>
          </figure>
          <figure>
            <img
              className={style.icon}
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c4381d69934_icon-5-home-features-app-x-template.svg"
              alt="data"
            />
            <h3>Deposit & withdraw</h3>
            <p>Deposit & withdraw in your local currency without a worry.</p>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default EveryThingYouNeed;
