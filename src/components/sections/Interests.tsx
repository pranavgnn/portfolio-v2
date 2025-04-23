import { motion } from "motion/react";

import SectionLayout from "../SectionLayout";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const InterestCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.01, y: -4 }}>
      <Card className="p-4 border-border border rounded-md w-full h-full hover:shadow-md hover:shadow-branding/15">
        <CardHeader>
          <CardTitle className="font-normal font-poppins text-lg">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

const Interests = () => {
  return (
    <SectionLayout id="interests" title="my interests" alternate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InterestCard
          title="Web Development"
          description="Building interactive and responsive web applications with modern frameworks and design systems."
        />
        <InterestCard
          title="Automation"
          description="Creating scripts and tools that automate repetitive tasks to improve productivity."
        />
        <InterestCard
          title="Entrepreneurship"
          description="Exploring innovative business ideas and learning about startup ecosystems."
        />
        <InterestCard
          title="Data Analysis"
          description="Extracting meaningful insights from data to solve real-world problems."
        />

        <InterestCard
          title="Cybersecurity"
          description="Understanding the principles of securing systems and networks against cyber threats."
        />

        <InterestCard
          title="Motorcycling"
          description="Exploring the open road and enjoying the thrill of riding."
        />
      </div>
    </SectionLayout>
  );
};

export default Interests;
