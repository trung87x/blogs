npm install react@latest react-dom@latest next@latest

<!-- // package.json
  "scripts": {
    "dev": "next dev"
  },
-->

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

npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

pnpm i

pnpm dev
