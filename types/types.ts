import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type APIResponse = {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly rating: { rate: number; count: number };
  readonly image: string;
  readonly longDescription: string;
};

export type Product = Omit<APIResponse, 'longDescription'> & {
  readonly longDescription: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;
