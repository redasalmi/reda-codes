import Section from '~/components/Section';

export default function About() {
  return (
    <Section id="about" className="about" title="About Me">
      <div className="about-me">
        <div className="about-info">
          <p>
            My first encounter with programming was in 2014 when I did the
            &quot;Python for Everybody&quot; course on Coursera, this is what
            got me into the road of the self taugh developer that I am today,
            shortly after I switched to web development with Javascript, I was
            mostly using platforms like Coursera, Udemy and Youtube for
            learning. By the end of 2019 I decided to go serious and seek a full
            time job as a web developer and got it(while dumping electrical
            engineering in which I hold a master&apos;s degree 😅), since then I
            became a full time web developer. My interests are programming 👨‍💻
            and gaming 🕹️.
          </p>
        </div>

        <div className="about-img">
          <img src="images/reda-sahara.webp" alt="reda salmi" />
        </div>
      </div>
    </Section>
  );
}
