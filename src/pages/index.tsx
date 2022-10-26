export default function Home() {
  return (
    <main className="wrapper">
      <h1>
        Sam King
        <br />
        Studio—
      </h1>
      <h3>solo software engineering and design studio with a focus on web3</h3>
      <p className="m0">
        <a href="mailto:sam@samking.studio">sam@samking.studio</a>
      </p>
      <hr />

      <div className="blurb">
        <p>
          I’m looking to work with people, not for them. I want to help bring
          people’s ideas to life. I want to create work that’s accessible. I
          want to create work for public good. I want to explore new mediums and
          technology, while also being part of positive change.
        </p>

        <section className="intro-lists">
          <div>
            <h3>values</h3>
            <ul>
              <li>Honesty</li>
              <li>Authenticity</li>
              <li>Curiosity</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h3>interests</h3>
            <ul>
              <li>Art &amp; Photography</li>
              <li>Public goods</li>
              <li>Healthcare</li>
              <li>Decentralization</li>
            </ul>
          </div>

          <div>
            <h3>services</h3>
            <ul>
              <li>Full-stack software</li>
              <li>Smart contracts</li>
              <li>Product Design</li>
              <li>web3 Consulting</li>
            </ul>
          </div>
        </section>
      </div>

      <h3>recently</h3>

      <ol className="projects">
        <li>
          <span className="title">
            <a href="https://drops.samking.studio">Drops</a>
          </span>
          <p className="description">Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://ice64.com">ICE64</a>
          </span>
          <p className="description">Photography, Frontend, Smart contracts</p>
        </li>

        <li>
          <span className="title">
            <a href="https://roots.samking.photo">Roots</a>
          </span>
          <p className="description">Photography, Frontend, Smart contracts</p>
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

      <footer>
        <p className="subdued small">
          Sam King Studio Ltd. <br />7 Bell Yard, London, WC2A 2JR
        </p>
      </footer>
    </main>
  );
}
