import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col mt-5 ml-5 gap-5 items-end w-fit">
      <h1 className="text-3xl text-white tracking-wide">Admin</h1>
      <Link href={"/"} className="px-3 py-1 rounded-md bg-black text-white w-fit">
        Home
      </Link>
    </div>
  );
};
export default page;
