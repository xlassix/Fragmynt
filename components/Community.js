import style from "../styles/components/Community.module.css";
import ColoredBox from "./util/ColoredBox";
import ScrollAnimation from "react-animate-on-scroll";

function Community() {
  return (
    <section id="community" className={style.community}>
      <ColoredBox id="trade-img">
        <ScrollAnimation animateIn="zoomOut">
          <img
            className={style.preview}
            alt="preview"
            src="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f279522ac9c2830ebfb3e8_iPhone%2019.png"
          />
        </ScrollAnimation>
      </ColoredBox>
      <ScrollAnimation animateIn="fadeInUp">
        <div>
          <h2>Used & trusted by a community of millions.</h2>
          <p>
            Become a part of the Fragmynt community & join over thousands of
            traders & millions more on-chain who're redefining markets.
          </p>
          <div className={style.cards}>
            <figure>
              <h3 data-end="M" data-color="--color-light">&nbsp;15</h3>
              <p>Market trades</p>
            </figure>
            <figure>
              <h3  data-end="+"  className="yellow">4.9</h3>
              <p>Average review</p>
            </figure>
            <figure>
              <h3 data-end="M" data-color="#127374">2</h3>
              <p>Active users</p>
            </figure>
            <figure>
              <h3 data-end="+" data-color="#127374">100</h3>
              <p>Different markets</p>
            </figure>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Community;
