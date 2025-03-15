import { BlogHeaderContent } from "../types";
import { FaGithub, FaSyncAlt, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const headerContent: BlogHeaderContent = {
  blogName: "XPDriven Blog",
  blogIcon: FaSyncAlt,
  socialLinks: [
    { url: "https://www.youtube.com/@xpdrivenblog", socialIcon: FaYoutube },
    { url: "https://x.com/xpdrivenblog", socialIcon: FaX },
    { url: "https://github.com/leandrodalbo", socialIcon: FaGithub },
  ],
};
