import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PostCard from "../../../src/components/common/PostCard";
import { showListForId } from "../../../src/services/mainService";

export default function archivePage({ data }) {
  const router = useRouter();
  // console.log(router.asPath);
  const [search, setSearch] = useState("");

  const filteredPost = data.pages?.filter((page) =>
    page.page_title.includes(search)
  );

  return (
    <div className="w-full">
      <Head>
        <title>{data.page_title} | بیمه کارآفرین نمایندگی بابازاده</title>
      </Head>

      <div className="container px-24 mx-auto">
        <div className="bg-slate-100 w-full p-8 my-8 rounded-md border border-slate-200 flex justify-between items-center">
          <div className="flex items-center ">
            <input
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="جستجو..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-4 my-8">
          {filteredPost.map((page) => (
            <PostCard page={page} key={page.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(router) {
//   const response = await showListForId(router.query.id);
//   const data = await response.data;

//   return {
//     props: { data },
//   };
// }
