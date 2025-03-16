import { BlogFooterContent } from "../../types/types";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const footerContent: BlogFooterContent = {
  text: `© ${new Date().getFullYear()} XPDriven Blog. ❤️`,
  socialLinks: [
    { url: "https://www.youtube.com/@xpdrivenblog", socialIcon: FaYoutube },
    { url: "https://x.com/xpdrivenblog", socialIcon: FaX },
    { url: "https://github.com/leandrodalbo", socialIcon: FaGithub },
  ],
};
