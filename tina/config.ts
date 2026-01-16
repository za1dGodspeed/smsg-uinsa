import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Berita',
        path: 'content/posts', // <-- your folder
        format: 'md',
        fields: [
          { name: 'title', label: 'Judul', type: 'string', required: true, isTitle: true },
          { name: 'date', label: 'Tanggal', type: 'datetime', required: true },
          { name: 'category', label: 'Kategori', type: 'string', options: ['Pengabdian', 'SDM', 'Aspirasi', 'Solidaritas'], required: true },
          { name: 'cover', label: 'Foto Cover', type: 'image', required: true },
          { name: 'body', label: 'Deskripsi', type: 'rich-text', isBody: true },
        ],
      },
    ],
  },
});
