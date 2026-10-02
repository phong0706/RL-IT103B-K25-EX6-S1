const priceShaker = 120000;
const priceGloves = 180000;
const priceStrap = 150000;

let rawOrderCode = "";
let isCodeValid = false;
let userChoice = 2; 

do {
  const currentChoice = userChoice;

  switch (currentChoice) {
    case 1:
      rawOrderCode = "  shaker-vip  ";
      const cleanCode = rawOrderCode.trim().toUpperCase();
      if (cleanCode.length >= 8) {
        isCodeValid = true;
        console.log("Đã chuẩn hóa mã thành công:", cleanCode);
      } else {
        isCodeValid = false;
        console.log("Mã đơn hàng không hợp lệ (độ dài tối thiểu 8 ký tự).");
      }
      break;

    case 2:
      rawOrderCode = "  shaker-vip  ";
      const verifiedCode = rawOrderCode.trim().toUpperCase();
      if (!isCodeValid || verifiedCode.length < 8) {
        console.log("Lỗi: Vui lòng nhập và xác thực mã đơn hàng hợp lệ trước khi in hóa đơn!");
        userChoice = 3; 
        break;
      }

      let itemPrice = 0;
      let itemName = "Không rõ";
      if (verifiedCode.includes("SHAKER")) {
        itemPrice = priceShaker;
        itemName = "Bình lắc (Shaker)";
      } else if (verifiedCode.includes("GLOVES")) {
        itemPrice = priceGloves;
        itemName = "Găng tay (Gloves)";
      } else if (verifiedCode.includes("STRAP")) {
        itemPrice = priceStrap;
        itemName = "Dây kéo lưng (Strap)";
      }

      const isVIP = verifiedCode.includes("VIP");
      const finalAmount = isVIP ? itemPrice * 0.9 : itemPrice;
      const borderLine = "-".repeat(40);

      console.log(borderLine);
      console.log("       BIÊN LAI BÁN LẺ PHỤ KIỆN GYM      ");
      console.log(borderLine);
      console.log(`- Sản phẩm    : ${itemName}`);
      console.log(`- Giá niêm yết: ${itemPrice.toLocaleString("vi-VN")} VNĐ`);
      console.log(`- Ưu đãi hội  : ${isVIP ? "Thẻ VIP (Giảm 10%)" : "Không có"}`);
      console.log(`- Tổng thanh toán: ${finalAmount.toLocaleString("vi-VN")} VNĐ`);
      console.log(borderLine);

      userChoice = 3; 
      break;

    case 3:
      console.log("Đã thoát chương trình quản lý quầy bán lẻ.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
      userChoice = 3;
      break;
  }
} while (userChoice !== 3);