import Link from "next/link";

const page = () => {
  return (
    <div className="mt-5 ml-5 flex flex-col gap-5 max-w-xs">
      <div className="flex gap-3 items-center">
        <h1 className="text-white text-3xl tracking-tight">Private: </h1>
        <h2 className="text-white text-2xl tracking-normal mt-1">User</h2>
      </div>
      <div className="flex justify-end gap-2">
        <Link
          href={"/"}
          className="px-3 py-1 rounded-md bg-black text-white"
        >
          Toggle Role
        </Link>
        <Link
          href={"/"}
          className="px-3 py-1 rounded-md bg-black text-white"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
export default page;
