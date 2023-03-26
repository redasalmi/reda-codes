import { Hero, Projects, Skills, About, Contacts } from '~/components';
import { projects, skills, contacts } from '~/constant';

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects projects={projects} />
			<Skills skills={skills} />
			<About />
			<Contacts contacts={contacts} />
		</main>
	);
}
