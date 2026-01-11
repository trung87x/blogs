// ==========================
// 🧠 Model 5: Kiểm soát các trạng thái có thể xảy ra
// Mục tiêu: Hạn chế lỗi logic bằng cách xác định rõ các trạng thái hợp lệ
// ==========================

// Ngữ cảnh: Theo dõi trạng thái của một đơn hàng

// Cách 1: Dùng literal union type
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

function updateOrderStatus(status: OrderStatus) {
  console.log('Trạng thái đơn hàng:', status);
}

updateOrderStatus('pending'); // ✅
updateOrderStatus('cancelled'); // ✅
// updateOrderStatus('lost'); // ⛔ lỗi: 'lost' không thuộc OrderStatus

// ==========================
// Cách 2: Dùng enum nếu cần cấu trúc rõ ràng hơn

enum PaymentStatus {
  Unpaid = 'unpaid',
  Paid = 'paid',
  Refunded = 'refunded',
}

function checkPayment(status: PaymentStatus) {
  if (status === PaymentStatus.Paid) {
    console.log('Đã thanh toán');
  }
}

// ==========================
// Cách 3: Discriminated Union + Type Guard
// Ngữ cảnh: Xử lý thông báo (message) với nhiều loại khác nhau

type TextMessage = {
  type: 'text';
  content: string;
};

type ImageMessage = {
  type: 'image';
  url: string;
  width: number;
  height: number;
};

type VideoMessage = {
  type: 'video';
  url: string;
  duration: number;
};

type Message = TextMessage | ImageMessage | VideoMessage;

function handleMessage(msg: Message) {
  switch (msg.type) {
    case 'text':
      console.log('Text:', msg.content);
      break;
    case 'image':
      console.log(`Image: ${msg.url} - ${msg.width}x${msg.height}`);
      break;
    case 'video':
      console.log(`Video: ${msg.url} - ${msg.duration}s`);
      break;
    default:
      const _exhaustiveCheck: never = msg;
      return _exhaustiveCheck;
  }
}

// ✅ TypeScript đảm bảo bạn đã xử lý hết các trường hợp
// Nếu quên case 'video', compiler sẽ báo lỗi ở biến `_exhaustiveCheck`

// ==========================
// Cách 4: Type Guard tùy chỉnh
// Ngữ cảnh: Kiểm tra dữ liệu trả về có phải dạng lỗi

type ApiResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

function isError(response: ApiResponse): response is { success: false; error: string } {
  return !response.success && typeof response.error === 'string';
}

const res: ApiResponse = { success: false, error: 'Lỗi 500' };

if (isError(res)) {
  console.log('Lỗi:', res.error); // ✅ TypeScript biết `res` có `error`
}
