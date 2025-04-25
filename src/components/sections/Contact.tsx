import SectionLayout from "../layouts/OtherLayout";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const ContactLink = ({
  href,
  icon: Icon,
  text,
}: {
  href: string;
  icon: React.FC;
  text?: string;
}) => {
  text =
    text ||
    href
      .replace(/https?:\/\/(www\.)?/, "")
      .replace("mailto:", "")
      .replace(/\/$/, "");

  return (
    <li className="flex items-center gap-2 mb-4 duration-500 hover:translate-x-1 hover:duration-100">
      <Icon />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {text}
      </a>
    </li>
  );
};

const Contact = () => {
  return (
    <SectionLayout id="contact" title="contact me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div className="self-center">
          <ul>
            <ContactLink href="mailto:pranavgnayak@gmail.com" icon={Mail} />
            <ContactLink
              href="https://www.github.com/pranavgnn"
              icon={Github}
            />
            <ContactLink
              href="https://www.linkedin.com/in/pranavgnayak/"
              icon={Linkedin}
            />
            <ContactLink
              href="https://www.instagram.com/pranav.idk"
              icon={Instagram}
            />
          </ul>
        </div>
        <Card className="p-4 border-border border rounded-md">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Hello Pranav! I'd like to talk about..."
              rows={4}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </SectionLayout>
  );
};

export default Contact;
