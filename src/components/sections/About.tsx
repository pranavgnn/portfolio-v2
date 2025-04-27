import SectionLayout from "../layouts/OtherLayout";
import Highlight from "../Highlight";

const About = () => {
  return (
    <SectionLayout id="about" title="about me" alternate>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <img
          src="/headshot.jpeg"
          alt="Pranav's headshot picture"
          className="h-full object-cover rounded-md hover:shadow-md hover:shadow-branding/15 duration-200 hover:scale-101 hover:-translate-y-1"
        />
        <div className="space-y-4 md:col-span-2 lg:col-span-3 text-primary/80">
          <p>
            At <Highlight color="red">19 years old</Highlight>, I'm diving deep
            into tech and business at{" "}
            <Highlight color="blue">Manipal Institute of Technology</Highlight>,
            where I'm pursuing a dual passion:{" "}
            <Highlight color="yellow">
              BTech in Computer Science & Financial Technology
            </Highlight>{" "}
            alongside an{" "}
            <Highlight color="yellow">
              Integrated Masters in Entrepreneurship
            </Highlight>
            . You call it ambitious, I call it the perfect challenge.
          </p>
          <p>
            By day, I'm a{" "}
            <Highlight color="teal">student absorbing everything</Highlight> the
            tech world has to offer. By night, I transform into a{" "}
            <Highlight color="green">fullstack developer</Highlight> exploring{" "}
            <Highlight color="green">cybersecurity</Highlight>, crafting{" "}
            <Highlight color="green">automation solutions</Highlight>, and
            building <Highlight color="green">web scraping</Highlight> tools.
            The intersection of code and business is where my passion truly
            ignites.
          </p>
          <p>
            When I need a break from the digital world, my{" "}
            <Highlight color="pink">motorcycle becomes my escape</Highlight>,
            taking me on{" "}
            <Highlight color="pink">
              highway cruises and road explorations
            </Highlight>{" "}
            around beautiful Manipal. Whether it's{" "}
            <Highlight color="purple">
              developing the next innovative startup
            </Highlight>{" "}
            or{" "}
            <Highlight color="purple">
              discovering new horizons on two wheels
            </Highlight>
            , I'm all about pushing boundaries and embracing what makes life
            extraordinary.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
