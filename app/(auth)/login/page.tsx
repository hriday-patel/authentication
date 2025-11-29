import Form from "next/form";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl border border-neutral-400/25 shadow-lg bg-black/25">
      <h1 className="mb-10 font-bold tracking-tight text-2xl">Login</h1>
      <Form action={""} className="flex flex-col gap-5">
        <div className="flex flex-col justify-center items-start p-3 gap-2 bg-neutral-900 rounded-md">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="focus:outline focus:outline-white ease-linear border border-white/25 w-full bg-slate-700/25 px-3 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-3 gap-2 bg-neutral-900 rounded-md">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="focus:outline focus:outline-white ease-linear border border-white/25 w-full bg-slate-700/25 px-3 py-1 rounded-md"
          />
        </div>
        <div className="flex justify-end mt-10 gap-4 items-center">
          <Link
            href={"/sign-up"}
            className="text-neutral-400 hover:underline hover:brightness-150"
          >
            Sign Up
          </Link>
          <button
            type="submit"
            className="px-3 py-1 rounded-md bg-neutral-800 border border-slate-400/25 shadow-md text-neutral-300 hover:brightness-150"
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};
export default page;
