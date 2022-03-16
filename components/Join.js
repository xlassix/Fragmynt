import style from "../styles/components/TradeAndEarn.module.css";
import ColoredBox from "./util/ColoredBox";

function Join() {
  return (
    <div className={style.bg_lightBlue}>
      <section id="trade" className={style.trade}>
        <div>
          <h2>Join a community of traders.</h2>
          <p>
            Learn from the best traders, discuss with your friends & level up
            with every investment.
          </p>
          <figure>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c0ccdd6993a_icon-3-home-perks-app-x-template.svg"
              alt=""
            />
            <figcaption>
              <h3>Discussion groups & AMAs</h3>
              <p>Hear from the top traders & join groups to get an edge.</p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c183ad69939_icon-4-home-perks-app-x-template.svg"
              alt=""
            />
            <figcaption>
              <h3>NFT Awards</h3>
              <p>
                Earn awards as new-age NFTs — auction them, give 'em away or use
                them as your profile photo..
              </p>
            </figcaption>
          </figure>
        </div>
        <ColoredBox id="trade-img">
          <img
            className={style.preview}
            alt="preview"
            src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f2791b06f9b07e8e64769e_iPhone%2014.png"
          />
        </ColoredBox>
      </section>
    </div>
  );
}

export default Join;
