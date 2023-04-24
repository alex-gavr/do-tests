import React, { ReactNode } from 'react';

interface Tag {
  tag: string;
  component: React.ComponentType<any>;
}

export function formatRichText(text: string, tags: Tag[]): ReactNode {
  const regex = /<(\w+)>((?:.|\n)*?)<\/\1>/g;
  let lastIndex = 0;
  const nodes: ReactNode[] = [];

  let match;
  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, tag, content] = match;
    const index = match.index;
    const textBefore = text.substring(lastIndex, index);
    lastIndex = index + fullMatch.length;

    // Add text before tag
    if (textBefore) {
      nodes.push(textBefore);
    }

    // Add tag component
    const tagComponent = tags.find((t) => t.tag === tag)?.component;
    if (tagComponent) {
      const key = `tag-${nodes.length}`; // add a unique key
      nodes.push(React.createElement(tagComponent, { key }, content));
    } else {
      nodes.push(content);
    }
  }

  // Add remaining text
  const remainingText = text.substring(lastIndex);
  if (remainingText) {
    nodes.push(remainingText);
  }

  return nodes;
}

export default formatRichText;