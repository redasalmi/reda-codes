import { Section } from '~/components';

import redaPic from '~/assets/images/reda.webp';

export default function About() {
	return (
		<Section
			id="about"
			title="About Me"
			titleClassName="text-left"
			className="bg-white py-5 dark:bg-bg-section-dark-gray md:py-10 lg:py-[60px]"
		>
			<div className="flex flex-col gap-5 md:flex-row md:items-center lg:gap-10">
				<div className="text-justify md:flex-1 lg:text-[1.175rem] xl:text-xl">
					<p>
						My first encounter with programming was in 2014 when I did the
						&quot;Python for Everybody&quot; course on Coursera, this is what
						got me into the road of the self taugh developer that I am today,
						shortly after I switched to web development with Javascript, I was
						mostly using platforms like Coursera, Udemy and Youtube for
						learning. By the end of 2019 I decided to go serious and seek a full
						time job as a web developer and got it (while dumping electrical
						engineering in which I hold a master&apos;s degree), since then I
						became a full time web developer. My interests are programming and
						gaming.
					</p>
				</div>

				<div className="about-img text-center">
					<img
						src={redaPic}
						loading="lazy"
						alt="reda salmi"
						className="m-auto h-[300px] w-[300px] rounded-full bg-ghost-white shadow shadow-dark-gray dark:bg-bg-section-black dark:shadow-bg-shadow-black md:m-0"
					/>
				</div>
			</div>
		</Section>
	);
}
