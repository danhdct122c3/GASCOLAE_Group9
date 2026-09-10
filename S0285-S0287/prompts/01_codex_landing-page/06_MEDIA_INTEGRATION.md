# Prompt 06 — Tích hợp ảnh và video

Tích hợp bộ media đã được duyệt vào landing page, không tự tạo lại asset.

Hero dùng WebM trước, MP4 fallback và poster WebP/AVIF. Cung cấp `width`, `height`, `srcset`, `sizes`; lazy-load ảnh dưới màn hình đầu; không lazy-load poster/ảnh LCP. Giữ vùng trái hero yên để đọc headline, subject nằm bên phải. Không để overlay point cloud làm giảm tương phản chữ.

Tối ưu tên file, dung lượng và cache-friendly paths. Đảm bảo trang vẫn tốt khi video không tải, JavaScript tắt hoặc mạng chậm. Báo asset thiếu, sai tỷ lệ hoặc không phù hợp nội dung; không dùng placeholder giả làm bản cuối.

