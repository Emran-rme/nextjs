import Link from "next/link";

import config from "../../services/config.json";
import cardStyles from "../../../styles/PostCardHorizontal.module.css";

export default function PostCardHorizontal({ page }) {
  return (
    <div className={cardStyles.postCard}>
      <div className="w-1/3 max-h-52 border rounded-lg overflow-hidden bg-gray-200">
        <img
          src={config.karafarinBase + page.thumbnail_image_url}
          className="w-full"
        />
      </div>
      <div className="flex mr-8 flex-col flex-1">
        <div className="w-full py-3">
          <h4 className="font-bold text-gray-500 text-lg cursor-pointer hover:text-blue-500">
            <span className="mdi mdi-card-text-outline ml-2" />
            <Link href={`/news/${page.id}/${page.page_slug}`}>
              <a>{page.page_title}</a>
            </Link>
          </h4>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-xs">
            <span className="mdi mdi-calendar-month-outline ml-1" />
            <span>تاریخ: </span>
            <h6 className="text-gray-600 border-b border-dashed border-gray-500 inline">
              {new Date(page.created_at).toLocaleDateString("fa-IR")}
            </h6>
          </div>
          <div className="relative flex-1 flex justify-end items-center">
            <div className={cardStyles.more}>
              <Link href={`/news/${page.id}/${page.page_slug}`}>
                <a className="flex-shrink-0 cursor-pointer bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded">
                  <span className="mdi mdi-chevron-left mx-1"></span>
                  <span>ادامه...</span>
                </a>
              </Link>
            </div>
            <span className="mdi mdi-arrow-left-thin mdi-24px flex items-center text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
