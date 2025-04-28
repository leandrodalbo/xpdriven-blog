import { BlogFooterContent } from "../../types/types";
import { FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const footerContent: BlogFooterContent = {
  text: `© ${new Date().getFullYear()} XPDriven Blog. ❤️`,
  socialLinks: [
    { url: "https://x.com/xpdrivenblog", socialIcon: FaX },
    { url: "https://github.com/leandrodalbo", socialIcon: FaGithub },
  ],
};
