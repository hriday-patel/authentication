import Link from "next/link";

type User =  any | {
  id: number,
  name: string,
  Role: string
}

const page = () => {
  // const user = { id: 1, name: "Hriday", Role: "User" };
      const user: User = null;
  if (user) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col p-4 rounded-md bg-neutral-900 border border-slate-500/25 shadow-2xl gap-5 max-w-lg">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <h1 className="font-bold text-xl text-white tracking-tight">
                User:
              </h1>
              <h2 className="font-semibold text-lg tracking tight mt-0.5">
                {user.name}
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="text-neutral-300">Role:</h2>
              <h2 className="text-neutral-300 tracking-tight">{user.Role}</h2>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Link
              href={"/private"}
              className="px-3 py-1 bg-white/25 text-black rounded-md hover:bg-white/50"
            >
              Private
            </Link>
            <button className="text-white bg-red-500 px-3 py-1 rounded-md cursor-pointer hover:contrast-125">
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 mt-5 ml-5">
        <Link
          href={"/sign-up"}
          className="px-3 py-1 rounded-md bg-neutral-800 border border-slate-400/25 shadow-md text-neutral-300 hover:brightness-150"
        >
          Sign Up
        </Link>
        <Link
          href={"/login"}
          className="px-3 py-1 rounded-md bg-neutral-800 border border-slate-400/25 shadow-md text-neutral-300 hover:brightness-150"
        >
          Login
        </Link>
      </div>
    );
  }
};
export default page;
