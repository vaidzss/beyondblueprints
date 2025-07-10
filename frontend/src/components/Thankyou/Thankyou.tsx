import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="min-h-screen bg-[#310e10] flex items-center justify-center text-center px-4">
      <div className="text-white font-plus">
        <h1 className="text-3xl font-libre mb-4">🎉 Thank You!</h1>
        <p className="mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
        <Link to="/" className="bg-white text-[#310e10] px-4 py-2 rounded hover:bg-yellow-200 transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
