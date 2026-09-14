import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@esuyawkall",
    icon: Icons.gitHub,
    link: "https://github.com/esuyawkall",
  },
  {
    name: "LinkedIn",
    username: "Esuyawkal Bereda",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/esuyawkal-bereda",
  },
  {
    name: "Gmail",
    username: "esuyawkal",
    icon: Icons.gmail,
    link: "mailto:esuyawkal07@gmail.com",
  },
];
