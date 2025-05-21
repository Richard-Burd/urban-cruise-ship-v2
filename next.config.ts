import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm, { singleTilde: false }]],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMdx(nextConfig);
