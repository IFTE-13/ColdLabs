import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const Team = () => {
    const teamList: TeamProps[] = [
        {
          imageUrl: "/iftekhar.jpg",
          firstName: "Iftekhar",
          lastName: "Mohammed",
          positions: ["Fronted Developer", "Creator Of This Website"],
          socialNetworks: [
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/ifte-13/",
            },
            {
              name: "Github",
              url: "https://github.com/leoMirandaa",
            },
            {
              name: "X",
              url: "https://x.com/leo_mirand4",
            },
          ],
        },
      {
        imageUrl:"/rahat.jpg",
        firstName: "Rahat",
        lastName: "Ahmed",
        positions: ["QA Team Lead"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/",
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa",
          },
        ],
      },
    {
      imageUrl: "/asif.jpg",
      firstName: "Asif",
      lastName: "Rahman",
      positions: ["Django Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
      {
      imageUrl: "/nehal.jpg",
      firstName: "Mohammed",
      lastName: "Iftekharul",
      positions: ["Marketing Coordinator", "Product Marketing Manager"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <IconBrandLinkedin />;
      case "Github":
        return <IconBrandGithub />;
      case "X":
        return <IconBrandTwitter />;
    }
  };

  return (
    <section id="team" className="container mx-auto lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company <span className="text-gradient">Dream</span> Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                {firstName}
                <span className="text-[#eab308] ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};