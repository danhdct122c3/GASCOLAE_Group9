# TÀI LIỆU KHÓA ĐỊNH HƯỚNG NGHỆ THUẬT (ART DIRECTION SPECIFICATION)
## Dịch Vụ GASCOLAE S0285-S0287: Đánh Giá & Lập Bản Đồ Hấp Thụ Carbon Sinh Khối Rừng

> **Tài liệu căn cứ:** `01_ART_DIRECTION.md`  
> **Cấp thẩm quyền duyệt:** Art Director & Technical Visual Lead  
> **Mục tiêu:** Thiết lập và khóa toàn bộ ngôn ngữ thị giác, quy chuẩn màu sắc, giải phẫu thiết bị, chuẩn mực khoa học và bộ prompt gốc cho tất cả media assets của landing page.

---

## I. TRIẾT LÝ THỊ GIÁC: PREMIUM SCIENTIFIC DOCUMENTARY

Tất cả hình ảnh và video của dự án GASCOLAE S0285-S0287 phải nhất quán tuân theo phong cách **Khoa học Tài liệu Cao cấp (Premium Scientific Documentary)**:

1. **Khách quan, Chuẩn mực & Đáng tin cậy:**
   - Tránh xa phong cách tiếp thị công nghệ viễn tưởng (Sci-Fi), Cyberpunk hoặc đồ họa quảng cáo thương mại hào nhoáng.
   - Thể hiện sự trung thực của khoa học lâm nghiệp viễn thám: thiết bị bay khảo sát có cấu trúc cơ khí vững chắc, đội ngũ thực địa thao tác theo quy trình lâm sinh chuẩn mực, dữ liệu không gian hiển thị dưới dạng bản đồ và đám mây điểm có cơ sở toán học.

2. **Ánh sáng & Thời khắc (Lighting & Atmosphere):**
   - **Thời khắc:** Buổi sáng sớm trong lành (Clear morning daylight, 7:30 – 9:30 AM).
   - **Nhiệt độ màu:** 5400K – 5800K (ánh sáng trắng tự nhiên, trong trẻo, không ám vàng hoàng hôn, không ám xanh lạnh lẽo).
   - **Độ tương phản:** Vừa phải (Medium contrast), chi tiết vùng sáng (highlights) và vùng tối (shadows) được bảo toàn tự nhiên, phản ánh đúng đặc thù tán rừng mưa nhiệt đới khi có sương sớm nhẹ và nắng xuyên tán.
   - **Tuyệt đối cấm:** Cinematic u tối, bầu trời giông bão, cảnh đêm, ánh đèn neon hoặc tông màu phim viễn tưởng u ám.

3. **Hệ sinh thái địa lý (Geography & Vegetation):**
   - **Hệ thực vật:** Rừng nhiệt đới ẩm thường xanh Đông Nam Á / Việt Nam (rừng tự nhiên nhiều tầng tán, các loài cây ưu thế họ Dầu/Dipterocarpaceae, họ Đậu/Fabaceae, có cây vượt tán, dây leo tự nhiên, thảm tươi dưới tán).
   - **Địa hình:** Đồi bát úp, thung lũng đồi núi nhấp nhô đặc trưng của vùng Tây Nguyên, Bắc Trung Bộ hoặc Đông Bắc Bộ Việt Nam.
   - **Tuyệt đối cấm:** Rừng thông ôn đới châu Âu/Bắc Mỹ (Pine, Birch), rừng rụng lá mùa thu, rừng ngập mặn đước/vẹt nếu không thuộc phạm vi chỉ định.

---

## II. HỆ THỐNG MÀU SẮC ĐỒNG BỘ (CHROMATIC SYSTEM)

Hệ thống màu sắc tuân thủ quy tắc 60-30-10, kết hợp chặt chẽ giữa sắc thái thiên nhiên nhiệt đới và dữ liệu viễn thám:

```
┌────────────────────────────────────────────────────────────────────────┐
│  MINT (#F2FAF7 / #E4F4EE) - 50%: Bầu trời, sương sớm, nền UI           │
├────────────────────────────────────────┬───────────────────────────────┤
│  FOREST GREEN (#12735A) - 30%          │  DARK GREEN (#12382F) - 10%   │
│  Tán rừng nhiệt đới, sinh khối tự nhiên│  Độ sâu bóng đổ, cấu trúc đất │
├────────────────────────────────────────┴───────────────────────────────┤
│  DATA BLUE (#287A96) - 5%: Đám mây điểm LiDAR, mô hình CHM             │
├────────────────────────────────────────────────────────────────────────┤
│  SIGNAL LIME (#9CF06A) & CYAN (#64D8C1) - 5%: Quét quang học & Điểm cao│
└────────────────────────────────────────────────────────────────────────┘
```

### Bảng định nghĩa màu sắc chi tiết

| Tên Màu | Mã HEX | RGB | Ứng Dụng Trong Ảnh / Video | Ứng Dụng UI Landing Page |
| :--- | :--- | :--- | :--- | :--- |
| **Mint Neutral** | `#F2FAF7` | `242, 250, 247` | Ánh sáng phản xạ tán cây, bầu trời sáng, khoảng không âm (negative space) | Màu nền trang chính, nền card dịch vụ |
| **Mint Tint** | `#E4F4EE` | `228, 244, 238` | Lớp sương mờ thung lũng, ánh sáng ven tán | Nền hover, viền phân cách |
| **Forest Green** | `#12735A` | `18, 115, 90` | Sắc xanh lá tán rừng nguyên sinh, cây ưu thế | Màu thương hiệu chính, nút CTA chính |
| **Dark Forest** | `#12382F` | `18, 56, 47` | Tầng tán dưới, bóng đổ hốc cây, thân cây gỗ lớn | Màu tiêu đề H1/H2/H3, văn bản chính |
| **Data Blue** | `#287A96` | `40, 122, 150` | Đám mây điểm 3D (point cloud), mô hình DTM/CHM | Nhãn kỹ thuật, biểu tượng GIS, tag Level |
| **Signal Lime** | `#9CF06A` | `156, 240, 106` | Tia quét quét tán nhẹ, điểm ngọn cây cao nhất | Điểm nhấn nút hành động phụ, badge trạng thái |
| **Cyan Accent** | `#64D8C1` | `100, 216, 193` | Mặt phẳng xung laser LiDAR, đường bao lô GIS | Đường viền sáng thẻ active, hover state |
| **Hardware Slate**| `#36534B` | `54, 83, 75` | Khung sợi carbon của UAV, vỏ thiết bị đo đạc | Văn bản phụ (body copy muted), viền card |

---

## III. QUY CHUẨN GIẢI PHẪU THIẾT BỊ & THỰC ĐỊA (HARDWARE & FIELD REALISM)

Để đảm bảo hình ảnh được giới chuyên gia lâm nghiệp và các cơ quan thẩm định đánh giá cao, các chi tiết kỹ thuật phải tuân thủ nghiêm ngặt các quy tắc sau:

### 1. Thiết bị bay không người lái (Industrial UAV Platform)
- **Cấu hình động cơ:** Multirotor công nghiệp (Hexacopter 6 cánh hoặc Quadcopter 4 cánh lớn hạng nặng đối xứng cân bằng). Cánh quạt quay tạo độ mờ chuyển động tự nhiên (motion blur), tuyệt đối không bị cong queo hay biến dạng (no morphing rotors).
- **Khung vỏ:** Hợp kim nhôm hàng không và sợi carbon màu xám đậm mờ (`#36534B`), kết cấu cơ khí chắc chắn, càng đáp (landing gear) vững chãi.
- **Cụm cảm biến LiDAR:**
  - Thiết kế dạng module công nghiệp (generic downward-facing LiDAR pod) gắn chắc chắn trên gimbal chống rung dưới bụng máy bay.
  - Cảm biến hướng thẳng đứng xuống mặt đất (nadir angle 90° hoặc góc quét nón đối xứng).
  - Có mắt quét quang học kính sẫm màu kết hợp camera quang học RGB/đa phổ tích hợp.
- **Hệ thống định vị:** Tích hợp ăng-ten GNSS RTK kép trên lưng thân máy bay để thể hiện độ chuẩn xác tọa độ khảo sát.
- **TUYỆT ĐỐI KHÔNG:**
  - Không mang vòi phun thuốc trừ sâu, bình chứa chất lỏng, cánh phun hoặc phễu gieo hạt nông nghiệp.
  - Không gắn nhãn hiệu hay logo thương mại (không DJI, Matrice, Zenmuse, YellowScan, Riegl, Leica,...).
  - Không có vũ khí, camera nhìn ngang gắn ống ngắm gián điệp.

### 2. Trực quan hóa Dữ liệu Không gian & Đám mây điểm (LiDAR & GIS Data)
- **Đường quét LiDAR:**
  - Chỉ là một chùm sáng hình nón góc mở vừa phải hoặc mặt phẳng quét quang học dạng quạt (subtle cyan/lime scan sweep).
  - Cường độ mờ mịn, bán trong suốt (semi-transparent 30–50% opacity), không làm cháy sáng khung hình.
  - Tuyệt đối không giống tia laser vũ khí phá hủy, không có hiệu ứng phát nổ hay phóng điện.
- **Đám mây điểm 3D (Point Cloud):**
  - Mật độ điểm vừa phải, thể hiện rõ cấu trúc tán cây (từ ngọn cây xuống cành chính và bề mặt địa hình đồi dốc).
  - Phối màu theo thang độ cao (Elevation-based color ramp): ngọn cây cao màu Signal Lime (`#9CF06A`), tầng giữa màu Cyan (`#64D8C1`), tầng thấp màu Data Blue (`#287A96`), mặt đất màu nâu đất DTM tự nhiên.
  - Không vẽ lưới ma trận ảo tưởng lơ lửng vô nghĩa.

### 3. Đội ngũ ngoại nghiệp & Ô tiêu chuẩn thực địa (Ground Truth Plots)
- **Nhân sự thực địa:** Kỹ thuật viên người Việt Nam, tác phong nghiêm túc, tập trung chuyên môn, làm việc theo nhóm 2 người tự nhiên.
- **Trang phục an toàn:** Áo bảo hộ phản quang chuyên dụng lâm nghiệp (màu cam hoặc xanh lá mạ), mũ bảo hộ cứng (hard hat), ủng cao su đi rừng chống trượt.
- **Thao tác đo đếm:**
  - Căng thước dây đo chu vi/đường kính thân cây ở đúng **chiều cao ngang ngực 1.3m (D1.3)**.
  - Cán bộ còn lại cầm bảng kẹp hồ sơ chống nước hoặc thiết bị ghi chép hiện trường.
  - Góc quan sát trong ô tiêu chuẩn có thể thấy cọc mốc ranh giới ô vuông tiêu chuẩn ($20\text{m} \times 20\text{m}$ hoặc $25\text{m} \times 40\text{m}$).
- **TUYỆT ĐỐI KHÔNG:**
  - Không có cảnh cưa cây, chặt phá rừng, máy cày, máy kéo.
  - Người không nhìn thẳng vào ống kính cười tạo dáng giả tạo (unposed candid only).

---

## IV. BỘ GUARDRAIL THỊ GIÁC TUYỆT ĐỐI (STRICT VISUAL NEGATIVE GUARDRAILS)

Để đảm bảo pháp lý, tính khoa học và tuân thủ [01_CONTENT_GUARDRAILS.md](file:///d:/Work/CT-group/GASCOLAE_Group9/S0285-S0287/prompts/01_codex_landing-page/01_CONTENT_GUARDRAILS.md):

```
┌────────────────────────────────────────────────────────────────────────┐
│                      DANH MỤC CẤM XUẤT HIỆN TRÊN MEDIA                 │
├────────────────────────────────────────────────────────────────────────┤
│ 1. CẤM CHỮ & LOGO: Không chứa bất kỳ chữ cái, số, ký tự tiếng Anh/Việt,│
│    watermark hoặc logo hãng thiết bị thương mại nào.                    │
│ 2. CẤM SỐ LIỆU HƯ CẤU: Không vẽ bảng chỉ số HUD, phần trăm giả định     │
│    (VD: "99.9% Accuracy", "$1,000,000 Carbon Credits").                │
│ 3. CẤM BIỂU TƯỢNG TÀI CHÍNH: Tuyệt đối không tạo biểu tượng đồng xu     │
│    carbon, lá cây mạ vàng, token tiền tệ số hay chứng chỉ xanh hoạt họa.│
│ 4. CẤM THIẾT BỊ NÔNG NGHIỆP: Không có bình xịt phân bón, vòi phun thuốc │
│    hoặc drone gieo hạt.                                                │
│ 5. CẤM VIỄN TƯỞNG (SCI-FI): Không có tia laser hủy diệt, vòng tròn lơ   │
│    lửng ma thuật, lưới neon cyberpunk, quái vật hay người máy.         │
│ 6. CẤM SAI LỆCH LÂM NGHIỆP: Không vẽ drone đo xuyên thấu được đường kính│
│    thân cây D1.3 mà không cần ô tiêu chuẩn mặt đất.                    │
│ 7. CẤM Ô NHIỄM / PHÁ RỪNG: Không có khói nhà máy, cưa xích, bãi gỗ mục. │
└────────────────────────────────────────────────────────────────────────┘
```

---

## V. BỘ THÔNG SỐ PROMPT MẪU CHO CÔNG CỤ SINH ẢNH & VIDEO

Các prompt master được chuẩn hóa cho Midjourney v6, Stable Diffusion XL, Imagen 3, Kling/Runway Gen-3:

### 1. Style Prefix (Dùng ở đầu mỗi prompt)
```text
Premium environmental scientific documentary photography, Southeast Asian tropical rainforest, clear morning daylight 5600K, authentic forestry remote sensing survey, Hasselblad H6D-100c medium format camera look, sharp optical focus, natural dynamic range, pristine atmosphere, clean mint tint (#F2FAF7) and lush forest green (#12735A) palette, realistic textures, highly detailed, photorealistic 8k
```

### 2. Universal Negative Prompt (Dùng ở phần Negative Prompt của mọi asset)
```text
text, typography, watermark, logo, brand names, DJI logo, lettering, numbers, fake charts, HUD, futuristic holograms, sci-fi laser weapons, blinding neon rays, explosion, cyberpunk, cartoon, CGI render artifacts, oversaturated colors, sunset, dark moody lighting, storm, fog, agricultural spray nozzles, pesticide spraying, seeds falling, deformed drone propellers, broken drone arms, missing rotors, fantasy forest, human faces staring at camera, posed portrait, chainsaws, deforestation, logging, smoke stacks, pollution, cryptocurrency icons, floating coins, badges.
```

### 3. Cấu hình Tham số (Parameters)
- **Tỷ lệ khung hình:**
  - Hero Image & Poster: `--ar 16:9`
  - Supporting Images (Methodology, Data Layers): `--ar 4:3`
  - Field Work Image: `--ar 3:2`
  - GIS Dashboard Mockup: `--ar 16:10`
  - CTA Background: `--ar 16:9`
- **Phong cách render:** `--style raw` (đối với Midjourney để loại bỏ tính chất hoạt họa/nghệ thuật hóa quá mức).
- **Stylize:** `--s 150 - 250` (giữ tính chất hiện thực ảnh tư liệu).

---
*Tài liệu này đã khóa chính thức định hướng nghệ thuật cho toàn bộ giai đoạn sản xuất media của dịch vụ GASCOLAE S0285-S0287. Bước tiếp theo: Triển khai Prompt 02 — Ảnh Hero.*
