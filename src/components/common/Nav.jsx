import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "loadsh";

import { setCategories } from "../../redux/actions/main";
import config from "../../services/config.json";

export default function Nav() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(setCategories());
  }, []);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-24">
        <div className="flex justify-between ">
          <div className="w-1/5 transition liner delay-150 border-b hover:border-b hover:border-blue-500 duration-300 cursor-pointer pb-4 ">
            <Link href="/">
              <a>
                <Image
                  src="/assets/static/images/logo-h.png"
                  width={204}
                  height={75}
                />
              </a>
            </Link>
          </div>
          <div className="w-2/3 flex items-center justify-start px-5">
            <ul className="nav">
              {!isEmpty(data) &&
                data.map((item) =>
                  item.show_In_Menu ? (
                    <li
                      className={`bg-slate-50 rounded mx-1 ${
                        item.drop_Down_Menu && "dropdown-top-menu"
                      }`}
                      key={item.id}
                    >
                      <Link href={`/${item.category_slug}`}>
                        <a>{item.category_name}</a>
                      </Link>
                      {item.drop_Down_Menu ? (
                        <div className="dropdown-content">
                          <ul className="-intro-y bg-white border-t-4 border-blue-600 rounded flex ">
                            {item.get_category?.map((childCategory) => (
                              <li key={childCategory.id}>
                                <Link
                                  href={`/page/${childCategory.id}/${childCategory.category_slug}`}
                                >
                                  <a>
                                    <img
                                      src={
                                        config.karafarinBase +
                                        childCategory.category_image_url
                                      }
                                      alt={childCategory.category_name}
                                    />
                                    <span>{childCategory.category_name}</span>
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  ) : null
                )}
              <li className="bg-slate-50 rounded mx-1">
                <Link href="/news">
                  <a>اخبار صنعت بیمه</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 flex items-center px-2">
            <Link href="/courses">
              <a className="border rounded-xl text-center text-blue-800 text-sm border-blue-700 w-full py-1 px-4 cursor-pointer hover:bg-slate-100 ">
                <span className="mdi mdi-basket-outline ml-3" />
                <span>فروشگاه</span>
              </a>
            </Link>
            <a className="relative -right-4 border border-r-0 hover:border hover:rounded-xl rounded-l-xl text-sm text-center text-blue-800 border-blue-700 w-full py-1 px-4 cursor-pointer hover:bg-slate-100 ">
              <span className="mdi mdi-shopping ml-3" />
              <span>سبد خرید</span>
            </a>
          </div>
          <div className="w-1/5 flex items-center px-2">
            <Link href="/auth/login">
              <a className="flex items-center hover:text-blue-600">
                <span className="mdi mdi-account-lock-open-outline ml-2 mdi-24px" />
                <span className="text-sm">ورود / ثبت نام</span>
              </a>
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
