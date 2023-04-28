import type {GetServerSideProps, GetStaticProps} from "next"
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import {fetchSkills} from "../utils/fetchSkills";
import {fetchSocials} from "../utils/fetchSocials";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchProjects} from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  //const { pageInfo, experiences, skills, projects, socials } =  fetchData();

  
  return(
    
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">

     <Header socials={socials} />

      {/* {Hero} */}
    <section  id="hero" className="snap-start">
      <Hero pageInfo={pageInfo} />
    </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* {exp} */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* {skills} */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      
      {/* (project) */}
      <section id="project" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* {contact} */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>



      {/* <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://www.gravatar.com/avatar/726d3d4e50040f4402bdee7f3679857c?s=256&d=identicon&r=PG&f=1"
              alt="top arrow"
            />
          </div>
        </footer>

      </Link> */}
    </div>
  )
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
}

/* export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,  
    },

  }

} */

// Define an async function to fetch data
async function fetchData() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();

  return {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  };
}

// Call the fetchData function in your page or component
/* export default function MyPage(props) {
  const { pageInfo, experiences, skills, projects, socials } = fetchData();
 */