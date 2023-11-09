
import SocialIcons from "@/components/SocialIcons";

const getUrl = (path) => `https://beeorchidpress.com${path}`;

const SocialShare = ({ title, path }) => {
  const url = getUrl(path);
  const subject = `${title} - Bee Orchid Press`;

  return (
    <div className="flex items-center space-x-3 p-4">
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons
          type={"linkedin"}
          className="h-5 w-5 text-gray-40 duration-200 hover:text-gray-50"
        />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?&u=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons
          type={"facebook"}
          className="h-5 w-5 text-gray-40 duration-200 hover:text-gray-50"
        />
      </a>
      <a
        href={`https://twitter.com/share?text=${subject}&url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons
          type={"twitter"}
          className="h-5 w-5 text-gray-40 duration-200 hover:text-gray-50"
        />
      </a>
    </div>
  );
};

export default SocialShare;
