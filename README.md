# Lavatu – Giao diện (UI/UX)

Bản thiết kế giao diện các màn của Lavatu, xuất từ Claude Design dạng **standalone HTML** (mỗi file tự chứa toàn bộ giao diện, mở trực tiếp bằng trình duyệt).

- **Xem online:** https://nemonguyen2604.github.io/lavatu-ui-ux/ (mở `index.html` – sơ đồ tất cả màn)
- **Đặc tả chức năng (nguồn chính cho dev):** Google Sheet `Lavatu_DacTaChucNang_v2`, tab **DEV**
- Mã màn (`SCR-xxx`) trong tên file trùng với mã trong Sheet (cột *Màn hình*, tab *Màn hình & trường*).

## Cách dùng cho dev

1. Mở task trong tab **DEV** của Sheet → xem cột *Màn hình* (VD `SCR-002`).
2. Mở file `screens/SCR-002_...html` (hoặc link online) để xem giao diện.
3. Quy tắc, validation, text lỗi, API: **làm theo Sheet**. Thiết kế chỉ minh hoạ bố cục và trạng thái; khi thiết kế và Sheet khác nhau thì **Sheet đúng**, báo BA để sửa thiết kế.
4. Thiết kế hiện chỉ có bản **desktop (1440px)**. Mobile hoãn (T-022).

## Danh sách màn

| Mã | Màn | File | Mã CN |
|---|---|---|---|
| SCR-001 | Nguồn vật liệu (danh sách) | `screens/SCR-001_nguon-vat-lieu.html` | FN-001, FN-002 |
| SCR-002 | Chi tiết sản phẩm | `screens/SCR-002_chi-tiet-san-pham.html` | FN-003 |
| SCR-003 | Gửi yêu cầu mua | `screens/SCR-003_gui-yeu-cau-mua.html` | FN-004 |
| SCR-004 | Giỏ hàng | `screens/SCR-004_gio-hang.html` | FN-004 |
| SCR-005 | Đơn mua của tôi | `screens/SCR-005_don-mua.html` | FN-004 |
| SCR-006 | Đơn bán | `screens/SCR-006_don-ban.html` | FN-004 |
| SCR-007 | Chi tiết đơn | `screens/SCR-007_chi-tiet-don.html` | FN-004 |
| SCR-008a | Thông tin người bán – Doanh nghiệp | `screens/SCR-008a_nguoi-ban-doanh-nghiep.html` | FN-005 |
| SCR-008b | Thông tin người bán – Cá nhân | `screens/SCR-008b_nguoi-ban-ca-nhan.html` | FN-005 |
| SCR-009a | Đăng tin – Doanh nghiệp | `screens/SCR-009a_dang-tin-doanh-nghiep.html` | FN-006 |
| SCR-009b | Đăng tin – Cá nhân | `screens/SCR-009b_dang-tin-ca-nhan.html` | FN-006 |

Đang thiết kế (chưa có file): Tin đăng của tôi · Hồ sơ người bán · Quản trị – Rà soát tin · Landing · Trang chủ cá nhân · Prototype nối các màn.

## Quy ước thêm / cập nhật màn

- Đặt file trong `screens/`, tên dạng `SCR-xxx_ten-khong-dau.html` (chữ thường, không dấu, nối bằng `-`). Biến thể thêm hậu tố `a`, `b`.
- Cập nhật màn đã có: **ghi đè đúng file cũ** (giữ nguyên tên) để link không đổi; lịch sử nằm trong git.
- Thêm dòng vào bảng trên và thẻ tương ứng trong `index.html`.
- Commit message: `SCR-xxx: mô tả ngắn` (VD `SCR-004: thêm trạng thái giỏ trống`).
