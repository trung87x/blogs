// ======================================================================
// INTRODUCTION TO CLIENT-SIDE FRAMEWORKS – GIỚI THIỆU VỀ FRAMEWORK JS
// ======================================================================

/* === 1. MỤC TIÊU BÀI HỌC ===
- Hiểu vì sao framework ra đời và giải quyết vấn đề gì.
- Biết sự khác nhau giữa thư viện (library) và framework.
- Hiểu khi nào nên và không nên dùng framework.
- Gợi ý cách chọn framework phù hợp với nhu cầu.
*/

/* === 2. LỊCH SỬ NGẮN GỌN ===
- JavaScript ra đời năm 1996 → giúp web tương tác.
- Dev tạo thư viện dùng lại (library) → phát triển thành framework.
- Framework đưa ra "ý kiến mạnh" (opinionated) về cách viết ứng dụng → giúp dự án dễ duy trì & mở rộng.
*/

/* === 3. CÁC FRAMEWORK PHỔ BIẾN (BIG FOUR) ===
1. Ember (2011): ổn định, cấu trúc rõ ràng.
2. Angular (2016): Google phát triển, TypeScript, HTML template.
3. Vue (2014): dễ học, tăng trưởng nhanh, dùng HTML + JS thuần.
4. React (2013): thư viện UI nhưng được dùng như framework, dùng JSX.
*/

/* === 4. TẠI SAO FRAMEWORK RA ĐỜI? ===
- Để xử lý "state" và đồng bộ giao diện dễ dàng hơn.
- Viết trực tiếp với DOM (vanilla JS) rất dài dòng, dễ sai sót.
→ Framework giúp viết UI gọn hơn, rõ hơn, dễ bảo trì hơn.
*/

/* === 5. SO SÁNH VANILLA JS VS VUE EXAMPLE === */

// JS thuần: tạo <li>, <span>, gán id, text, appendChild, clear DOM...

// Vue:
const vueExample = (
  <ul>
    {/* Giả định tasks là một mảng dữ liệu */}
    {tasks.map((task) => (
      <li key={task.id}>
        <span>{task.name}</span>
        <button type="button">Delete</button>
      </li>
    ))}
  </ul>
);

// → rõ ràng, ngắn gọn, dễ đọc hơn nhiều!

/* === 6. LỢI ÍCH KHÁC MÀ FRAMEWORK CUNG CẤP ===
- Tooling: hỗ trợ test, lint, devtool...
- Component hóa UI: tách giao diện thành khối tái sử dụng.
- Routing: tạo ứng dụng SPA với router client-side.
*/

/* === 7. CÂN NHẮC KHI DÙNG FRAMEWORK ===
- Không phải lúc nào cũng cần: dự án nhỏ có thể dùng JS thuần.
- Yêu cầu học framework → cần thời gian làm quen.
- Abstraction có thể gây khó khăn cho tối ưu hiệu năng hoặc truy cập (accessibility).
- Cần chú ý về kích thước file, SEO, và hỗ trợ người dùng không có JS.
*/

/* === 8. ACCESSIBILITY TRONG FRAMEWORK ===
- Routing phía client phá vỡ hành vi mặc định của trình duyệt (focus, page title, v.v.)
- Framework cần thêm code để "mô phỏng lại" behavior gốc → không framework nào làm hoàn hảo.
- Dev cần chủ động xử lý a11y (accessibility) từ đầu dự án.
*/

/* === 9. CÁCH CHỌN FRAMEWORK PHÙ HỢP ===
Cân nhắc các yếu tố:
- Trình duyệt hỗ trợ (Browser Support)
- DSL được dùng (JSX, TypeScript, Handlebars...)
- Cộng đồng (Community, tài liệu, plugin...)
- Dễ học, phù hợp với team & mục tiêu dự án

// Bảng DSL tóm tắt:
| Framework | Preferred DSL     | Supported DSLs           |
|-----------|--------------------|---------------------------|
| Angular   | TypeScript         | HTML-based, TypeScript    |
| React     | JSX                | JSX, TypeScript           |
| Vue       | HTML-based         | HTML-based, JSX, Pug      |
| Ember     | Handlebars         | Handlebars, TypeScript    |
*/

/* === 10. CÁC GIẢI PHÁP THAY THẾ FRAMEWORK ===
1. CMS (WordPress, Drupal...): dành cho nội dung tĩnh, không cần JS nhiều.
2. SSR (Server-side rendering): tăng tốc load, SEO tốt hơn (Next.js, Nuxt, Angular Universal...).
3. Static site generator (SSG): tạo web tĩnh nhanh, bảo mật cao (Gatsby, Eleventy, Astro...).
*/

/* === 11. TỔNG KẾT ===
- Framework giúp phát triển app JS hiện đại dễ hơn, nhanh hơn.
- Nhưng không nên dùng framework chỉ vì “có sẵn”.
- Cần đánh giá kỹ yêu cầu dự án, hiệu suất, khả năng bảo trì và nhóm dev.
→ Ở phần tiếp theo, chúng ta sẽ tìm hiểu sâu hơn về các tính năng cụ thể mà framework cung cấp.
*/
