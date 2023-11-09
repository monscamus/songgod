import Facebook from "./Facebook";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Instagram from "./Instagram";

const SocialIcon = ({ type, className = "", ...props }) => {
  switch (type) {
    case "facebook":
      return <Facebook className={className} {...props} />;
    case "twitter":
      return <Twitter className={className} {...props} />;
    case "linkedin":
      return <Linkedin className={className} {...props} />;

      case "instagram":
        return <Instagram className={className} {...props} />;
  
    case "github":
      return <Github className={className} {...props} />;
    default:
      return null;
  }
};

export default SocialIcon;
