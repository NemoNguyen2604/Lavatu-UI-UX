# Lavatu – Giao diện (UI/UX)

Prototype giao diện các màn của Lavatu, xuất từ Claude Design (Project archive). Mỗi màn có **thanh "Trạng thái"** màu tối ở trên cùng để chuyển giữa các trạng thái; mở thẳng một trạng thái bằng `?state=<mã>`.

- **Xem online:** https://nemonguyen2604.github.io/lavatu-ui-ux/ – trang sơ đồ `index.html` liệt kê mọi màn và mọi trạng thái.
- **Đặc tả chức năng (nguồn chính):** Google Sheet `Lavatu_DacTaChucNang_v2`, tab **DEV**. Mã `SCR-xxx` trùng với cột *Màn hình* trong Sheet.

## Cách dùng cho dev

1. Mở task trong tab **DEV** → xem cột *Màn hình* (VD `SCR-002`).
2. Mở trang sơ đồ, bấm màn đó; bấm chip trạng thái để xem đúng trường hợp của task (VD *Hết hàng*).
3. Quy tắc, validation, text lỗi, API: **làm theo Sheet**. Thiết kế và Sheet khác nhau thì Sheet đúng, báo BA.
4. Chỉ có bản **desktop 1440px**; mobile hoãn (T-022).
5. Thanh "Trạng thái" chỉ dùng để xem thiết kế, **không code** vào sản phẩm.

## Yêu cầu khi mở

- Phải mở qua web (GitHub Pages hoặc web server). Bấm đúp file `.dc.html` trên máy sẽ **không chạy**.
- Cần internet: trang tải React/Babel từ `unpkg.com`.
- Chạy trên máy: trong thư mục repo chạy `npx serve .` (hoặc `python3 -m http.server`) rồi mở địa chỉ được in ra.

## Danh sách màn

| Mã | Màn | File | Mã CN | Trạng thái |
|---|---|---|---|---|
| SCR-012 | Landing (khách) | `prototype/Landing - Khach.dc.html` | FN-009 | 2: Mặc định, Popup hiện số |
| SCR-013 | Trang chủ cá nhân | `prototype/Trang chu ca nhan - Ban chinh.dc.html` | FN-010 | 3: Doanh nghiệp mua và bán, Cá nhân chỉ mua, Tài khoản mới |
| SCR-001 | Nguồn vật liệu | `prototype/Nguon vat lieu Page.dc.html` | FN-001, FN-002 | 11: Mặc định, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Đã sao chép số, Đang lọc danh mục, Dạng danh sách, Đang tải, Không có kết quả, Lỗi tải trang |
| SCR-002 | Chi tiết sản phẩm | `prototype/Chi tiet san pham Page.dc.html` | FN-003 | 13: Mặc định, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Khối lượng sai, Hết hàng, Mô tả ngắn, Không có ảnh, Xem ảnh lớn, Đang tải, Lỗi tải trang, Không tìm thấy |
| SCR-008 | Thông tin người bán | `prototype/Thong tin nguoi ban - Ban chinh.dc.html` | FN-005 | 7: Doanh nghiệp, Đã đăng nhập, Popup đăng nhập, Tab đánh giá, Cá nhân, Đã đăng nhập, Tab đánh giá |
| SCR-003 | Gửi yêu cầu mua | `prototype/Gui yeu cau mua - Ban chinh.dc.html` | FN-004 | 5: Mặc định, Có lỗi, Đã hiện số, Đang gửi, Gửi thành công |
| SCR-004 | Giỏ hàng | `prototype/Gio hang - Ban chinh.dc.html` | FN-004 | 2: Có sản phẩm, Giỏ hàng trống |
| SCR-005 | Đơn mua của tôi | `prototype/Don mua cua toi - Ban chinh.dc.html` | FN-004 | 1: Mặc định |
| SCR-007 | Chi tiết đơn | `prototype/Chi tiet don - Ban chinh.dc.html` | FN-004 | 18: Chờ xác nhận, Chờ đồng ý điều chỉnh, Đã xác nhận, Đang giao, Chờ xác nhận nhận hàng, Hoàn tất, Bị từ chối, Hết hạn, Đã huỷ, Chờ xác nhận, Chờ đồng ý điều chỉnh, Đã xác nhận, Đang giao, Chờ xác nhận nhận hàng, Hoàn tất, Bị từ chối, Hết hạn, Đã huỷ |
| SCR-009 | Đăng tin / Sửa tin | `prototype/Dang tin ban - Ban chinh.dc.html` | FN-006 | 6: Doanh nghiệp, Cá nhân, Có lỗi, Thành công, Sửa tin, Xác nhận gỡ tin |
| SCR-010 | Tin đăng của tôi | `prototype/Tin dang cua toi - Ban chinh.dc.html` | FN-007 | 5: Mặc định, Không mở trạng thái mẫu, Tab Hết hàng, Tab Đã gỡ, Chưa có tin nào |
| SCR-006 | Đơn bán | `prototype/Don ban - Ban chinh.dc.html` | FN-004 | 6: Tất cả, Cần phản hồi, Cần giao, Chờ người mua, Hoàn tất, Đã đóng |
| SCR-011 | Rà soát tin đăng | `prototype/Quan tri - Tin dang.dc.html` | T-023 | 7: Danh sách, Chọn nhiều, Xem nhanh, Xoá tin (lỗi), Đã xoá · nhật ký, Khôi phục, Đã xoá (không có Khôi phục) |

Đang thiết kế: SCR-014 Hồ sơ người bán (chỉnh sửa).
SCR-010 đến SCR-014 tương ứng FN-007 đến FN-011 trong Sheet.

## Cấu trúc

- `index.html` – trang sơ đồ.
- `prototype/` – nguyên bản Project archive từ Claude Design. **Không đổi tên file** trong thư mục này: các màn tham chiếu nhau theo tên file (`dc-import`, link). Các file `* - export`, `* offline`, `* Standalone` là bản nháp/biến thể của Claude Design, dev chỉ cần các file liệt kê ở bảng trên.
- `archive-standalone-cu/` – bản standalone cũ (trước khi có thanh trạng thái), giữ để đối chiếu, **không dùng làm chuẩn**.

## Cập nhật

- Xuất lại **Project archive** từ Claude Design, thay toàn bộ thư mục `prototype/`.
- Thêm màn mới: thêm dòng vào bảng trên và thẻ trong `index.html`.
- Commit: `SCR-xxx: mô tả ngắn`.
