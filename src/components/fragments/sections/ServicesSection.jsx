import Link from "next/link";

export default function ServicesSection({ styles }) {
  return (
    <section className="container mx-auto px-24 my-14">
      <div className="flex flex-col rounded-r-3xl rounded-l-full justify-between">
        <div className="w-full p-2">
          <div className="w-full h-full rounded-2xl transition-all duration-500 shadow-md max-h-60  shadow-blue-500 p-0 hover:rotate-1 cursor-pointer hover:bg-blue-200 text-slate-800 text-justify">
            <div
              className={`flex w-full h-full transition-all duration-500 rounded-2xl overflow-hidden hover:shadow-2xl bg-yellow-100 hover:-rotate-1 hover:scale-105 text-slate-800 text-justify ${styles.eserviceImage}`}
            >
              <div className=" p-5 bg-blue-100 shadow-xl rounded-l-full flex items-center ">
                <h3 className="font-bold text-gray-600">خدمات الکترونیک</h3>
              </div>
              <span className="flex-1 py-8 px-4 text-gray-700 text-sm text-justify">
                جهت سهولت کار شما میتوانید از منوی سمت چپ زا خدذمات الکترونیک
                استفاده کنید
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 bg-gradient-to-t from-slate-50 rounded-b-2xl border-b">
          <div
            className={`w-full p-8 grid grid-cols-6 gap-4 ${styles.servicesMenu}`}
          >
            <Link href="/">
              <a className="intro-x flex flex-col items-center">
                <div className={styles.rotate}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    version="1.1"
                    viewBox="0 0 150 150"
                  >
                    <circle
                      fill="none"
                      cx="121.37"
                      cy="54.05"
                      r="8.59"
                      stroke="#53127a"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      transform="rotate(-18.213 121.38 54.044)"
                    ></circle>
                    <path
                      d="M118.03 57.07c-1.67-1.84-1.52-4.7.32-6.37s4.7-1.52 6.37.32 1.52 4.7-.32 6.37a4.508 4.508 0 0 1-6.37-.32z"
                      fill="#79b552"
                    ></path>
                    <path
                      d="m101.11 58.87-.17-9.06a3.801 3.801 0 0 0-3.82-3.73h-.52a3.807 3.807 0 0 0-3.78 3.99l.73 14.56c.05 1.07.74 2.02 1.74 2.4l11.56 4.46-7.47 18.34-10.46 9.46c-.66.6-1.51.95-2.4.99l-15.73.78c-2.43.12-4.3 2.19-4.18 4.62h0c.13 2.42 2.19 4.29 4.61 4.17l19.03-.92c.89-.04 1.74-.39 2.41-.99l9.39-8.49c1-.91 2.57.06 2.21 1.36l-3.71 13.48c-.2.71-.59 1.35-1.13 1.84l-10.36 9.37a4.408 4.408 0 0 0-.31 6.22l.08.09a4.408 4.408 0 0 0 6.22.31l11.74-10.62c.46-.42.82-.94 1.03-1.52l14.7-39.67 6.32 11.99c.5.95.46 2.09-.1 3.01l-3.77 6.16c-1.06 1.74-.57 4 1.12 5.14h0c1.77 1.19 4.16.69 5.31-1.1l6.76-10.5c.6-.94.65-2.13.11-3.11l-10.92-19.96a7.697 7.697 0 0 0-4.22-3.57l-20.17-6.99a2.72 2.72 0 0 1-1.85-2.51z"
                      fill="none"
                      stroke="#53127a"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <g
                      fill="none"
                      stroke="#53127a"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    >
                      <path d="m80.66 41.99-3.7 3.38a7.995 7.995 0 0 1-5.38 2.09l-9.89-.01-13.14.01c-1.99 0-3.91-.74-5.38-2.09l-3.7-3.38m48.16 23.39h-7.94v-2.65a5.38 5.38 0 0 1 4.6-5.32l3.35-.46m-63.21-.98 10.48 1.44c2.64.38 4.6 2.65 4.6 5.32v2.65H24.43M16.3 49.57v24.99"></path>
                      <path d="m16.3 49.57-4.16-4.52c-.49-.46-.78-1.1-.78-1.78v-4.93c0-1.34 1.09-2.43 2.43-2.43h9.5l8.22-15.76a8.615 8.615 0 0 1 6.87-3.41h42.44c2.7 0 5.24 1.26 6.87 3.41l8.22 15.76h9.5c1.34 0 2.43 1.09 2.43 2.43v4.93c0 .68-.28 1.32-.78 1.78l-1.58 1.72M87.63 74.56v.93c0 4.21 3.42 7.63 7.63 7.63h0m-63.7-8.56v.93c0 4.21-3.42 7.63-7.63 7.63h0c-4.21 0-7.63-3.42-7.63-7.63v-.93m78.47 0H24.43m29.16-9.18H65.6M31.96 35.91h55.27"></path>
                    </g>
                  </svg>
                </div>
                <h4>بیمه</h4>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
