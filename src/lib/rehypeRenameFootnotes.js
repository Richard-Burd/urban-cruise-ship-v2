export default function rehypeRenameFootnotes() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName === "h2" &&
        node.children?.[0]?.type === "text" &&
        node.children?.[0]?.value === "Footnotes"
      ) {
        node.children[0].value = "References";
      }
    });
  };
}

import { visit } from "unist-util-visit";
