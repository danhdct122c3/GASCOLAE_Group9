# Prompt 00 — Xây landing page hoàn chỉnh

Bạn là senior frontend developer kiêm UI/UX designer. Hãy xây landing page tiếng Việt cho dịch vụ GASCOLAE S0285-S0287: “Đánh giá và lập bản đồ hấp thụ carbon trong sinh khối rừng”.

Đọc toàn bộ tài liệu dự án trước khi viết code. Ưu tiên Asset 09 cho nội dung section, Asset 08 và 10 cho guardrail/AI Agent, Asset 01–02 cho sự thật dịch vụ, Asset 04 cho quy trình. Không đưa dữ liệu Restricted/Internal từ Asset 07 hoặc khung đơn giá lên trang.

Tham khảo cấu trúc và độ sáng của Wix Hiabove `wh-1154`, nhưng chuyển định vị từ bán drone sang dịch vụ đo đạc carbon rừng có kiểm chứng. Dùng HTML, CSS, JavaScript thuần; không dùng framework.

Tạo cấu trúc:

```text
index.html
css/styles.css
js/main.js
assets/images/
assets/video/
```

Section theo thứ tự: header; hero; customer problems; service overview; LiDAR + ground plot methodology; technology/data layers; five-step process; three service levels; deliverables; scope and limitations; use cases; FAQ; AI assistant; consultation form; footer.

Màu: `#12735A`, `#12382F`, `#F2FAF7`, `#E4F4EE`, `#287A96`, `#9CF06A`, `#64D8C1`, `#36534B`, `#FFFFFF`. Font: Be Vietnam Pro; IBM Plex Mono cho nhãn kỹ thuật.

Yêu cầu: semantic HTML; mobile first; keyboard accessible; focus rõ; FAQ accessible; menu mobile; reduced motion; ảnh WebP/AVIF có fallback; video hero muted, playsInline, poster fallback; không để chữ quan trọng trong ảnh. Sau khi xây xong, chạy local preview, kiểm tra desktop/tablet/mobile và sửa lỗi trước khi báo hoàn tất.

