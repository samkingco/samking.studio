import Link from "next/link";
import { Layout } from "../components/Layout";

export default function WorkingTogether() {
  return (
    <Layout>
      <p>
        So you want to join forces and make something together? I’ve put
        together a little guide on getting the most out of our working
        relationship. It goes through a little bit about me, how I typically
        like to work and communicate, billing options, and where I’ve had the
        most success so far.
      </p>

      <section className="tldr">
        <h3 className="mono small">TLDR;</h3>
        <ul>
          <li>
            <p>
              I have a preference for written &amp; asynchronous communication.
            </p>
          </li>
          <li>
            <p>
              Straightforward communication styles are good. We can still be
              friendly, I’m just autistic and take things very literally!
            </p>
          </li>
          <li>
            <p>I can be online between 12-9pm (UK timezone).</p>
          </li>
          <li>
            <p>Preference for meetings between 12-2pm and 6-8pm.</p>
          </li>
          <li>
            <p>
              I’m typically available 2-4 days a week, but the days may vary.
            </p>
          </li>
          <li>
            <p>Different billing options based on your project needs.</p>
          </li>
          <li>
            <p>
              You own the deliverables throughout the project, and I can assist
              with ongoing maintenance if it’s needed.
            </p>
          </li>
        </ul>
      </section>

      <h3 className="mono small">a little work history</h3>
      <p>
        I’ve been doing some form of design and engineering now for the last 10
        years or so. I like to think of myself more as a generalist with a
        couple of special interests. Historically I’ve worked as a product
        designer, but I’ve always written code both in and outside of work. This
        has allowed me to “speak both languages”. If I’m doing design work, I’m
        very comfortable working with an engineering team to make the designs a
        reality, and if I’m doing engineering work, I can usually help designers
        know what’s needed, what states we need to think about etc.
      </p>
      <p>
        Right now I’m having the most fun building websites with a focus on
        frontend and web3. I love writing smart contracts in the Ethereum space
        and I’m learning a lot more about backend e.g. simple database setups,
        enough to be dangerous. I’m in my fullstack engineer villain arc at the
        moment!
      </p>

      <h3 className="mono small">a little about me</h3>
      <p>
        I recently discovered I’m autistic (if you’re interested,{" "}
        <a className="underline" href="https://samking.blog/self-discovery">
          I wrote about it on my blog
        </a>
        ). At first, it was a very emotional experience, but as I’ve come to
        terms with what that means for me, it’s made me more aware of my work
        habits and how I can feel most comfortable. It’s very easy for me to
        feel burnt out and over stimulated, but I’ve found that I work well in
        short bursts, a bit like 2-3 day sprints. Sustained work intervals can
        make it hard for me to remain focused, and I need ample time to recover.
        This is basically why freelancing has worked well for me so far v.s. the
        standard 9-5 work week.
      </p>
      <p>
        I also have some ADHD tendencies as do most autistic people. This
        means if I find something really interesting, I can get sucked in. This
        sometimes results in working on a personal project for 12 hours without
        even realising I’ve spent that long sat at the computer. I often need my
        partner to nudge me out of it and force me to have dinner at 10pm!
      </p>

      <h3 className="mono small">communication</h3>
      <p>
        I have a preference for written, asynchronous communication, either via
        email or chat like Slack and Discord. I feel a lot of anxiety around
        real-time calls, and find it harder to read social cues. The mental
        processing of written communication is more straightforward for me.
      </p>
      <p>
        Because I speak literally and honestly, I can sometimes come across as
        quite blunt, so I apologise in advance, I promise it’s not you!
      </p>

      <h3 className="mono small">my work week</h3>
      <p>
        My work week at the moment doesn’t necessarily look like the typical 9-5
        work week. Here’s how I’m finding the most success at the moment:
      </p>
      <ul>
        <li>
          <p>
            I usually work from 12-7pm (UK timezone), with deep work between
            2-6pm.
          </p>
        </li>
        <li>
          <p>
            I do all my progress updates and emails later in the evening. If you
            get a message from me late at night, please don’t reply unless
            you’re also online and working. It can usually wait!
          </p>
        </li>
        <li>
          <p>
            I typically spend 2-4 days a week on client projects. I love to have
            my own art practice so I dedicate the rest of the week to that. It
            also helps me prevent burning out.
          </p>
        </li>
        <li>
          <p>
            The actual working days change a lot depending on deadlines, the
            clients I’m working with at the time, and syncing schedules.
          </p>
        </li>
      </ul>

      <h3 className="mono small">project billing options</h3>
      <p>
        I offer three billing options depending on the type of project. We can
        talk about which one is best for you, or if you have another idea you’d
        prefer.
      </p>

      <ul>
        <li>
          <h4 className="mono small">fixed price</h4>
          <p>
            This is my preferred method, and it’s best when the project is more
            on the exploratory side, or if there’s more than about 10 days work.
            We’ll work with regular milestones to make sure we’re still on
            track.
          </p>
        </li>
        <li>
          <h4 className="mono small">day rate</h4>
          <p>
            This is best used when the scope is well defined and it’s a
            relatively small project, think 3-10 days work. Days are billed in 8
            hour blocks.
          </p>
        </li>
        <li>
          <h4 className="mono small">retainer</h4>
          <p>
            We would work together for a set period of time, the minimum being 3
            months, and the retainer would be for X days of my time each month.
            Overages can be flexible and offset in future months. It should be
            flexible and fair for you!
          </p>
        </li>
      </ul>

      <h3 className="mono small">post project</h3>
      <p>
        I prefer for you to own the deliverables outright, and I don’t offer any
        hosting of code or designs. It just allows you more control once the
        project is over, for example if you need to work with someone else, you
        don’t have to ask me for access etc. If you don’t have your own GitHub,
        Vercel, or Figma accounts, I’m more than happy to help you set them up
        before we start working together, and assist with any ongoing
        maintenance once the project is done.
      </p>

      <hr />

      <p>
        If you have any questions, or want to know a bit more about the process,
        then please don’t hesitate to{" "}
        <Link href="/contact">
          <a className="underline">get in touch</a>
        </Link>
        .
      </p>
      <p>
        Thank you for taking the time to read this!
        <br />
        Sam
      </p>
    </Layout>
  );
}
