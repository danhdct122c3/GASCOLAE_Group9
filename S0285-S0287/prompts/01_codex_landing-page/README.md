# Bộ prompt Codex — Landing page GASCOLAE

Chạy các prompt theo thứ tự từ `00` đến `07`. Mỗi prompt chỉ xử lý một phạm vi để dễ kiểm thử và sửa lỗi.

## Công nghệ bắt buộc

- HTML5 semantic, CSS3 và JavaScript thuần.
- Không React, Tailwind, Bootstrap hoặc framework nếu chưa được yêu cầu.
- Tách `index.html`, `css/styles.css`, `js/main.js`, `assets/images`, `assets/video`.
- Nội dung chỉ lấy từ Assets 00–10 của S0285-S0287.

## Quy tắc nội dung

- Không công khai giá nội bộ.
- Không tạo testimonial, chứng nhận, số dự án hoặc số khách hàng.
- Không cam kết độ chính xác tuyệt đối.
- Không dùng RMSE nghiên cứu như cam kết dịch vụ.
- Phải nói rõ dịch vụ đo sinh khối trên mặt đất AGB.
- Phải nói rõ đầu ra không thay thế báo cáo MRV hoặc thẩm định độc lập.

## Thứ tự kiểm thử

1. Chạy `00_MASTER_BUILD.md` để tạo bản đầu.
2. Dùng `01_CONTENT_GUARDRAILS.md` kiểm tra nội dung.
3. Dùng `02_DESIGN_SYSTEM.md` sửa giao diện.
4. Dùng `03_HTML_STRUCTURE.md`, `04_CSS_RESPONSIVE.md`, `05_JAVASCRIPT_INTERACTIONS.md` để sửa từng lớp.
5. Sau khi có media, chạy `06_MEDIA_INTEGRATION.md`.
6. Cuối cùng chạy `07_QA_DEBUG.md`.

