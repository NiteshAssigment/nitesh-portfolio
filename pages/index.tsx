import Layout from "../components/Layout";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home({ currentYear }: { currentYear: number }) {
  return (
    <Layout title="Nitesh Bisht | Software Engineer Portfolio">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <motion.header
          variants={fadeInUp}
          className="text-center space-y-6 py-12"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-600 tracking-tight">
            Nitesh Bisht
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            Software Engineer & Web Developer
          </p>
          <p className="text-sm text-gray-500">📍 Haldwani, Uttarakhand</p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <p>
              📞{" "}
              <a
                href="tel:+916396902252"
                className="text-blue-500 hover:underline"
              >
                6396902252
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:bnitesh400@gmail.com"
                className="text-blue-500 hover:underline"
              >
                bnitesh400@gmail.com
              </a>
            </p>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <a
              href="http://www.linkedin.com/in/nitesh-bisht-866a33161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaFileDownload size={16} /> Download Resume
            </a>
          </div>
        </motion.header>

        {/* Summary */}
        <motion.section
          variants={fadeInUp}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I&rsquo;m a passionate Software Engineer with over 4 years of
            experience building scalable, user-friendly web applications.
            Skilled in modern JavaScript frameworks like React and Node.js, I
            thrive in solving complex problems and collaborating in Agile teams.
            My goal is to create impactful software that enhances user
            experiences.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                company: "Ducktale IT",
                period: "Feb 2025 - Apr 2025",
                title: "Software Engineer",
                items: [
                  "Integrated Job Diva APIs for seamless data exchange and automation.",
                  "Implemented Stripe Payment Gateway for secure transactions.",
                  "Developed RESTful APIs for scalable backend solutions.",
                  "Utilized Supabase for real-time database and authentication.",
                ],
              },
              {
                company: "Intelligaia",
                period: "Mar 2021 - Jan 2025",
                title: "Software Engineer",
                items: [
                  "Built responsive applications using React.js, TypeScript, and Tailwind CSS.",
                  "Developed backend services with Node.js, Express, and GraphQL APIs.",
                  "Managed databases with MongoDB, MySQL, and ORMs like Sequelize.",
                  "Ensured code quality with Jest, ESLint, and SOLID principles.",
                  "Led Agile sprints using JIRA, improving team efficiency.",
                ],
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-gray-800">
                  {exp.title} — {exp.company}{" "}
                  <span className="text-sm text-gray-500">({exp.period})</span>
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  {exp.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeInUp}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Education
          </h2>
          <p className="text-gray-700 font-medium">
            Bachelor of Technology in Computer Science
          </p>
          <p className="text-gray-600">
            Graphic Era Hill University, Dehradun (2015 - 2019)
          </p>
        </motion.section>

        {/* Certifications */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "React - The Complete Guide",
                issuer: "Udemy",
                year: "2022",
              },
              {
                title: "Node.js, Express & MongoDB",
                issuer: "Coursera",
                year: "2023",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-5"
              >
                <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} ({cert.year})
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "JavaScript",
              "React JS",
              "Node JS",
              "TypeScript",
              "Vue JS",
              "Next JS",
              "Express JS",
              "GraphQL",
              "MongoDB",
              "MySQL",
              "Supabase",
              "Stripe",
              "Docker",
              "Jest",
              "Firebase",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "Git",
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={fadeInUp}
                className="bg-blue-100 text-blue-700 rounded-full px-3 py-1.5 text-center text-sm font-medium shadow-sm hover:bg-blue-200 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section variants={fadeInUp} className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Featured Projects
          </h2>
          {[
            {
              title: "Ecommerce Platform",
              tech: "JavaScript, React JS, Express JS, MongoDB, Stripe, Sequelize",
              description:
                "A full-featured e-commerce platform built with the MERN stack and microservices architecture. Includes authentication, product management, cart, order processing, and Stripe payments. Dockerized with Redis and API Gateway.",
              link: "https://github.com/niteshbisht/ecommerce",
            },
            {
              title: "Project Management Tool",
              tech: "JavaScript, React JS, Express JS, MySQL, MongoDB, Stripe",
              description:
                "A scalable tool for task management and team collaboration, built with the MERN stack. Features real-time updates and progress tracking.",
              link: "https://github.com/niteshbisht/project-management",
            },
            {
              title: "AI Recruiter Application",
              tech: "React.js, Node.js, Express.js, MongoDB, Firebase, OpenAI API",
              description:
                "An AI-powered recruitment platform with automated candidate screening, job matching, and real-time chat. Uses Firebase for authentication and OpenAI for intelligent features.",
              link: "https://github.com/niteshbisht/ai-recruiter",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Tech: {project.tech}</p>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={fadeInUp}
          className="text-center py-12 bg-blue-50 rounded-xl"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Let&rsquo;s Connect!
          </h2>
          <p className="text-gray-700 mb-6">
            Interested in collaborating or discussing a project? Feel free to
            reach out.
          </p>
         Contact Me
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={fadeInUp}
          className="text-sm text-center text-gray-500 pt-10 border-t mt-12"
        >
          © {currentYear} Nitesh Bisht. All rights reserved.
        </motion.footer>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      currentYear: new Date().getFullYear(),
    },
  };
}
