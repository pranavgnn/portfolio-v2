import SectionLayout from "../layouts/OtherLayout";

const About = () => {
  return (
    <SectionLayout id="about" title="about me" alternate>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <img
          src="/headshot.jpeg"
          alt="Pranav's headshot picture"
          className="h-full object-cover rounded-md hover:shadow-md hover:shadow-branding/15 duration-200 hover:scale-101 hover:-translate-y-1"
        />
        <div className="space-y-4 md:col-span-2 lg:col-span-3">
          <p>
            Currently a 2nd year BTech student at Manipal Institute of
            Technology, pursuing an integrated masters in entrepreneurship. I'm
            based in Manipal, India, where I'm constantly exploring the
            intersection of technology and business.
          </p>
          <p>
            As a fullstack developer, I enjoy creating seamless user experiences
            with responsive frontend designs and robust backend systems. I'm
            also pretty good with automation and web scraping, taking the boring
            work out of everyday tasks.
          </p>
          <p>
            When I'm not coding, you can find me brainstorming startup ideas or
            learning something new - I'm always up for a challenge!
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
