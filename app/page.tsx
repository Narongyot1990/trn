import LoginPage from "./login/page";
import Booking from "./Booking/page";

const isExist = true;

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        {isExist ? <Booking /> : <LoginPage />}
      </div>
    </main>
  );
}