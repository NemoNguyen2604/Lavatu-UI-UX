# Lavatu – Giao diện (UI/UX)

Prototype giao diện các màn của Lavatu, xuất từ Claude Design (Project archive). Mỗi màn có **thanh "Trạng thái"** màu tối ở trên cùng để chuyển giữa các trạng thái; mở thẳng một trạng thái bằng `?state=<mã>`.

- **Xem online:** https://nemonguyen2604.github.io/Lavatu-UI-UX/ – trang sơ đồ `index.html` liệt kê mọi màn và mọi trạng thái.
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
| SCR-012 | Landing (khách) | `prototype/Landing - Khach.dc.html` | FN-009 | 9: Đầy đủ, Popup hiện số, Sàn mới chạy · Hero 2 số, Sàn mới chạy · Hero 1 số, Sàn mới chạy · Hero không số, Sàn mới chạy · Nổi bật 2 DN, Sàn mới chạy · Nổi bật trống, Sàn mới chạy · Danh mục Sắp có, Sàn mới chạy · Sàn mới (cả trang) |
| SCR-013 | Trang chủ cá nhân | `prototype/Trang chu ca nhan - Ban chinh.dc.html` | FN-010 | 3: Doanh nghiệp mua và bán, Cá nhân chỉ mua, Tài khoản mới |
| SCR-001 | Nguồn vật liệu | `prototype/Nguon vat lieu Page.dc.html` | FN-001, FN-002 | 15: Đang có danh sách, Trang 2, Chỉ 1 trang, Chế độ Danh sách, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Đã sao chép số, Đang lọc danh mục, Vượt giới hạn hiện số, Tin của mình, Đang tải, Không có kết quả, Lỗi tải trang |
| SCR-002 | Chi tiết sản phẩm | `prototype/Chi tiet san pham Page.dc.html` | FN-003 | 19: Mặc định, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Khối lượng sai, Hết hàng, Mô tả ngắn, Không có ảnh, Xem ảnh lớn, Vượt giới hạn hiện số, Tin của mình, Tin của mình (đợt 2), Đợt 1 · Đợt 1, Đợt 1 · Đợt 1 · Hết hàng, Đợt 1 · Đợt 1 · Lỗi khối lượng, Đang tải, Lỗi tải trang, Không tìm thấy |
| SCR-008 | Thông tin người bán | `prototype/Thong tin nguoi ban - Ban chinh.dc.html` | FN-005 | 7: Doanh nghiệp · Doanh nghiệp, Doanh nghiệp · Đã đăng nhập, Doanh nghiệp · Popup đăng nhập, Doanh nghiệp · Tab đánh giá, Cá nhân · Cá nhân, Cá nhân · Đã đăng nhập, Cá nhân · Tab đánh giá |
| SCR-003 | Gửi yêu cầu mua | `prototype/Gui yeu cau mua - Ban chinh.dc.html` | FN-004 | 5: Mặc định, Có lỗi, Đã hiện số, Đang gửi, Gửi thành công |
| SCR-004 | Giỏ hàng | `prototype/Gio hang - Ban chinh.dc.html` | FN-004 | 10: Có sản phẩm, Giỏ hàng trống, Dòng & nhóm · Cảnh báo đổi giá, Dòng & nhóm · Hết hàng / Tin đã gỡ, Dòng & nhóm · Nhóm không gửi được, Dòng & nhóm · Lỗi khối lượng, Dòng & nhóm · Lỗi cộng dồn, Dòng & nhóm · Gửi xong nhóm A, Tải trang · Đang tải, Tải trang · Lỗi tải |
| SCR-005 | Đơn mua của tôi | `prototype/Don mua cua toi - Ban chinh.dc.html` | FN-004 | 10: Tab · Tất cả, Tab · Cần bạn phản hồi, Tab · Chờ người bán, Tab · Đang xử lý, Tab · Hoàn tất, Tab · Đã đóng, Rỗng & lỗi · Không có kết quả, Rỗng & lỗi · Chưa có đơn, Rỗng & lỗi · Đang tải, Rỗng & lỗi · Lỗi tải |
| SCR-007 | Chi tiết đơn | `prototype/Chi tiet don - Ban chinh.dc.html` | FN-004 | 26: Người mua · Chờ xác nhận, Người mua · Chờ đồng ý điều chỉnh, Người mua · Đã xác nhận, Người mua · Đang giao, Người mua · Chờ xác nhận nhận hàng, Người mua · Hoàn tất, Người mua · Bị từ chối, Người mua · Hết hạn, Người mua · Đã huỷ, Người bán · Chờ xác nhận, Người bán · Chờ đồng ý điều chỉnh, Người bán · Đã xác nhận, Người bán · Đang giao, Người bán · Chờ xác nhận nhận hàng, Người bán · Hoàn tất, Người bán · Bị từ chối, Người bán · Hết hạn, Người bán · Đã huỷ, Lệch & từ chối · Nhập giao lệch −12%, Lệch & từ chối · Nhập vượt tồn, Lệch & từ chối · Mua · lệch −12%, Lệch & từ chối · Mua · lệch −6%, Lệch & từ chối · Từ chối · Hết hàng, Lệch & từ chối · Từ chối · Khác (lỗi), Liên hệ · Bán · người mua chưa xác nhận, Liên hệ · Bán · người mua đã xác nhận |
| SCR-009 | Đăng tin / Sửa tin | `prototype/Dang tin ban - Ban chinh.dc.html` | FN-006 | 12: Doanh nghiệp, Cá nhân, Có lỗi, Thành công, Sửa tin, Xác nhận gỡ tin, Tin bị tạm ẩn · Sửa tin bị ẩn, Tin bị tạm ẩn · Sửa tin chờ duyệt lại, Tin bị tạm ẩn · Gửi bản mới thành công, Tin bị tạm ẩn · Sửa tin bị ẩn · đã sửa giá, Tin bị tạm ẩn · Sửa tin bị ẩn · Khác, Tin bị tạm ẩn · Gửi duyệt lại thành công |
| SCR-010 | Tin đăng của tôi | `prototype/Tin dang cua toi - Ban chinh.dc.html` | FN-007 | 7: Mặc định, Không mở trạng thái mẫu, Tab Hết hàng, Tab Đã gỡ, Tab Cần cập nhật, Tab Đã gỡ · quản trị viên xoá, Chưa có tin nào |
| SCR-006 | Đơn bán | `prototype/Don ban - Ban chinh.dc.html` | FN-004 | 6: Tất cả, Cần phản hồi, Cần giao, Chờ người mua, Hoàn tất, Đã đóng |
| SCR-014 | Hồ sơ người bán (chỉnh sửa) | `prototype/Ho so nguoi ban - Ban chinh.dc.html` | FN-011 | 14: Doanh nghiệp · Doanh nghiệp, Doanh nghiệp · Có thay đổi, Doanh nghiệp · Đã lưu, Doanh nghiệp · Yêu cầu đổi tên/MST, Doanh nghiệp · Chờ duyệt đổi tên, Doanh nghiệp · Lỗi logo, Sổ số · Thêm số (trùng), Sổ số · Đủ 5 số, Sổ số · Xoá số bị chặn, Doanh nghiệp chưa xác minh · Chưa xác minh, Doanh nghiệp chưa xác minh · Chưa xác minh · lỗi MST, Cá nhân · Tài khoản cá nhân, Tải trang · Đang tải, Tải trang · Lỗi tải |
| SCR-011 | Rà soát tin đăng | `prototype/Quan tri - Tin dang.dc.html` | FN-008 | 15: Danh sách, Chọn nhiều, Xem nhanh, Xoá tin (lỗi), Đã xoá · nhật ký, Khôi phục, Ẩn & duyệt lại · Tab Cần cập nhật, Ẩn & duyệt lại · Tab Chờ duyệt lại, Ẩn & duyệt lại · Form Ẩn, Ẩn & duyệt lại · Form Ẩn · Khác (lỗi), Ẩn & duyệt lại · Form Xoá, Ẩn & duyệt lại · Drawer duyệt lại, Ẩn & duyệt lại · Form Không duyệt, Ẩn & duyệt lại · Duyệt lại · không sửa, Ẩn & duyệt lại · Duyệt lại · gửi nhiều lần |

SCR-010 đến SCR-014 tương ứng FN-007 đến FN-011 trong Sheet.

## Cấu trúc

- `index.html` – trang sơ đồ.
- `prototype/` – nguyên bản Project archive từ Claude Design. **Không đổi tên file** trong thư mục này: các màn tham chiếu nhau theo tên file (`dc-import`, link). Các file `* - export`, `* offline`, `* Standalone` là bản nháp/biến thể của Claude Design, dev chỉ cần các file liệt kê ở bảng trên.
- `archive-standalone-cu/` – bản standalone cũ (trước khi có thanh trạng thái), giữ để đối chiếu, **không dùng làm chuẩn**.

## Cập nhật

- Xuất lại **Project archive** từ Claude Design, thay toàn bộ thư mục `prototype/`.
- Thêm màn mới: thêm dòng vào bảng trên và thẻ trong `index.html`.
- Commit: `SCR-xxx: mô tả ngắn`.
