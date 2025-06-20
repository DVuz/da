import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          React Learning Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Học React từ cơ bản đến nâng cao một cách dễ hiểu và chi tiết
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/react-basics"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Bắt đầu học React
          </Link>
          <Link
            href="/spa"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
          >
            Tìm hiểu về SPA
          </Link>
        </div>
      </div>

      {/* Course Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card title="React Cơ Bản">
          <p className="mb-4">
            Tìm hiểu React là gì, lợi ích của React, và các khái niệm cơ bản để bắt đầu phát triển ứng dụng.
          </p>
          <Link href="/react-basics" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="SPA - Single Page Application">
          <p className="mb-4">
            Khám phá mô hình Single Page Application, cách hoạt động và lợi ích so với ứng dụng web truyền thống.
          </p>
          <Link href="/spa" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="Redux & Redux Toolkit">
          <p className="mb-4">
            Quản lý state toàn cục với Redux và Redux Toolkit, từ khái niệm cơ bản đến thực hành.
          </p>
          <Link href="/redux" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="Styling trong React">
          <p className="mb-4">
            Các phương pháp styling trong React: CSS Modules, Styled Components, Tailwind CSS và nhiều hơn nữa.
          </p>
          <Link href="/styling" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="React Nâng Cao">
          <p className="mb-4">
            Hooks nâng cao, Performance Optimization, Custom Hooks và các pattern phát triển.
          </p>
          <Link href="/advanced" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="MySQL Database">
          <p className="mb-4">
            Học MySQL từ cơ bản đến nâng cao: thiết kế database, truy vấn SQL, tối ưu hóa và tích hợp với backend.
          </p>
          <Link href="/mysql" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="Express.js Framework">
          <p className="mb-4">
            Web framework cho Node.js: routing, middleware, RESTful APIs, authentication và kết nối React frontend.
          </p>
          <Link href="/express" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>

        <Card title="Sequelize ORM">
          <p className="mb-4">
            Object-Relational Mapping với Sequelize: models, associations, migrations và tích hợp với React API.
          </p>
          <Link href="/sequelize" className="text-blue-600 hover:text-blue-800 font-semibold">
            Tìm hiểu thêm →
          </Link>
        </Card>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Tại sao chọn React Learning Hub?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Nội dung chi tiết</h3>
            <p className="text-gray-600 text-sm">
              Mỗi chủ đề được giải thích kỹ lưỡng với ví dụ cụ thể
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Code examples</h3>
            <p className="text-gray-600 text-sm">
              Nhiều ví dụ code thực tế dễ hiểu và áp dụng
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Cập nhật mới nhất</h3>
            <p className="text-gray-600 text-sm">
              Nội dung được cập nhật theo phiên bản React mới nhất
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Thực hành</h3>
            <p className="text-gray-600 text-sm">
              Tập trung vào thực hành và xây dựng dự án thực tế
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
