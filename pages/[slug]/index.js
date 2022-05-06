import Head from "next/head";
import { useState } from "react";
import { isEmpty } from "loadsh";

import PostCard from "../../src/components/common/PostCard";
import { news } from "../../src/services/mainService";
import Alert from "../../src/components/common/Alert";

export default function News({ data }) {
  const [search, setSearch] = useState("");
  const filteredPost = data.filter((page) => page.page_title.includes(search));

  return (
    <div className="container px-24 mx-auto">
      <Head>
        <title> اخبار صنعت بیمه | بیمه کارآفرین نمایندگی بابازاده</title>
      </Head>
      <div className="bg-slate-100 w-full p-8 my-8 rounded-md border border-slate-200 flex justify-between items-center">
        <h1 className="font-bold text-xl">اخبار صنعت بیمه </h1>

        <div className="flex items-center ">
          <input
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="جستجو..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 my-8">
        {!isEmpty(filteredPost) ? (
          filteredPost.map((news) => <PostCard page={news} key={news.id} />)
        ) : (
          <Alert title="خبری با موضوع جستجو شده یافت نشد :(" />
        )}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await news();
  const data = await response.data.pages;

  return {
    props: { data },
    revalidate: 10,
  };
}
