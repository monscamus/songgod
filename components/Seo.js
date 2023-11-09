import Head from "next/head";

const settings = {
  titleEnding: "Alex Cochran | Author",
  company: "Bee Orchid Pres",
  author: "Lorenza Weinle",
  language: "en",
  themeColor: "#5185FF",
  baseUrl: "https://alex-cochran.com",
};

const defaultMeta = {
  title: "Bee Orchid Press",
  description:
    "The most beautiful and unique books available.",
  image: "/logo.jpg",
};

const Seo = ({
  title,
  description,
  socialTitle,
  socialDescription,
  socialImage,
  noindex = false,
  path = settings?.baseUrl
}) => {

  const finalTitle = `${title || defaultMeta.title} ${settings.titleEnding}`;
  const socialTitleTag = socialTitle ? `${socialTitle} ${settings.titleEnding}` : finalTitle;

  return (
    <>
      <Head>
        <title>{finalTitle}</title>
        <link rel="icon" href="/favicon.png" />

        {/* Search engines */}
        <meta name="title" content={finalTitle} />
        <meta name="description" content={description || defaultMeta.description} />

        {/* Open Graph */}
        <meta property="og:url" content={path} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={socialTitleTag} />
        <meta
          property="og:description"
          content={socialDescription || description || defaultMeta.description}
        />
        <meta property="og:image" content={socialImage || defaultMeta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTitleTag} />
        <meta
          name="twitter:description"
          content={socialDescription || description || defaultMeta.description}
        />
        <meta name="twitter:image" content={socialImage || defaultMeta.image} />

        {/* Technical tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={path} />
        <meta name="theme-color" content={settings.themeColor} />
        <meta name="publisher" content={settings.company} />
        <meta name="copyright" content={settings.company} />
        <meta name="author" content={settings.author || settings.company} />

        {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      </Head>
    </>
  );
};

export default Seo;
