//@ts-expect-error ts not detecting the path
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//@ts-expect-error ts not detecting the path
import { Separator } from '@/components/ui/separator';
//@ts-expect-error ts not detecting the path
import { Button } from '@/components/ui/button';
import AWS_CCP_Logo from '/aws-certified-cloud-practitioner.png';
import MyPIC from '/mypic.png';
import { Linkedin } from 'lucide-react';
import DetailsGrid from './DetailsGrid';
import GithubIcon from './GithubIcon';
import * as data from './experience.json';

export default function MainBody() {
  return (
    <div className="main-body flex flex-col items-center gap-10 ps-5 pe-5 max-w-screen-md ms-auto me-auto ">
      <div className="quick-glance flex flex-col items-center space-y-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src={MyPIC} />
          <AvatarFallback>JTM</AvatarFallback>
        </Avatar>
        <div className="name flex flex-row align-center gap-3">
          <h3 className="name text-3xl font-bold leading-none">
            Jose T Mundackal
          </h3>
          <Button variant="ghost" className="h-8 w-8" size="icon">
            <a
              href="https://www.linkedin.com/in/jose-t-mundackal/"
              target="blank"
            >
              <Linkedin className="p-1 h-full w-full" />
            </a>
          </Button>
          <Button variant="ghost" className="h-8 w-8" size="icon">
            <a href="https://github.com/josetm12" target="blank">
              <GithubIcon />
            </a>
          </Button>
        </div>
        <div className="tags flex h-5 items-center space-x-4 text-sm">
          <div>Developer</div>
          <Separator className="bg-primary" orientation="vertical" />
          <div>Foodie</div>
          <Separator className="bg-primary" orientation="vertical" />
          <div>Potato PC Gamer</div>
        </div>
      </div>
      <div className="about-me w-full flex-col self-start">
        <h3 className="name underline text-xl font-bold leading-none italic">
          About me
        </h3>
        <p>
          I am a software engineer with over 7 years of experience, specializing
          in JavaScript/TypeScript and AWS cloud. I thrive in agile team
          environments and am always eager to learn new technologies. When you
          dont see me coding, you can find me searching for the elusive best
          cinnamon scrolls or catching up with friends over a game of valorant.
        </p>
      </div>
      <div className="skills w-full flex-col self-start">
        <h3 className="name underline text-xl font-bold leading-none italic">
          Experience
        </h3>
        <DetailsGrid items={data.experience} />
      </div>
      <div className="skills w-full flex-col self-start">
        <h3 className="name underline text-xl font-bold leading-none italic">
          Education & Certification
        </h3>
        <DetailsGrid items={data.education} />
        <div className="certicates mt-5">
          <div className="certificate flex flex-row">
            <img src={AWS_CCP_Logo} alt="AWS_CCP_LOGO" />
            <div className="certificate-details flex flex-col justify-center font-light">
              <div className="certificate-title text-sm font-normal">
                AWS Cloud Practitioner
              </div>
              <div className="certificate-issue-date text-sm ">
                {data.certifications[0].issuedDate}
              </div>
              <div className="certificate-link">
                <a
                  href="https://www.credly.com/badges/7eb04572-b561-47fd-a6e4-8d948e3b47a2/public_url"
                  target="blank"
                >
                  Verify here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
