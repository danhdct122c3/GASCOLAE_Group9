# KẾ HOẠCH MEDIA TỔNG THỂ (MASTER MEDIA PLAN)
## Dịch Vụ GASCOLAE S0285-S0287: Đánh Giá & Lập Bản Đồ Hấp Thụ Carbon Sinh Khối Rừng

> **Vai trò:** Art Director & Technical Visual Lead  
> **Dự án:** Landing Page Dịch Vụ Đo Đạc Viễn Thám & Ô Tiêu Chuẩn Thực Địa GASCOLAE S0285-S0287  
> **Chuẩn phong cách:** Premium Scientific Documentary — Sáng, Đáng tin cậy, Chuẩn mực kỹ thuật lâm nghiệp & GIS

---

## I. TỔNG QUAN ĐỊNH HƯỚNG NGHỆ THUẬT (ART DIRECTION FRAMEWORK)

### 1. Triết lý thị giác & Bối cảnh
- **Định vị:** Không phải website bán thiết bị drone (khác với Wix Hiabove `wh-1154`), mà là **dịch vụ đo đạc viễn thám kết hợp thực địa chuẩn hóa** phục vụ kiểm kê rừng, định giá sinh khối và chuẩn bị hồ sơ dMRV theo Nghị định 180/2026/NĐ-CP.
- **Tone & Mood:** Ban mai tươi sáng, khách quan khoa học (scientific documentary), sạch sẽ, hiện đại. Tuyệt đối không dùng phong cách viễn tưởng cyberpunk, không u tối cinematic dramatics, không hiệu ứng tia laser quét rực rỡ như vũ khí.
- **Hệ sinh thái thể hiện:** Rừng nhiệt đới ẩm Đông Nam Á (tán lá rậm rạp, phân tầng tự nhiên, cây họ Dầu/Dipterocarpaceae đặc trưng), địa hình đồi núi thực tế tại Việt Nam.
- **Thiết bị & Cảm biến:** Thiết bị bay không người lái (UAV) công nghiệp đa cánh quạt (multirotor) với khung cơ khí chắc chắn; cụm cảm biến LiDAR tích hợp hướng thẳng đứng xuống dưới (generic industrial pod, không gắn logo DJI/Zenmuse L2 hay nhãn hiệu thương mại).
- **Nguyên tắc kỹ thuật trung thực (Guardrails):**
  - Cảm biến LiDAR chỉ đo cấu trúc tán đứng và bề mặt địa hình, **không đo xuyên thấu trực tiếp được đường kính ngang ngực D1.3**. Do đó, hình ảnh phải phản ánh tính bổ trợ không thể tách rời giữa UAV và công tác đo đếm ô tiêu chuẩn mặt đất.
  - Không vẽ biểu tượng đồng tiền, token, chứng chỉ carbon hư cấu (carbon credit coins) bay lơ lửng.
  - Không đưa số liệu thống kê giả định, không vẽ bảng chỉ số HUD hư cấu lên ảnh.
  - Không để chữ (text), logo, watermark bên trong ảnh/video render.

### 2. Bảng màu chuẩn hóa (Design System Tokens)
| Token | Mã HEX | Vai trò trên Media |
| :--- | :--- | :--- |
| **Mint Background** | `#F2FAF7` / `#E4F4EE` | Ánh sáng môi trường, sương sớm tán rừng, nền trung tính sạch |
| **Forest Green** | `#12735A` | Tán rừng nhiệt đới chủ đạo, màu thương hiệu chính |
| **Deep Forest** | `#12382F` | Đổ bóng tự nhiên của tán rừng, độ sâu địa hình |
| **Data Blue** | `#287A96` | Lớp dữ liệu độ cao tán (CHM), đám mây điểm LiDAR phân loại |
| **Signal Lime** | `#9CF06A` | Điểm nhấn quét dữ liệu quang học/LiDAR có kiểm soát, điểm cao nhất tán rừng |
| **Cyan Accent** | `#64D8C1` | Mặt phẳng xung hồi LiDAR, đường bao lô GIS số hóa |
| **Technical Dark** | `#36534B` | Khung kim loại UAV, thiết bị đo đạc thực địa |

---

## II. MA TRẬN QUẢN LÝ TÀI NGUYÊN MEDIA (ASSET SPECIFICATION MATRIX)

Landing page tuân thủ nguyên tắc tinh giản, **không tạo ảnh tràn lan cho mọi card** nhằm tránh rối mắt và tối ưu hóa tải trang (Core Web Vitals). Toàn bộ landing page được neo giữ bởi **08 asset trọng tâm**:

```
[Hero Section] ──────────► 01. Hero Image (16:9) & 02. Hero Poster
                     └──► 03. Hero Video (8s Loop)
[Methodology Section] ───► 04. Methodology Visual (4:3)
[Data Layers Section] ───► 05. GIS Data Layers Visual (4:3)
[Field Work Section] ────► 06. Field Measurement Image (3:2)
[Service Level 3] ───────► 07. GIS Dashboard Mockup (16:10)
[CTA Section] ───────────► 08. CTA Forest Aerial Background (16:9)
```

---

## III. CHI TIẾT TỪNG TÀI NGUYÊN MEDIA (DETAILED ASSET BLUEPRINTS)

### Asset 01: Hero Master Image
- **Mục đích:** Hình ảnh chủ đạo định vị dịch vụ đo đạc viễn thám rừng công nghệ cao, tạo ấn tượng chuyên nghiệp, khoa học và đáng tin cậy ngay trong 5 giây đầu tiên.
- **Vị trí hiển thị:** Section 01 — Hero Section (Desktop/Tablet hero background/right split).
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `16:9`
  - Master Resolution: `1920 × 1080 px`
  - Responsive Variants: `1600 × 900 px`, `1280 × 720 px`, `960 × 540 px`, `640 × 360 px`
- **Safe Area:** 
  - **42% bên trái màn hình** là khoảng không gian yên tĩnh (negative space) dành cho Headline tiếng Việt, Sub-headline và 2 nút CTA.
  - Vùng an toàn 80px lề trên để không bị che khuất bởi Navigation Header trong suốt.
- **Bố cục chủ thể (Subject Position):** UAV công nghiệp nằm ở 1/3 góc trên bên phải (Upper-Right Third), bay nghiêng góc 15 độ hướng vào tâm khung hình, bên dưới là tán rừng nhiệt đới trập trùng trải dài từ giữa sang phải.
- **Chuyển động (Motion):** Tĩnh (Static).
- **Prompt:**
  ```text
  A professional wide 16:9 master photograph of an industrial multirotor UAV equipped with a generic downward-facing LiDAR sensor pod, flying steadily over an expansive Southeast Asian tropical rainforest canopy during clear early morning daylight. The drone is positioned in the upper-right third of the frame, angled subtly downward toward the forest. Below the drone, an extremely subtle, scientifically authentic cyan (#64D8C1) and soft lime (#9CF06A) scan plane gently reveals a sparse 3D point cloud elevation structure across a small section of the forest crown. The left 45 percent of the frame features soft, clean, calm atmospheric haze, pale mint morning sky (#F2FAF7) and soft out-of-focus distant canopy, creating pristine negative space. Natural vibrant lighting, authentic Dipterocarp forest texture, lush forest green (#12735A) and deep emerald (#12382F), premium scientific documentary aesthetic, high dynamic range, Hasselblad medium format camera look, sharp optical focus on the UAV structure, clean mechanical details, no blur on hardware.
  ```
- **Negative Prompt:**
  ```text
  text, typography, letters, watermarks, corporate logos, drone brand names, DJI logo, HUD graphics, sci-fi laser beams, blinding neon weapons, explosive glowing rays, futuristic digital wireframes, cartoon, CGI render artifacts, oversaturated colors, sunset, moody dark cinematic lighting, storm clouds, fog, agricultural spray nozzles, seeds falling, propellers motion-warped, deformed drone arms, fantasy forest, human faces looking at camera, charts, numbers, floating cryptocurrency or carbon coin icons.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/hero_uav_lidar_forest_1920.webp`
  - Master backup: `assets/images/hero_uav_lidar_forest_master.png`
  - Responsive files: `hero_uav_lidar_forest_1600.webp`, `hero_uav_lidar_forest_1280.webp`, `hero_uav_lidar_forest_960.webp`, `hero_uav_lidar_forest_640.webp`
  - Fallback: JPEG nén chất lượng 85% (`hero_uav_lidar_forest_1920.jpg`).

---

### Asset 02: Hero Poster Frame
- **Mục đích:** Khung hình tĩnh hiển thị ngay lập tức khi trang tải, đóng vai trò poster placeholder trước khi video hero chạy hoặc dự phòng cho thiết bị bật chế độ `prefers-reduced-motion` / mạng yếu.
- **Vị trí hiển thị:** Thuộc tính `poster` của thẻ `<video class="hero-video">` tại Hero Section.
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `16:9`
  - Kích thước: `1920 × 1080 px` (trùng khớp chính xác góc máy, phối cảnh và bố cục với frame đầu tiên của Video Hero).
- **Safe Area:** 42% lề trái giữ sạch tuyệt đối để không gây tranh chấp tương phản với chữ khi video tải.
- **Subject Position:** Trùng khớp pixel-by-pixel với Frame 0 của Asset 03.
- **Motion:** Tĩnh (Static Poster).
- **Prompt:**
  ```text
  Exact matching first frame of an 8-second looping documentary video: wide 16:9 landscape of an industrial heavy-lift multirotor drone hovering above dense Southeast Asian canopy in calm early morning light. The UAV occupies the upper right sector, fitted with an integrated nadir LiDAR scanner. Calm pale-mint horizon at top-left, dense natural tree foliage below. Balanced natural color grading using forest green (#12735A) and clean mint haze (#F2FAF7). Crystal clear photorealism, documentary photography, no overlay artifacts.
  ```
- **Negative Prompt:**
  ```text
  text, logo, watermark, blur, flickering, extreme lens flare, sci-fi overlays, artificial UI, distorted drone propellers, dark vignette.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/hero_video_poster.webp`
  - Fallback: `assets/images/hero_video_poster.jpg`

---

### Asset 03: Hero Video (8-Second Seamless Loop)
- **Mục đích:** Tạo sinh khí chuyển động mượt mà, trực quan hóa hoạt động bay quét viễn thám thực tế, minh họa sinh động quá trình chuyển tiếp từ tán rừng thực sang mô hình hóa dữ liệu độ cao.
- **Vị trí hiển thị:** Nền của Hero Section (tự động phát `autoplay muted loop playsinline`).
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `16:9`
  - Độ phân giải: `1920 × 1080 px` @ 24fps / 30fps
  - Thời lượng: Đúng `8.0 giây` (vòng lặp vô tận, frame cuối đồng nhất mượt mà với frame đầu).
- **Safe Area:** 42% lề trái tĩnh lặng, chỉ có chuyển động khẽ của sương mỏng hoặc tán cây xa mờ, giữ độ tương phản cao cho khối văn bản màu tối (`#12382F`).
- **Bố cục & Chuyển động (Motion Dynamics):**
  - **Giây 0–2:** Camera lướt chậm về phía trước (slow push forward). Drone ở góc 1/3 trên bên phải bay tịnh tiến ổn định theo hướng quét.
  - **Giây 2–5:** Một dải quét quang học màu cyan nhạt (`#64D8C1`) và lime (`#9CF06A`) với cường độ sáng vừa phải lướt qua một khoảng tán rừng nhỏ, làm nổi nhẹ các điểm point cloud 3D phân tầng độ cao của ngọn cây.
  - **Giây 5–7:** Đám mây điểm hòa dần vào lớp bản đồ màu sắc thể hiện sinh khối mờ nhạt (Data Blue `#287A96`), sau đó trở lại trạng thái rừng tự nhiên.
  - **Giây 7–8:** Tốc độ bay giảm nhẹ, góc máy và vị trí drone chuyển tiếp mượt mà quay về trạng thái của giây 0 (seamless loop transition).
- **Prompt:**
  ```text
  An 8-second seamless looping cinematic video, 16:9, 1080p, 24fps. Smooth gentle forward drone camera motion over a rich, biodiverse tropical rainforest in Vietnam during soft morning sunlight. On the right side of the screen, an industrial multirotor survey UAV flies steadily in forward inspection mode. A subtle, elegant, mathematically precise light cyan and lime scan line sweeps across a localized forest canopy section, revealing faint, realistic 3D LiDAR point cloud elevations and tree crowns underneath, which then naturally transition back into lush foliage. The left 42 percent remains calm, stable, softly lit negative space with gentle atmospheric depth. Pristine natural documentary feel, perfectly stable mechanical motion, no abrupt cuts, perfectly loopable start and end frames, photorealistic organic movement of leaves in gentle breeze.
  ```
- **Negative Prompt:**
  ```text
  fast motion, jarring camera shake, jump cuts, flashing strobe lights, heavy particle clouds, dense fog, storm, military weapons, sci-fi holographic interfaces, HUD, neon laser attacks, drone morphing, changing number of rotors, melted landing gear, people waving, audio, logos, text overlays, low resolution, stuttering loop.
  ```
- **Tên file & Định dạng:**
  - File chính (Web hiện đại): `assets/video/hero_lidar_scan_1080p.webm` (VP9 codec, target bitrate ~2.5 Mbps, file size < 3MB)
  - File tương thích phổ thông: `assets/video/hero_lidar_scan_1080p.mp4` (H.264 / AAC muted, file size < 4MB)

---

### Asset 04: Methodology Visual (LiDAR & Ground Calibration)
- **Mục đích:** Minh họa trực quan nguyên lý cốt lõi của phương pháp: **UAV LiDAR viễn thám trên tán + Ô tiêu chuẩn mặt đất dưới tán**. Giải quyết câu hỏi lớn nhất của khách hàng và làm rõ guardrail: LiDAR đo cấu trúc tán, thực địa đo đường kính D1.3 để hiệu chuẩn mô hình allometric.
- **Vị trí hiển thị:** Section 05 — Phương Pháp Luận (Methodology Section / Card so sánh hoặc đồ họa trung tâm).
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `4:3`
  - Master Resolution: `1600 × 1200 px`
  - Responsive Variants: `1200 × 900 px`, `800 × 600 px`
- **Safe Area:** Lề 5% đều 4 cạnh, không chứa text đè lên (chú thích sẽ được xây dựng bằng HTML/CSS bao quanh).
- **Bố cục chủ thể (Subject Position):**
  - Mặt cắt ngang đứng (credible forest cross-section diagrammatic photo).
  - Tầng trên: Bầu trời và tán rừng với UAV đang phát chùm xung LiDAR hình nón góc hẹp đo chiều cao vút ngọn tán cây.
  - Tầng dưới (dưới tán rừng): Đội kỹ thuật viên 2 người mang đồ bảo hộ đang căng thước dây đo chu vi/đường kính thân cây (D1.3) bên trong cọc mốc ô tiêu chuẩn vuông góc rõ ràng.
- **Motion:** Tĩnh (Static).
- **Prompt:**
  ```text
  A realistic cross-section documentary visual of a tropical forestry scientific method, 4:3 aspect ratio. The image clearly illustrates the vertical relationship between aerial LiDAR remote sensing and terrestrial ground calibration. At the top above the dense forest canopy, an industrial survey UAV hovers, emitting a delicate, restrained semi-transparent cyan cone of light pulses that capture canopy height and surface contours. Beneath the dense canopy in the lower half of the cross-section, two Vietnamese forestry technicians wearing hi-vis safety vests and helmets are working inside a neatly marked sample plot with survey pegs, actively measuring tree diameter at breast height (D1.3) with a forestry caliper tape around a large dipterocarp trunk. Natural forest lighting with sunbeams filtering through leaves, authentic tropical understory vegetation, credible forestry science instrumentation, clear educational scientific documentary aesthetic, balanced color palette with deep greens (#12382F), forest green (#12735A) and subtle cyan data highlights (#64D8C1). No artificial text, no infographic labels.
  ```
- **Negative Prompt:**
  ```text
  text, labels, arrows, callouts, cartoon infographic, exaggerated glowing laser, cutting trees, chain saws, destruction, fantasy bioluminescence, heavy sci-fi, blurry ground, unscientific measurements, drone crashing, floating UI cards, brand logos.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/methodology_lidar_ground_plot.webp`
  - Responsive: `methodology_lidar_ground_plot_1200.webp`, `methodology_lidar_ground_plot_800.webp`
  - Fallback: `methodology_lidar_ground_plot.jpg`

---

### Asset 05: GIS Data Layers Visual (Multi-Layer Stack)
- **Mục đích:** Trực quan hóa năng lực xuất đa dạng lớp sản phẩm số hóa chỉ từ một kỳ bay (Point Cloud, DTM/DSM, CHM, Tách cây đơn lẻ, Bản đồ trữ lượng Carbon AGB).
- **Vị trí hiển thị:** Section 06 — Công Nghệ & Các Lớp Dữ Liệu (Technology / Spatial Data Layers Section).
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `4:3`
  - Master Resolution: `1600 × 1200 px`
  - Responsive Variants: `1200 × 900 px`, `800 × 600 px`
- **Safe Area:** Lề 8% xung quanh khối chồng lớp đẳng cự (isometric stack).
- **Bố cục chủ thể (Subject Position):**
  - Khối mô phỏng không gian 3D đẳng cự (isometric exploded layers) gồm 4 đến 5 tầng lớp dữ liệu xếp song song lơ lửng có trật tự từ dưới lên trên:
    1. Lớp đáy: Mô hình số địa hình DTM (Digital Terrain Model - sắc thái nâu đất/địa hình chuẩn).
    2. Lớp 2: Đám mây điểm 3D đã phân loại (Classified LiDAR Point Cloud - gradient xanh dương - lime).
    3. Lớp 3: Mô hình chiều cao tán CHM (Canopy Height Model) kết hợp ranh giới tán cây đơn lẻ.
    4. Lớp đỉnh: Bản đồ trữ lượng carbon theo lô rừng dạng đa giác GIS (tấn C/ha và tCO2e/ha) với các dải màu phân hạng khoa học.
- **Motion:** Tĩnh (Static).
- **Prompt:**
  ```text
  Clean, high-end isometric 3D visualization of layered geospatial forestry data, 4:3 aspect ratio, set against a pristine, soft pale mint (#F2FAF7) studio background. Four elegantly separated, levitating rectangular terrain slice layers stacked vertically with precision: Bottom layer shows a realistic digital terrain model (DTM) with contour topography; second layer displays a dense, classified 3D LiDAR point cloud rendered in delicate data blue (#287A96) and soft lime (#9CF06A); third layer illustrates individual tree crown delineations and canopy height model (CHM); top layer shows a crisp thematic GIS forest carbon stock distribution map divided into authentic forestry plot polygons with graded natural green-to-cyan choropleth density. Architectural visualization style, clean glassmorphism edge lighting, crisp shadows between layers, mathematically elegant, no text, no numbers, no fake charts, no UI buttons, pure scientific geospatial aesthetics.
  ```
- **Negative Prompt:**
  ```text
  text, typography, numbers, percentage labels, legends, pie charts, bar graphs, cartoon, messy point cloud, chaotic angles, dark black background, neon cyberpunk, low quality rendering, blurred textures, commercial GIS software watermarks.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/gis_data_layers_isometric.webp`
  - Responsive: `gis_data_layers_isometric_1200.webp`, `gis_data_layers_isometric_800.webp`
  - Fallback: `gis_data_layers_isometric.jpg`

---

### Asset 06: Field Measurement Documentary Image
- **Mục đích:** Nhấn mạnh tính trung thực, tính xác thực thực địa của dịch vụ GASCOLAE; chứng minh quy trình tuân thủ tiêu chuẩn ngành lâm nghiệp Việt Nam và các quy định đo đếm ô tiêu chuẩn.
- **Vị trí hiển thị:** Section 07 — Quy Trình 5 Bước (Bước 03: Thu thập dữ liệu thực địa) hoặc Section 10 — Năng Lực Nền Tảng.
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `3:2` (Tỷ lệ ảnh phóng sự chuẩn)
  - Master Resolution: `1800 × 1200 px`
  - Responsive Variants: `1200 × 800 px`, `900 × 600 px`, `600 × 400 px`
- **Safe Area:** Bố cục mở, an toàn toàn khung hình; tiêu cự tập trung vào thao tác kỹ thuật của nhân sự.
- **Bố cục chủ thể (Subject Position):** Kỹ thuật viên lâm nghiệp Việt Nam (2 người, tư thế làm việc tự nhiên, mặc áo bảo hộ chuyên dụng, mũ bảo hộ, ủng đi rừng). Một người đang ghi chép nhật ký đo đếm trên bảng kẹp hồ sơ chống nước/máy đo cầm tay, người kia đang đặt thước dây đo D1.3 quanh thân cây gỗ lớn.
- **Motion:** Tĩnh (Candid Documentary Photography).
- **Prompt:**
  ```text
  Authentic documentary photograph of two professional Vietnamese forestry technicians conducting ground truth field inventory in a native tropical forest sample plot, 3:2 aspect ratio. Both technicians wear appropriate outdoor forestry gear: high-visibility safety vests with reflective strips, clean safety hard hats, and durable field boots. One technician is carefully measuring tree diameter at breast height (1.3m) using a professional diameter caliper tape around a mossy hardwood trunk, while the colleague records observational data on an outdoor rugged clipboard tablet. Genuine candid working atmosphere, natural ambient sunlight filtering through lush green canopy leaves, high humidity forest feel, respectful and serious scientific demeanor, sharp subject focus with natural shallow depth of field, real forest environment in Central/Southern Vietnam highlands, no staged smiles, no looking at camera, true photojournalism.
  ```
- **Negative Prompt:**
  ```text
  posing for camera, looking at viewer, corporate suit, fake smiles, studio lighting, plastic props, tourist appearance, deforestation, chainsaws, dirty muddy unreadable faces, deformed hands, extra fingers, brand logos on vests, text, watermarks.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/field_measurement_ground_plot.webp`
  - Responsive: `field_measurement_ground_plot_1200.webp`, `field_measurement_ground_plot_900.webp`, `field_measurement_ground_plot_600.webp`
  - Fallback: `field_measurement_ground_plot.jpg`

---

### Asset 07: Level 3 GIS Dashboard Mockup (Multi-Period Monitoring)
- **Mục đích:** Minh họa gói dịch vụ cao cấp nhất — **Level 3: Giám sát biến động sinh khối và trữ lượng carbon đa kỳ (2–3 năm)**; cung cấp cái nhìn trực quan về sản phẩm bàn giao số hóa trên nền tảng WebGIS.
- **Vị trí hiển thị:** Section 08 — Các Cấp Độ Dịch Vụ (Service Levels / Card Level 3) hoặc Deliverables.
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `16:10` (Tỷ lệ màn hình máy tính làm việc chuẩn)
  - Master Resolution: `1920 × 1200 px`
  - Responsive Variants: `1440 × 900 px`, `1024 × 640 px`
- **Safe Area:** 5% lề xung quanh khung bezel thiết bị mockup.
- **Bố cục chủ thể (Subject Position):** Giao diện màn hình GIS chuyên nghiệp, hiện đại, tối giản. 
  - Khung bản đồ chính: Thể hiện ranh giới các tiểu khu/lô rừng dạng vector polygon sắc nét trên nền ảnh vệ tinh/orthomosaic độ phân giải cao.
  - Phân vùng so sánh (Split-slider view concept): Nửa bên trái hiển thị Bản đồ nền Kỳ 01 (Baseline), nửa bên phải hiển thị Bản đồ Kỳ 02 sau 2 năm (Monitoring) với dải màu thể hiện sự tích lũy sinh khối.
  - Cột công cụ/bảng chỉ số phụ bên phải: Hiển thị các khối biểu đồ mật độ diện tích thanh lịch, không có số liệu bịa đặt, không ghi các cam kết tài chính hoặc tên dự án chưa công bố.
- **Motion:** Tĩnh (UI/UX Mockup).
- **Prompt:**
  ```text
  A sleek, modern, professional web GIS desktop dashboard interface mockup displayed on a clean frameless workstation monitor, 16:10 aspect ratio. The screen shows an advanced forest carbon monitoring platform: A high-resolution geospatial map viewport featuring delineated forestry compartment polygons overlaid on ortho-imagery of Southeast Asian forests. A subtle side-by-side temporal slider illustrates multi-period biomass carbon changes between Year 1 baseline and Year 3 monitoring, rendered in graded thematic environmental palettes of deep forest green (#12735A), muted teal (#287A96), and vibrant signal lime (#9CF06A). Minimalist, clean UI panels on the sidebar show elegant time-series biomass distribution graphs and spatial attribute tables. Clean typography placeholders, no real-world proprietary project names, no fabricated monetary valuations, no cluttered buttons. Crisp UI design, modern SaaS interface, pale mint neutral backdrop (#F2FAF7).
  ```
- **Negative Prompt:**
  ```text
  distorted UI, gibberish unreadable tiny text, low resolution screen screenshot, generic blue stock interface, fantasy futuristic holograms, sci-fi HUD circles, trading crypto charts, dollar signs, unverified claims, messy polygons, glaring reflections.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/gis_dashboard_monitoring_mockup.webp`
  - Responsive: `gis_dashboard_monitoring_mockup_1440.webp`, `gis_dashboard_monitoring_mockup_1024.webp`
  - Fallback: `gis_dashboard_monitoring_mockup.png`

---

### Asset 08: CTA Forest Aerial Background
- **Mục đích:** Tạo nền thị giác khoáng đạt, tự nhiên cho phần Form Đăng ký tư vấn kỹ thuật cuối trang; thúc đẩy cảm xúc kết nối với thiên nhiên và dự án bền vững mà không làm giảm tính đọc được (readability) của biểu mẫu.
- **Vị trí hiển thị:** Section 12 — Call To Action / Lead Form Section Background.
- **Tỷ lệ & Kích thước:**
  - Tỷ lệ: `16:9`
  - Master Resolution: `1920 × 1080 px`
  - Responsive Variants: `1600 × 900 px`, `1280 × 720 px`, `960 × 540 px`
- **Safe Area:** **Khu vực trung tâm (Central 50% width)** được xử lý sáng, êm dịu hoặc có độ mờ nhẹ (fog/clearing) làm nền tĩnh cho Lead Form Container màu trắng/mint nổi bật bên trên với độ tương phản WCAG AAA.
- **Bố cục chủ thể (Subject Position):** Góc nhìn thẳng từ trên cao xuống (Top-down Nadir Bird's-eye view) chụp tán rừng mưa nhiệt đới nguyên sinh bát ngát. Ở các viền ngoài (vignette viền mỏng), điểm xuyết các đường đồng mức địa hình (topographic contour lines) tinh tế dạng vector mờ ảo.
- **Motion:** Tĩnh (Background Image).
- **Prompt:**
  ```text
  A breathtaking aerial top-down (nadir) photograph of an expansive, healthy tropical rainforest in Southeast Asia, 16:9 aspect ratio. The canopy forms an intricate organic carpet of diverse tree species with rich variations of deep forest green (#12382F), emerald (#12735A), and soft sunlit canopy highlights. In the wide central area of the frame, soft, ethereal morning light and light mist naturally soften the foliage contrast, creating a calm, quiet, high-key central zone perfectly suitable for placing an overlay form. Around the outer edges and corners, ultra-subtle, elegant topographic contour lines and GIS grid ticks blend organically into the forest textures. Serene, majestic, environmentally pristine, high visual clarity, zero artificial elements in the center, 8k documentary aerial photography.
  ```
- **Negative Prompt:**
  ```text
  drones, airplanes, buildings, roads, deforestation, dead trees, logging, clearcuts, muddy rivers, text, typography, logos, bright neon lines, dark gloomy shadows, high contrast noisy center, oversaturated fake greens.
  ```
- **Tên file & Định dạng:**
  - File chính: `assets/images/cta_forest_aerial_bg.webp`
  - Responsive: `cta_forest_aerial_bg_1600.webp`, `cta_forest_aerial_bg_1280.webp`, `cta_forest_aerial_bg_960.webp`
  - Fallback: `cta_forest_aerial_bg.jpg`

---

## IV. BẢNG MANIFEST VÀ ĐẶC TẢ TÍCH HỢP CODE (ASSET MANIFEST & HTML INTEGRATION)

Bảng kê khai toàn diện dùng làm căn cứ kiểm duyệt chất lượng (QA), tích hợp vào file `index.html` và thiết lập hệ thống fallback:

| Mã Asset | Tên File Chuẩn | Vị Trí HTML | Tỷ Lệ | Kích Thước | Định Dạng | Alt-Text Chuẩn SEO & Trợ Năng | Chiến Lược Fallback |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AST-01** | `hero_uav_lidar_forest_1920.webp` | `<section id="hero">` | 16:9 | 1920×1080 | WebP, JPG | Thiết bị UAV công nghiệp bay quét LiDAR đo đạc sinh khối rừng nhiệt đới | `hero_uav_lidar_forest_1920.jpg` |
| **AST-02** | `hero_video_poster.webp` | `<video poster="...">` | 16:9 | 1920×1080 | WebP, JPG | Thiết bị bay khảo sát viễn thám trên tán rừng nhiệt đới buổi sáng | `hero_video_poster.jpg` |
| **AST-03** | `hero_lidar_scan_1080p.webm` | `<video><source ...>` | 16:9 | 1920×1080 (8s) | WebM, MP4 | Video mô phỏng quá trình quét LiDAR 3D và lập bản đồ carbon tán rừng | `hero_lidar_scan_1080p.mp4` / Poster |
| **AST-04** | `methodology_lidar_ground_plot.webp` | `<section id="methodology">` | 4:3 | 1600×1200 | WebP, JPG | Sơ đồ phương pháp kết hợp bay quét UAV LiDAR và đo đạc ô tiêu chuẩn thực địa | `methodology_lidar_ground_plot.jpg` |
| **AST-05** | `gis_data_layers_isometric.webp` | `<section id="technology">` | 4:3 | 1600×1200 | WebP, JPG | Mô hình các lớp dữ liệu không gian gồm DTM, Point Cloud 3D, CHM và bản đồ carbon | `gis_data_layers_isometric.jpg` |
| **AST-06** | `field_measurement_ground_plot.webp` | `<section id="process">` | 3:2 | 1800×1200 | WebP, JPG | Kỹ thuật viên lâm nghiệp đo đếm chu vi thân cây D1.3 tại ô tiêu chuẩn thực địa | `field_measurement_ground_plot.jpg` |
| **AST-07** | `gis_dashboard_monitoring_mockup.webp` | `<section id="service-levels">` | 16:10 | 1920×1200 | WebP, PNG | Giao diện GIS giám sát biến động trữ lượng carbon rừng đa kỳ Level 3 | `gis_dashboard_monitoring_mockup.png` |
| **AST-08** | `cta_forest_aerial_bg.webp` | `<section id="contact">` | 16:9 | 1920×1080 | WebP, JPG | Tán rừng nhiệt đới nhìn từ trên cao làm nền cho biểu mẫu tư vấn kỹ thuật | `cta_forest_aerial_bg.jpg` |

---

## V. TIÊU CHÍ DUYỆT CHẤT LƯỢNG & CHECKLIST AN TOÀN NỘI DUNG (QA & CONTENT SAFETY)

Dựa trên hướng dẫn kiểm thử tại `06_MEDIA_QA_DEBUG.md`, đội ngũ Art Director & Dev phải kiểm tra chéo (cross-audit) từng asset theo 6 tiêu chí bắt buộc trước khi gắn vào mã nguồn:

- [ ] **1. Tính chuẩn xác cơ khí & thực địa (Mechanical & Forestry Plausibility):**
  - UAV có đầy đủ cánh quạt, càng đáp cơ khí đối xứng, không bị biến dạng hình học (morphing).
  - Cụm cảm biến hướng thẳng xuống dưới (nadir), không có phụ kiện lạ như vòi phun nông nghiệp, phễu gieo hạt, camera gắn lệch hướng.
  - Cán bộ thực địa trang bị đúng bảo hộ lao động lâm nghiệp (mũ cứng, áo phản quang, ủng).
  - Thao tác đo đạc đúng vị trí D1.3 (ngang ngực 1.3m), không đo sát gốc cây hoặc quá ngọn.

- [ ] **2. Không phát sinh rủi ro pháp lý & bản quyền (Copyright & Guardrail Safety):**
  - Tuyệt đối không xuất hiện logo hãng drone (DJI, Matrice, YellowScan,...).
  - Không có chữ tiếng Anh/Việt nhân tạo, số liệu bịa đặt (VD: "99.9% accuracy", "$500,000 credit"), mã hiệu giả lập trên màn hình dashboard.
  - Không có hình ảnh biểu tượng đồng tiền tệ, token hay chứng chỉ carbon hư cấu.

- [ ] **3. Vùng an toàn chữ & Tương phản WCAG (Safe Area & Contrast):**
  - Hero Image/Video dành trọn 42% lề trái yên tĩnh cho tiêu đề tiếng Việt.
  - CTA Background có vùng trung tâm êm dịu, bảo đảm tỷ lệ tương phản chữ/nền tối thiểu 4.5:1 (WCAG AA) và đạt 7:1 (WCAG AAA) khi có card đệm.

- [ ] **4. Tính liên tục & Nhất quán phong cách (Stylistic Consistency):**
  - Ánh sáng ban mai đồng nhất qua toàn bộ 8 asset (soft morning daylight, 5500K-6000K).
  - Bảng màu tuân thủ nghiêm ngặt hệ mã màu: `#12735A` (Forest Green), `#12382F` (Dark Green), `#287A96` (Data Blue), `#9CF06A` (Lime).
  - Thảm thực vật đồng nhất là rừng mưa nhiệt đới Đông Nam Á, không lọt vào rừng thông ôn đới hay cây rụng lá châu Âu.

- [ ] **5. Độ mượt mà của Video Loop (Seamless Looping):**
  - Giây thứ 8.0 khớp màu, khớp vị trí drone và chuyển động mây trời với giây 0.0, không bị giật (stutter/flicker).
  - Video được tắt tiếng (`muted`) hoàn toàn trong file đóng gói để trình duyệt tự động phát mượt mà không bị chặn chính sách bảo mật.

- [ ] **6. Tối ưu hóa hiệu năng web (Performance & Web Vitals):**
  - Toàn bộ ảnh WebP đều có kích thước tệp dưới 350KB đối với master và dưới 120KB đối với responsive breakpoints.
  - Video WebM dưới 3MB, MP4 dưới 4MB.
  - Triển khai đầy đủ thuộc tính `loading="lazy"` cho các asset từ Section 05 trở xuống, riêng Hero Image/Poster dùng `fetchpriority="high"` để tối ưu Largest Contentful Paint (LCP).

---
*Kế hoạch đã sẵn sàng để chuyển giao sang các bước sinh ảnh chi tiết (01_ART_DIRECTION -> 02_HERO_IMAGE -> 03_SUPPORTING_IMAGES -> 04_HERO_VIDEO -> 05_GIS_CTA_ASSETS).*
