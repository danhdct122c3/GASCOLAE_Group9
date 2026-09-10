# Landing page S0285–S0287 — bàn giao

Ngày kiểm tra: 10/09/2026. Thực hiện theo `prompts/01_codex_landing-page/00_MASTER_BUILD.md`.

## Chạy bản xem trước

Từ thư mục gốc repository:

```powershell
python S0285-S0287/src/tests/preview.py
```

Mở http://127.0.0.1:8000. Cổng khác: thêm `--port 8080`.

Trang sử dụng HTML, CSS và JavaScript thuần; không cần npm hoặc framework. Entry point: `S0285-S0287/src/index.html`. CSS: `src/css/styles.css`; tương tác: `src/js/main.js`.

Preview chỉ phục vụ `index.html`, `css/`, `js/`, `assets/images/`, `assets/video/`, `assets/logo/`. Các thư mục nguồn, tài liệu và bảng giá trả 404; không liệt kê thư mục media.

Khi đóng gói lên hosting, chỉ sao chép các file public nói trên. Không upload toàn bộ thư mục dự án: `assets/data`, `assets/SOURCE`, `docs`, `prompts` và `tests` không thuộc bản public. Chưa triển khai lên hosting trong công việc này.

## Nội dung và nguồn

13 section trong main, cộng header và footer, đúng thứ tự master prompt. Nội dung được biên tập từ Asset 09 và đối chiếu với Knowledge Base 01, Profile 02; các giới hạn trợ lý theo 08 và 10. Quy trình tổng quan dùng Asset 09 mục 7 và Proposal 05 mục 7 vì không có Asset 04/SOP trong workspace.

| Vị trí | Điều chỉnh guardrail |
| --- | --- |
| `index.html` — `#hero`, `#overview` | Ước tính sinh khối kèm đánh giá sai số; phạm vi khảo sát theo ranh giới đã thống nhất; không cam kết chính xác tuyệt đối. |
| `#methodology`, `#faq` | Nêu rõ LiDAR không đo trực tiếp D1.3 dưới tán; cả ba Level đều cần ô tiêu chuẩn mặt đất. |
| `#technology`, `#service-levels`, `#deliverables` | Cây đơn lẻ từ Level 2; biến động và dashboard đa kỳ thuộc Level 3. |
| `#scope`, `#faq`, `src/js/main.js` — `answers.mrv` | AGB; không đo trực tiếp rễ, gỗ chết, thảm mục, đất; không thay thế MRV/thẩm định độc lập hoặc bảo đảm cấp tín chỉ. |
| `#service-levels`, `#faq`, `#contact` | Không công khai giá; không cam kết SLA, tiến độ, ROI, tỷ lệ phê duyệt hay ngưỡng sai số chưa xác minh. |
| `#assistant`, `#contact` | Ghi rõ demo; không giả lập nhân viên trực tuyến hoặc gửi yêu cầu thành công. |

Không nhúng hoặc tải tài liệu nội bộ từ frontend. Không sử dụng testimonial, số khách hàng, thiết bị thương mại chưa xác nhận hoặc số liệu nghiên cứu làm SLA. Những khẳng định pháp lý chi tiết và số hiệu văn bản trong bản nguồn không được đưa thành tuyên bố pháp lý trên trang.

Ảnh hiện có được giữ nguyên và ghi chú minh họa. Dùng ảnh hero tĩnh làm poster thay cho poster có bóng UAV lặp trong contact sheet. Dashboard được ghi rõ là giao diện minh họa, không phải dữ liệu dự án. Không dùng ảnh thực địa như bằng chứng về nhân sự/dự án thật. Tham chiếu Hiabove `wh-1154` chưa tìm được đúng trang qua tìm kiếm; thiết kế dựa trên yêu cầu bố cục sáng của prompt và art direction nội bộ, không tuyên bố sao chép chính xác template.

## Hệ giao diện

| Token | Giá trị / sử dụng |
| --- | --- |
| `--green` | `#12735A`: CTA, heading nhấn, nhãn |
| `--ink` | `#12382F`: chữ chính, section giới hạn, CTA cuối |
| `--mint`, `--mint-deep` | `#F2FAF7`, `#E4F4EE`: nền xen kẽ, trạng thái hover |
| `--blue` | `#287A96`: nhãn dữ liệu, focus |
| `--lime`, `--cyan` | `#9CF06A`, `#64D8C1`: điểm nhấn trên nền tối |
| `--muted`, `--white` | `#36534B`, `#FFFFFF`: nội dung, nền |
| `--font`, `--mono` | Be Vietnam Pro; IBM Plex Mono; font hệ thống fallback |
| `--container` | 1280px; lề co giãn theo viewport |
| `--section-space` | `clamp(64px, 7.5vw, 112px)` |
| `--radius`, `--shadow`, `--transition` | 8px; shadow nhẹ; 180ms |

## Kết quả QA

Chạy Chrome headless thật trên Windows qua Chrome DevTools Protocol; không có dependency kiểm thử npm. Browser plugin không có phiên kết nối, nên sử dụng Chrome cục bộ. Lệnh:

```powershell
node S0285-S0287/src/tests/browser-qa.mjs
```

Yêu cầu Chrome tại đường dẫn mặc định trên Windows; có thể đặt `CHROME_PATH`. Cần chạy preview trước. Browser test dùng hồ sơ tạm riêng, không dùng phiên đăng nhập người dùng.

| Kiểm tra | Kết quả |
| --- | --- |
| 360×800, 768×1024, 1024×900, 1440×1000 | PASS: không tràn ngang, không phần tử ra ngoài viewport |
| Media, ID, liên kết nội trang | PASS: ảnh tải được, ID duy nhất, target hợp lệ |
| Menu mobile | PASS: mở/đóng, Escape trả focus, click ngoài |
| FAQ | PASS: mouse và Enter; đồng bộ aria-expanded/hidden |
| Chọn Level | PASS: CTA điền đúng Level vào form |
| Form | PASS: trường bắt buộc, email/số điện thoại/diện tích không hợp lệ; lỗi được gắn với input; không báo đã gửi |
| Trợ lý | PASS: lựa chọn câu hỏi hiển thị nội dung công khai đã soạn; phản hồi MRV đúng giới hạn |
| Reduced motion / Save-Data | PASS: không gắn nguồn video, ẩn điều khiển chuyển động |
| Video | PASS: phát/tạm dừng, dừng khi hero ngoài viewport, ảnh vẫn hiển thị khi video bị chặn |
| JavaScript tắt | PASS: menu và tất cả câu trả lời FAQ đọc được; form demo không gửi |
| Nội dung nội bộ | PASS: truy cập trực tiếp source/pricing/docs bị preview chặn |
| Runtime exceptions | 0 |

Đã xem screenshot hero bốn kích thước, bố cục toàn trang desktop/mobile và các phần phương pháp, cấp độ, dữ liệu, biểu mẫu. Đã sửa lỗi khoảng trắng khi ẩn `<br>` trên mobile và yêu cầu Google Fonts chứa font weight không hỗ trợ.

Tương phản các cặp màu chính (nền phẳng): xanh/ trắng 5,79:1; chữ phụ/mint 7,93:1; xanh dữ liệu/mint 4,59:1; cyan/nền tối 7,43:1. Đây không phải chứng nhận WCAG toàn trang. Chưa đo Core Web Vitals/Lighthouse, chưa kiểm thử trình đọc màn hình hoặc Safari/Firefox và thiết bị thật.

Kết quả máy đọc: `src/tests/screenshots/qa-results.json`. Screenshot: `viewport-360.png`, `viewport-768.png`, `viewport-1024.png`, `viewport-1440.png`; ảnh toàn trang tương ứng `full-*.png`. Các ảnh nằm trong `src/tests/screenshots/` và không được preview public phục vụ.

## Các phần cần tích hợp tiếp

1. **Form backend:** chưa có endpoint tiếp nhận, routing Sales/Technical hoặc chính sách dữ liệu đã xác nhận. Bản demo kiểm tra tại thiết bị, không lưu localStorage, không gửi request chứa thông tin form. Cần kết nối server, xác thực input phía server và xử lý trạng thái lỗi/thành công thực trước khi tiếp nhận khách hàng.
2. **AI backend:** hiện là bốn phản hồi cố định có nhãn demo; không phải mô hình AI đang chạy. Khi tích hợp, đưa cấu hình 08/10 và bộ test tình huống đầy đủ vào server; không đưa bảng giá nội bộ vào bundle public. CTA chỉ dẫn đến biểu mẫu, chưa tự chuyển hội thoại cho chuyên viên.
3. **Media:** workspace chỉ có MP4 `Prompt_—_Dynamic_Multi_St.mp4`, 8.675.330 byte (~8,27 MiB); không có WebM hoặc các video tối ưu được nêu trong manifest. Không tạo URL tới asset thiếu. Autoplay chỉ được thử ở desktop, không Save-Data/reduced-motion/mạng 2G–3G; mobile mặc định ảnh tĩnh, có nút phát thủ công. Cần WebM và MP4 nén nhẹ hơn để hoàn tất mục tiêu dung lượng media của prompt 06. Chưa xác nhận vòng lặp liền mạch toàn bộ video.
4. **Asset 04:** bổ sung SOP nếu cần đối chiếu quy trình vận hành chi tiết. Trang không tự xác lập ngưỡng an toàn hoặc quyết định GO/NO-GO.

Các xóa/di chuyển đã có trong working tree trước khi thực hiện được giữ nguyên; không khôi phục cây `src` cũ và không sửa các thư mục dịch vụ khác.

## C?p nh?t c?u tr?c v? logo

To?n b? code n?m trong `src/`: `index.html`, `css/`, `js/` v? `tests/` (script preview v? QA). Media gi? trong `assets/` ngo?i `src`; HTML d?ng `../assets/`, CSS d?ng `../../assets/`. Header/footer d?ng `LOGO_no-bg.png`; CSS c?n gi?a ph?n logo trong canvas trong su?t.
