import SectionLayout from "../SectionLayout";

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

const Contact = () => {
  return (
    <SectionLayout id="contact" title="contact me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div className="self-center">
          <ul>
            <li className="flex items-center gap-2 mb-4">
              <Mail />
              <a
                href="mailto:pranavgnayak@gmail.com"
                className="hover:underline"
              >
                pranavgnayak@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2 mb-4">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/pranavgnayak/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/pranavgnayak
              </a>
            </li>

            <li className="flex items-center gap-2 mb-4">
              <Github />
              <a
                href="https://github.com/pranavgnn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/pranavgnn
              </a>
            </li>

            <li className="flex items-center gap-2 mb-4">
              <Instagram />
              <a
                href="https://www.instagram.com/pranav.idk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                instagram.com/pranav.idk
              </a>
            </li>
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
