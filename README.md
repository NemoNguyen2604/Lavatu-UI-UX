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
| SCR-012 | Landing (khách) | `prototype/Landing - Khach.dc.html` | FN-009 | 13: Đầy đủ, Popup hiện số, Sàn mới chạy · Hero 2 số, Sàn mới chạy · Hero 1 số, Sàn mới chạy · Hero không số, Sàn mới chạy · Nổi bật 2 DN, Sàn mới chạy · Nổi bật trống, Sàn mới chạy · Danh mục Sắp có, Sàn mới chạy · Sàn mới (cả trang), Tin nổi bật · Có tin nổi bật (8), Tin nổi bật · Không có tin nổi bật, Đang cần mua · Có tin cần mua (6), Đang cần mua · Không đủ tin cần mua |
| SCR-013 | Trang chủ cá nhân | `prototype/Trang chu ca nhan - Ban chinh.dc.html` | FN-010 | 6: Doanh nghiệp mua và bán, Cá nhân chỉ mua, Tài khoản mới, Hết việc cần làm, Không có tin nổi bật, Khối Số liệu lỗi |
| SCR-001 | Nguồn vật liệu | `prototype/Nguon vat lieu Page.dc.html` | FN-001, FN-002, FN-012, FN-013 | 20: Đang có danh sách, Trang 2, Chỉ 1 trang, Chế độ Danh sách, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Đã sao chép số, Đang lọc danh mục, Vượt giới hạn hiện số, Tin của mình, Đang tải, Không có kết quả, Lỗi tải trang, Tin mua & lưu tin · Tab Cần mua, Tin mua & lưu tin · Tab Cần mua · trống, Tin mua & lưu tin · Đã lưu tin, Tin mua & lưu tin · Có tin nổi bật, Tin mua & lưu tin · Không có kết quả · gợi ý đăng nhu cầu |
| SCR-002 | Chi tiết sản phẩm | `prototype/Chi tiet san pham Page.dc.html` | FN-003, FN-013, FN-014 | 24: Mặc định · chưa đăng nhập, Đã đăng nhập, Popup đăng nhập, Đã hiện số, Lỗi hiện số, Vượt giới hạn hiện số, Đã sao chép số, Hết hàng, Mô tả ngắn, Không có ảnh, Xem ảnh lớn, Lưu & báo cáo · Đã lưu tin, Lưu & báo cáo · Popup báo cáo, Lưu & báo cáo · Báo cáo · thiếu ghi chú, Lưu & báo cáo · Báo cáo thành công, Lưu & báo cáo · Đã báo cáo, Tin của mình · Tin của mình, Tin của mình · Tin của mình · tạm ẩn, Tin của mình · Tin của mình · chờ duyệt lại, Tin của mình · Tin của mình · đã gỡ, Trang · Tin đã kết thúc, Trang · Đang tải, Trang · Lỗi tải trang, Trang · Không tìm thấy |
| SCR-016 | Chi tiết tin cần mua | `prototype/Chi tiet tin can mua - Ban chinh.dc.html` | FN-012 | 16: Mặc định, Chưa đăng nhập, Đã hiện số, Lỗi hiện số, Vượt giới hạn hiện số, Không ảnh · không thông số · giá thoả thuận, Sắp hết hạn (còn 2 ngày), Lưu & báo cáo · Đã lưu tin, Lưu & báo cáo · Popup báo cáo, Lưu & báo cáo · Báo cáo thành công, Lưu & báo cáo · Đã báo cáo, Tin của mình · Tin của mình, Trang · Tin đã kết thúc, Trang · Đang tải, Trang · Lỗi tải trang, Trang · Không tìm thấy |
| SCR-008 | Thông tin đơn vị | `prototype/Thong tin nguoi ban - Ban chinh.dc.html` | FN-005 | 9: Doanh nghiệp · Doanh nghiệp, Doanh nghiệp · Đã đăng nhập, Doanh nghiệp · Popup đăng nhập, Doanh nghiệp · Trang 2, Doanh nghiệp · Tab Cần mua (3 tin), Doanh nghiệp · Không có tin mua, Cá nhân · Cá nhân, Cá nhân · Đã đăng nhập, Cá nhân · Có tin mua |
| SCR-015 | Đăng / Sửa nhu cầu mua | `prototype/Dang nhu cau mua - Ban chinh.dc.html` | FN-012 | 13: Doanh nghiệp, Cá nhân, Có lỗi, Thành công, Sửa tin, Xác nhận gỡ tin, Sửa tin hết hạn, Tin bị tạm ẩn · Sửa tin bị ẩn, Tin bị tạm ẩn · Sửa tin chờ duyệt lại, Tin bị tạm ẩn · Gửi bản mới thành công, Tin bị tạm ẩn · Sửa tin bị ẩn · đã sửa giá, Tin bị tạm ẩn · Sửa tin bị ẩn · Khác, Tin bị tạm ẩn · Gửi duyệt lại thành công |
| SCR-017 | Tin đã lưu | `prototype/Tin da luu - Ban chinh.dc.html` | FN-013 | 6: Tin bán, Tab Tin mua, Vừa bỏ lưu · Hoàn tác, Chưa có tin đã lưu, Đang tải, Lỗi tải trang |
| SCR-009 | Đăng tin / Sửa tin | `prototype/Dang tin ban - Ban chinh.dc.html` | FN-006 | 17: Doanh nghiệp, Cá nhân, Có lỗi, Có lỗi · số lẻ, Bản đồ kho · Bản đồ · chưa nhập địa chỉ, Bản đồ kho · Bản đồ · đã ghim, Bản đồ kho · Bản đồ · không tìm thấy địa chỉ, Thành công, Sửa tin, Sửa tin · lỗi phần đang giữ, Xác nhận gỡ tin, Tin bị tạm ẩn · Sửa tin bị ẩn, Tin bị tạm ẩn · Sửa tin chờ duyệt lại, Tin bị tạm ẩn · Gửi bản mới thành công, Tin bị tạm ẩn · Sửa tin bị ẩn · đã sửa giá, Tin bị tạm ẩn · Sửa tin bị ẩn · Khác, Tin bị tạm ẩn · Gửi duyệt lại thành công |
| SCR-010 | Tin đăng của tôi | `prototype/Tin dang cua toi - Ban chinh.dc.html` | FN-007, FN-015, FN-016 | 16: Mặc định, Không mở trạng thái mẫu, Lọc Tin mua, Tab Cần cập nhật, Tab Hết hạn, Tab Đã bán, Tab Hết hàng, Tab Đã gỡ, Tab Đã gỡ · quản trị viên xoá, Làm mới & đã bán · Đã làm mới tin, Làm mới & đã bán · Popup Đã bán, Làm mới & đã bán · Popup Bán một phần, Làm mới & đã bán · Popup Đã bán · lỗi khối lượng, Làm mới & đã bán · Popup Đã mua (tin mua), Làm mới & đã bán · Hộp hỏi · gạt Hết hàng, Chưa có tin nào |
| SCR-014 | Hồ sơ người bán (chỉnh sửa) | `prototype/Ho so nguoi ban - Ban chinh.dc.html` | FN-011 | 14: Doanh nghiệp · Doanh nghiệp, Doanh nghiệp · Có thay đổi, Doanh nghiệp · Đã lưu, Doanh nghiệp · Yêu cầu đổi tên/MST, Doanh nghiệp · Chờ duyệt đổi tên, Doanh nghiệp · Lỗi logo, Sổ số · Thêm số (trùng), Sổ số · Đủ 5 số, Sổ số · Xoá số bị chặn, Doanh nghiệp chưa xác minh · Chưa xác minh, Doanh nghiệp chưa xác minh · Chưa xác minh · lỗi MST, Cá nhân · Tài khoản cá nhân, Tải trang · Đang tải, Tải trang · Lỗi tải |
| SCR-011 | Rà soát tin đăng | `prototype/Quan tri - Tin dang.dc.html` | FN-008, FN-014, FN-017 | 26: Danh sách, Chọn nhiều, Xem nhanh, Xoá tin (lỗi), Đã xoá · nhật ký, Khôi phục, Ẩn & duyệt lại · Tab Cần cập nhật, Ẩn & duyệt lại · Tab Chờ duyệt lại, Ẩn & duyệt lại · Form Ẩn, Ẩn & duyệt lại · Form Ẩn · Khác (lỗi), Ẩn & duyệt lại · Form Xoá, Ẩn & duyệt lại · Drawer duyệt lại, Ẩn & duyệt lại · Form Không duyệt, Ẩn & duyệt lại · Duyệt lại · không sửa, Ẩn & duyệt lại · Duyệt lại · gửi nhiều lần, Báo cáo, nổi bật & hết hạn · Lọc tin mua, Báo cáo, nổi bật & hết hạn · Tab Bị báo cáo, Báo cáo, nổi bật & hết hạn · Drawer báo cáo, Báo cáo, nổi bật & hết hạn · Bỏ qua báo cáo, Báo cáo, nổi bật & hết hạn · Xử lý · đóng báo cáo, Báo cáo, nổi bật & hết hạn · Ghim nổi bật, Báo cáo, nổi bật & hết hạn · Ghim đủ 8, Báo cáo, nổi bật & hết hạn · Đang ghim, Báo cáo, nổi bật & hết hạn · Tab Đang nổi bật, Báo cáo, nổi bật & hết hạn · Tab Hết hạn, Báo cáo, nổi bật & hết hạn · Tab Đã bán |
| SCR-018 | Giao dịch tự khai | `prototype/Quan tri - Giao dich tu khai.dc.html` | FN-016 | 11: Danh sách · Chờ xác nhận, Danh sách · Chọn nhiều, Danh sách · Lọc tin mua, Danh sách · Tab Đã xác nhận, Danh sách · Tab Không xác nhận, Đối chiếu · Đối chiếu · lệch giá, Đối chiếu · Đối chiếu · thiếu bên đối ứng, Đối chiếu · Form Không xác nhận, Đối chiếu · Form Không xác nhận · Khác (lỗi), Đối chiếu · Xem · đã xác nhận, Đối chiếu · Xem · không xác nhận |
| — | Trang chủ công khai – SEO | `prototype/Trang chu cong khai - SEO.dc.html` | Chưa gán mã | 2: Trang chủ – chuẩn SEO, Đã đóng banner Tura |

Mã CN theo Sheet. Từ 28/10/2026 đã gỡ các màn đặt hàng SCR-003 đến SCR-007 (FN-004 tạm dừng); bản cũ xem trong lịch sử git (commit a28c9a3).

## Cấu trúc

- `index.html` – trang sơ đồ.
- `prototype/` – các màn chính lấy từ Project archive của Claude Design (đã bỏ bản nháp, bản export, bản offline). **Không đổi tên file** trong thư mục này: các màn tham chiếu nhau theo tên file (`dc-import`, link). `Product Card`, `Contact Block`, `Nguon vat lieu - Ban chinh`, `Chi tiet san pham - Ban chinh` là component / màn bọc được màn khác gọi tới.

## Cập nhật

- Xuất lại **Project archive** từ Claude Design; chỉ chép các màn chính và file được chúng tham chiếu vào `prototype/`.
- Thêm màn mới: thêm dòng vào bảng trên và thẻ trong `index.html`.
- Commit: `SCR-xxx: mô tả ngắn`.
