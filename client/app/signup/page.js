import Footer from "@/components/Footer";

export const metadata = {
  title: "blogspace",
  description: "A social platform where everyone can share their thoughts and ideas.",
};

export default function SignUpPage() {
  return (
    <div className="bg-blue-600">
      <div className="bg-blue-600 w-screen h-screen flex items-center content-center justify-center">
        <div className="rounded-2xl bg-white border-slate-400 border shadow p-5">
          <h1 className="text-blue-600 text-3xl font-semibold">blogspace</h1>
          <p className="text-slate-600 text-md mt-3">New to blogspace? Sign up now!</p>
          <form className="form-control min-w-96">
            <input type="text" className="input input-primary w-full mt-3 bg-white" placeholder="Username" />
            <input type="email" className="input input-primary w-full mt-3 bg-white" placeholder="Email" />
            <input type="password" className="input input-primary w-full mt-3 bg-white" placeholder="Password" />
            <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 w-full mt-3">Sign up</button>
          </form>
          <p className="text-slate-500 text-sm font-semibold mt-3">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
