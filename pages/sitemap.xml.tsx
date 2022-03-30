import { GetServerSideProps } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'
import { createGzip } from 'zlib'

const Sitemap = () => {
  return (
    <div>
      Should not be navigated via Next Link. Use a standard {`<a>`} tag!
    </div>
  )
}

export default Sitemap

let sitemap: Buffer | null = null

const addUrls = async (smStream: SitemapStream) => {
  const allPages = [

    '_sites/0BdTvZabQ6TGKW6WgtpSa0FNTQi2',
  ]

  allPages.map((page) => {
    smStream.write({ url: `/${page}`, changefreq: 'weekly', priority: 0.7 })
  })
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (!req || !res) {
    return {
      props: {},
    }
  }
  res.setHeader("Content-Type", "application/xml")
  res.setHeader("Content-Encoding", "gzip")

  // If our sitemap is cached, we write the cached sitemap, no query to the CMS.
  if (sitemap) {
    res.write(sitemap)
    res.end()
    return {
      props: {},
    }
  }
  const smStream = new SitemapStream({ hostname: `https://${req.headers.host}/` })
  const pipeline = smStream.pipe(createGzip())

  try {
    smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 })
    await addUrls(smStream)
    smStream.end()

    const resp = await streamToPromise(pipeline);

    sitemap = resp;

    res.write(resp);
    res.end();
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.write("Could not generate sitemap.");
    res.end();
  }

  return {
    props: {},
  }
}
