npm install -g pnpm

<!--
  Chạy lệnh: npm config get prefix
  Thông thường nó sẽ hiện ra: C:\Users\YourName\AppData\Roaming\npm
  Mở Start Menu, gõ "env" và chọn Edit the system environment variables.
  Nhấn nút Environment Variables.
  Ở mục User variables, tìm dòng Path, chọn nó và nhấn Edit.
  Nhấn New và dán đường dẫn bạn vừa tìm được ở bước 1 vào.
  Nhấn OK ở tất cả các cửa sổ. Khởi động lại Git Bash.
-->

pnpm i next@latest react@latest react-dom@latest

<!-- // package.json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
-->

pnpm i --save-dev eslint eslint-config-next

pnpm i tailwindcss @tailwindcss/postcss postcss

<!-- // postcss.config.mjs
  const config = {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };

  export default config;
-->

<!-- // globals.css
  @import "tailwindcss";
-->

<!-- // Inter font family
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

@theme {
  --font-sans: InterVariable, sans-serif;
  --font-sans--font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
}

<html class="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark">
-->

npm i @headlessui/react @heroicons/react
npm i framer-motion

npm i -D prettier prettier-plugin-tailwindcss
npm i clsx

<!-- // .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx", "cn", "cva"]
}
-->

npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

pnpm i

pnpm dev
