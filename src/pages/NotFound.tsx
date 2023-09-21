import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center p-36 gap-y-2">
      <p className="text-lg">존재하지 않는 페이지입니다!</p>
      <Link
        to="/"
        className="block bg-gray-400 rounded-sm px-2 py-1 hover:bg-gray-600 hover:text-white"
      >
        홈으로 이동하기
      </Link>
    </main>
  );
}
