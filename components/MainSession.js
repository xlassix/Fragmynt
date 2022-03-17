import ColoredBox from "./util/ColoredBox";
import styles from "../styles/components/MainSession.module.css";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

function MainSession() {
  return (
    <section id="intro" className={styles.intro}>
      <ScrollAnimation animateIn="fadeInUp">
        <div>
          <h2>Earn with markets you love.</h2>
          <p>
            Trade, invest & stake on anything — from Kanye West to Spacex. Join
            from anywhere, start anytime.
          </p>
          <ScrollAnimation animateIn="fadeInUp">
            <div className={styles.buttons}>
              <Link href="https://fragmynt.com/deck">
                <a>
                  <svg
                    viewBox="0 0 590 522"
                    xmlSpace="preserve"
                    fill="white"
                    height="1.25rem"
                  >
                    <path d="M552 64H88c-13.255 0 -24 10.745 -24 24v8H24c-13.255 0 -24 10.745 -24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48 -21.49 48 -48V88c0 -13.255 -10.745 -24 -24 -24zM56 400a8 8 0 0 1 -8 -8V144h16v248a8 8 0 0 1 -8 8zm236 -16H140c-6.627 0 -12 -5.373 -12 -12v-8c0 -6.627 5.373 -12 12 -12h152c6.627 0 12 5.373 12 12v8c0 6.627 -5.373 12 -12 12zm208 0H348c-6.627 0 -12 -5.373 -12 -12v-8c0 -6.627 5.373 -12 12 -12h152c6.627 0 12 5.373 12 12v8c0 6.627 -5.373 12 -12 12zm-208 -96H140c-6.627 0 -12 -5.373 -12 -12v-8c0 -6.627 5.373 -12 12 -12h152c6.627 0 12 5.373 12 12v8c0 6.627 -5.373 12 -12 12zm208 0H348c-6.627 0 -12 -5.373 -12 -12v-8c0 -6.627 5.373 -12 12 -12h152c6.627 0 12 5.373 12 12v8c0 6.627 -5.373 12 -12 12zm0 -96H140c-6.627 0 -12 -5.373 -12 -12v-40c0 -6.627 5.373 -12 12 -12h360c6.627 0 12 5.373 12 12v40c0 6.627 -5.373 12 -12 12z" />
                  </svg>
                  <p>Magazine</p>
                </a>
              </Link>
              <Link href="https://www.fragmynt.com/learn-more">
                <a>
                  <svg
                    viewBox="0 0 640 512"
                    xmlSpace="preserve"
                    fill="white"
                    height="1.25rem"
                  >
                    <path d="M472 480H328a32 32 0 0 1 -32 -32V80H184v168a32 32 0 0 1 -32 32H8a8 8 0 0 1 -8 -8v-32a8 8 0 0 1 8 -8h128V64a32 32 0 0 1 32 -32h144a32 32 0 0 1 32 32v368h112V264a32 32 0 0 1 32 -32h144a8 8 0 0 1 8 8v32a8 8 0 0 1 -8 8H504v168a32 32 0 0 1 -32 32z" />
                  </svg>
                  <p>Learn More</p>
                </a>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      <ColoredBox id="Earn">
        <ScrollAnimation animateIn="zoomOut">
          <img
            alt="preview"
            src={
              "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/6206988e8b7a865d5e09bdf5_1.1.png"
            }
          />
        </ScrollAnimation>
      </ColoredBox>
    </section>
  );
}
export default MainSession;
