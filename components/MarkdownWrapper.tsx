import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import React from 'react';

interface MarkdownWrapperProps {
  text: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const MarkdownWrapper = ({ text }: MarkdownWrapperProps) => {
  return (
    <MDXRemote
      components={{
        a: ({ href, ...props }) => {
          if (!href) return <a {...props}></a>;
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
      {...text}
    />
  );
};
