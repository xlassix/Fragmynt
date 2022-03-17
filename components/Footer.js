import Link from "next/link";
import style from "../styles/components/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div>
          <img
            src={
              "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/62069285acfd712e88b52676_Frame%209.png"
            }
            alt="logo"
            height={25}
            width={100}
            layout="responsive"
          />
          <p>
            Fragmynt is solely for informational purposes as a wrapper for the
            Fragmynt Protocol & does not earn any fees through the platform.
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link href="https://www.facebook.com/fragmyntglobal">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c679fd69955_icon-1-social-media-app-x-template.svg"
                    }
                  />
                  <p>Facebook</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/FragmyntGloball">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c9413d69957_icon-2-social-media-app-x-template.svg"
                    }
                  />
                  <p>Twitter</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/@FragmyntGlobal">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c645dd69956_icon-3-social-media-app-x-template.svg"
                    }
                  />
                  <p>Instagram</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/fragmynt/">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9cec58d6993e_icon-4-social-media-app-x-template.svg"
                    }
                  />
                  <p>LinkedIn</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/fragmynt/">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c01d2d69958_icon-5-social-media-app-x-template.svg"
                    }
                  />
                  <p>YouTube</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="tel:(845)516-9263/">
                <a>
                  <img
                    layout="fixed"
                    src={
                      "https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/61f191256d6b9c2326d6993f_icon-6-social-media-app-x-template.svg"
                    }
                  />
                  <p>WhatsApp</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <p className={style.author}>Copyright © Fragmynt, Inc</p>
    </>
  );
}

export default Footer;
