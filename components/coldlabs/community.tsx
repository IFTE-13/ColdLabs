
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandDiscordFilled } from "@tabler/icons-react";

export const Community = () => {
  return (
    <section id="community">
      <div className="container mx-auto py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <IconBrandDiscordFilled className="size-20"/>
                <div>
                  Ready to join this
                  <span className="text-transparent pl-2 bg-gradient-to-t from-[#0ea5e9] to-[#000000] dark:to-[#ffffff] bg-clip-text">
                    Community?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join our vibrant Discord community! Connect, share, and grow with
              like-minded enthusiasts.
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://discord.com/" target="_blank">
                  Join Discord
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};