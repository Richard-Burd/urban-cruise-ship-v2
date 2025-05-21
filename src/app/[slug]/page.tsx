import path from "path";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRenameFootnotes from "@/lib/rehypeRenameFootnotes";

// official type signature for App Router
export const dynamicParams = true;

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    `${params.slug}.mdx`
  );
  const fileContent = await fs.readFile(filePath, "utf8");

  return (
    <article className="prose mx-auto p-6">
      <MDXRemote
        source={fileContent}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeRenameFootnotes],
          },
        }}
      />
    </article>
  );
}
