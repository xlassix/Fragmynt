import style from "../styles/components/TradeAndEarn.module.css";
import ColoredBox from "./util/ColoredBox";
import ScrollAnimation from "react-animate-on-scroll";

function TradeAndEarn() {
  return (
    <section id="trade" className={style.trade}>
      <ColoredBox id="trade-img">
        <ScrollAnimation animateIn="zoomOut">
          <img
            className={style.preview}
            alt="preview"
            src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/620698b4a955f098d8ef7215_1.3.png"
          />
        </ScrollAnimation>
      </ColoredBox>
      <ScrollAnimation animateIn="fadeInUp">
        <div>
          <h2>Trade, stake & earn — securely.</h2>
          <p>
            Trade on assets, ideas, people & things you love with no barriers to
            entry, and insured security.
          </p>
          <figure>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c7621d69933_icon-2-home-features-app-x-template.svg"
              alt=""
            />
            <figcaption>
              <h3>Feeless trading</h3>
              <p>
                Enjoy trading with 0% fees. Exchange options, use leverage &
                much more without a worry.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c8d07d69986_icon-6-careers-perks-app-x-template.svg"
              alt=""
            />
            <figcaption>
              <h3>Extra insurance</h3>
              <p>
                Get you assets insured by top providers with just a click &
                premiums as low as 0.2%.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9cafb5d69937_icon-2-home-perks-app-x-template.svg"
              alt=""
            />
            <figcaption>
              <h3>Safe staking</h3>
              <p>
                Not ready to start trading? Stake with one click instead and
                earn no risk returns starting at 19.4% APY.
              </p>
            </figcaption>
          </figure>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default TradeAndEarn;
