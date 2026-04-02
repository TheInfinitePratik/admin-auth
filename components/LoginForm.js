import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">
          Welcome Back
        </h2>

        <form className="space-y-5">

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email
            </label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-sm mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 text-sm mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex justify-end text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition">
            Log In
          </button>

        </form>

        <div className="text-center text-gray-400 mt-6 text-sm">
          or continue with
        </div>

        <div className="flex justify-center mt-4 gap-3">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>

          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
       <Link href="/signup" className="text-blue-400 hover:underline">
  Sign up
</Link>
        </p>

      </div>
    </div>
  );
};

export default LoginForm;