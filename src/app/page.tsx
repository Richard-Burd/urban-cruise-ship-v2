import Link from "next/link";

export default function HomePage() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Welcome to the MDX Demo</h1>

      <p>This project demonstrates how to:</p>

      <ul>
        <li>
          Render <code>.mdx</code> files using the Next.js App Router
        </li>
        <li>
          Support GitHub-Flavored Markdown (via <code>remark-gfm</code>)
        </li>
        <li>
          Enable footnotes and customize the footnotes heading to say
          &quot;References&quot;
        </li>
        <li>
          Inject React components (like <code>HelloFromReact</code>) directly
          into MDX without importing them inside the MDX file
        </li>
      </ul>

      <p>
        MDX files are stored in <code>src/content/</code>. They are rendered
        dynamically via a catch-all route at <code>/[slug]/page.tsx</code>,
        which reads the file content and passes it to <code>MDXRemote</code>{" "}
        with the appropriate plugins and component bindings.
      </p>

      <p>Click below to view the example MDX page:</p>

      <p>
        <Link href="/article" className="text-blue-600 underline">
          View <code>article.mdx</code>
        </Link>
      </p>

      <hr />

      <p>
        To add more pages, just drop a new <code>.mdx</code> file in{" "}
        <code>src/content/</code> and visit <code>/[filename]</code> in the
        browser.
      </p>
    </main>
  );
}
