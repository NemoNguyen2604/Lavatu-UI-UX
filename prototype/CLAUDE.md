# Lavatu — bối cảnh dự án (product designer)

## 1. Lavatu là gì
- Sàn giao dịch B2B/B2C vật liệu dư thừa, phế liệu, nguyên liệu thứ cấp cho kinh tế tuần hoàn tại Việt Nam (lavatu.vn).
- Đa vật liệu: điện tử, dệt may, nông nghiệp, kim loại, nhựa, giấy… Không thu hẹp về một loại.
- Người bán: doanh nghiệp/cá nhân có vật liệu dư thừa. Người mua: doanh nghiệp cần nguyên liệu thứ cấp, cơ sở thu gom, cơ sở tái chế.
- Giá trị cốt lõi: tìm đúng vật liệu nhanh, thông tin minh bạch, giao dịch ghi nhận rõ ràng.
- Lavatu độc lập, KHÔNG liên quan GRAC-EPR (epr.grac.vn). Không dùng pattern/thuật ngữ/luồng của GRAC-EPR.

## 2. Hiện trạng
- GĐ1 đã production, đang pilot: đăng ký/đăng nhập (OTP email), hồ sơ cá nhân & doanh nghiệp, xác minh DN, đăng bán & quản lý tin, danh mục vật liệu, tìm kiếm, giỏ hàng, đơn hàng, đánh giá, khiếu nại, chat realtime, thông báo, tin tức, trợ lý AI "Lavi" (tra đơn, tìm SP, FAQ), chọn địa chỉ trên bản đồ, Admin.
- Vai trò: Khách, Personal, Business (thêm quyền bán), Admin/Sub-admin. Personal nâng cấp được lên Business.
- GĐ2 (chỉ thiết kế khi được yêu cầu): cây vật liệu phân cấp, Material Passport, truy xuất dòng vật liệu, đo lường tác động môi trường, AI gợi ý đối tác/đầu ra.
- Chỉ web, chỉ tiếng Việt, Chrome/Edge.
- **Chỉ thiết kế bản desktop web (1440px). KHÔNG làm bản mobile** cho mọi màn hình từ nay (Travis chốt 11/10/2026). Next.js + Tailwind + Ant Design + Lucide → thiết kế phải dựng được bằng component thông dụng.

## 3. Thiết kế lại (v2)
- Luồng chức năng/nghiệp vụ đang được BA thiết kế lại. Không coi UI/luồng cũ là đúng mặc định.
- Nguồn đã chốt: Google Sheet "Lavatu_DacTaChucNang_v2" (FN-xxx, BR-xxx, SCR-xxx). Mỗi màn hình được giao sẽ kèm mã FN + mô tả.
- Thông tin chưa chốt: tự chọn phương án hợp lý, ghi rõ là giả định, liệt kê câu hỏi cần chốt. Không tự thêm chức năng ngoài phạm vi.

## Quyết định đã chốt
- Phạm vi đầu ra (Travis chốt 13/10/2026): mỗi màn hình chỉ làm 1 trang trường hợp đúng (happy path) — prototype tương tác, chưa đăng nhập. KHÔNG làm canvas trạng thái (loading, lỗi, rỗng, hết hàng, lỗi nhập…) trừ khi được yêu cầu riêng, kể cả khi brief có liệt kê.
- SCR-001 Nguồn vật liệu: chọn phương án A (khối "Thẻ người liên hệ") cho khối liên hệ trên thẻ sản phẩm.

## 4. Design system: Lavatu Design System
- Màu: green/600 #0f6554 (nút, link); green/950 #003527 (tiêu đề, footer); nhấn lime #84cc16; trung tính chỉ slate.
- Màu nhóm vật liệu: điện tử #0f6554 · dệt may #bc7f11 · nông nghiệp #828009 · kim loại #7b7c86 · nhựa #04309e · giấy #8990b1.
- Font: (brief bị cắt — theo DS: Newsreader cho Display/H1–H3, Be Vietnam Pro cho phần còn lại; chờ xác nhận)
