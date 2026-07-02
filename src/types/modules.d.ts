declare module "react-icons/fa" {
  export const FaGithub: any;
  export const FaLinkedin: any;
}

declare module "react-icons/fa6" {
  export const FaMicrosoft: any;
}

declare module "react-icons/si" {
  export const SiLeetcode: any;
  export const SiCodechef: any;
}

declare module "react-icons/md" {
  export const MdEmail: any;
}

declare module "react-type-animation" {
  export const TypeAnimation: any;
}

declare module "@tailwindcss/vite" {
  import type { PluginOption } from "vite";
  const tailwindcss: () => PluginOption;
  export default tailwindcss;
}
