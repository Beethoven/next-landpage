import { NextSeo, ArticleJsonLd } from "next-seo";

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld
export default function Seo() {
  return (
    <>
      <ArticleJsonLd
        url="https://example.com/article"
        title="Article headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName="Jane Blogs"
        publisherName="Mary Blogs"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
      />
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        canonical="https://www.canonicalurl.ie/"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://www.test.ie/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://www.test.ie/touch-icon-ipad.jpg",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: false,
          maxSnippet: -1,
          maxImagePreview: "large",
          maxVideoPreview: -1,
        }}
      />
    </>
  );
}
