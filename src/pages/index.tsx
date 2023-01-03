import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="blurb">
        <p>
          I’m looking to work with people, not for them. I want to help bring
          people’s ideas to life. I want to create work that’s accessible. I
          want to create work for public good. I want to explore new mediums and
          technology, while also being part of positive change.
        </p>

        <section className="intro-lists">
          <div>
            <h3 className="mono small">values</h3>
            <ul className="text-list">
              <li>Honesty</li>
              <li>Authenticity</li>
              <li>Curiosity</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h3 className="mono small">interests</h3>
            <ul className="text-list">
              <li>Art &amp; Photography</li>
              <li>Public goods</li>
              <li>Healthcare</li>
              <li>Decentralization</li>
            </ul>
          </div>

          <div>
            <h3 className="mono small">doing</h3>
            <ul className="text-list">
              <li>Fullstack software</li>
              <li>Smart contracts</li>
              <li>Product design</li>
              <li>web3 consulting</li>
            </ul>
          </div>
        </section>
      </div>

      <h3 className="mono small">personal</h3>
      <ol className="projects">
        <li>
          <span className="title">
            <a href="https://roots.samking.photo">Roots</a>
          </span>
          <p className="description">Photography, Fullstack, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://ice64.com">ICE64</a>
          </span>
          <p className="description">Photography, Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://drops.samking.studio">Drops</a>
          </span>
          <p className="description">Photography, Frontend, Smart contracts</p>
        </li>
      </ol>

      <h3 className="mono small">with others</h3>
      <ol className="projects">
        <li>
          <span className="title">
            <a href="https://drivers.fount.gallery">
              Fount Gallery: Drivers by Everfresh
            </a>
          </span>
          <p className="description">Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://thegarden.fount.gallery">
              Fount Gallery: The Garden
            </a>
          </span>
          <p className="description">Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://beholdtheocean.com">Behold The Ocean</a>
          </span>
          <p className="description">Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://legendmaps.io">Legend Maps</a>
          </span>
          <p className="description">Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://voidrunners.io">Void Runners</a>
          </span>
          <p className="description">Frontend</p>
        </li>

        <li>
          <span className="title">
            <a href="https://samking.design">Pre-Studio work</a>
          </span>
          <p className="description">Product Design</p>
        </li>
      </ol>
    </Layout>
  );
}
