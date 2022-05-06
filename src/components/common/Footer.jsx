export default function Footer() {
  return (
    <div className="bg-slate-200 w-full ">
      <div className="container mx-auto px-24 pt-10 flex flex-col ">
        <div className="flex justify-between">
          <div className="w-1/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              خدمات
            </h5>
            {/* <ul className="mt-6 leading-7">
              <li>
                <a rel="canonical" href="/about">
                  درباره ما
                </a>
              </li>
              <li>
                <a rel="canonical" href="/contact">
                  تماس با ما
                </a>
              </li>
              <li>
                <a rel="canonical" href="/reminder">
                  یادآور بیمه نامه
                </a>
              </li>
              <li>
                <a rel="canonical" href="/faq">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a rel="canonical" href="/trackingRequest">
                  پیگیری خرید
                </a>
              </li>
              <li>
                <a rel="canonical" href="/sanhab-inquiry">
                  استعلام اصالت بیمه نامه
                </a>
              </li>
              <li>
                <a href="https://panel.bimeh.com/" target="_blank">
                  ورود نمایندگان
                </a>
              </li>
            </ul> */}
          </div>
          <div className="w-1/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              پیوندها
            </h5>
            {/* <ul className="mt-6 leading-7">
              <li>
                <a rel="canonical" href="/about">
                  درباره ما
                </a>
              </li>
              <li>
                <a rel="canonical" href="/contact">
                  تماس با ما
                </a>
              </li>
              <li>
                <a rel="canonical" href="/reminder">
                  یادآور بیمه نامه
                </a>
              </li>
              <li>
                <a rel="canonical" href="/faq">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a rel="canonical" href="/trackingRequest">
                  پیگیری خرید
                </a>
              </li>
              <li>
                <a rel="canonical" href="/sanhab-inquiry">
                  استعلام اصالت بیمه نامه
                </a>
              </li>
              <li>
                <a href="https://panel.bimeh.com/" target="_blank">
                  ورود نمایندگان
                </a>
              </li>
            </ul> */}
          </div>
          <div className="w-2/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              در باره ما
            </h5>
            <p className="mt-6 leading-7">
              بیمه دات کام، سامانه استعلام، مقایسه و خرید آنلاین بیمه است. این
              سامانه دارای مجوز بیمه مرکزی، 24 ساعت شبانه روز 7 روز هفته در خدمت
              بیمه‌‌گزاران می‌باشد. در این سایت، امکان خرید اینترنتی انواع بیمه
              نظیر بیمه اتومبیل( بیمه شخص ثالث، بیمه بدنه)، بیمه موتورسیکلت،
              بیمه آتش سوزی و زلزله، بیمه مسافرتی، بیمه درمان، بیمه مسئولیت
              پزشکان، بیمه کرونا، بیمه تجهیزات الکترونیک(بیمه موبایل، بیمه لپ
              تاپ، بیمه تبلت) فراهم است. شما، بیمه‌‌گزاران گرامی می‌توانید قبل
              از خرید اینترنتی بیمه، از مشاوره‌های بیمه کارشناسان بیمه دات کام
              برخوردار شوید. شما می‌توانید به این وب سایت خرید بیمه آنلاین
              مراجعه نموده و با وارد کردن اطلاعات مورد نیاز، قیمت، کیفیت و پوشش
              بیمه‌ بیش از 20 شرکت بیمه‌ معتبر را مقایسه نمایید. سپس، بهترین
              بیمه‌نامه را با توجه به شرایط خود خریداری کنید. بیمه‌‌نامه شما در
              کمترین زمان ممکن به صورت رایگان به نشانی مدنظرتان ارسال خواهد شد.
            </p>
          </div>
        </div>
        <div className="bg-blue-800 w-full px-10 py-8 mt-8 rounded-full flex justify-between">
          <div className="flex-1 text-slate-200">
            <h6 className="font-bold text-2xl my-5">نیاز به راهنمایی دارید؟</h6>
            <p>
              برای مشاوره تخصصی و رایگان در مورد خرید بیمه نامه با کارشناسان ما
              تماس بگیرید.
            </p>
          </div>
          <div className="flex-1 bg-yellow-300 rounded-l-full w-full px-10 p-8 flex justify-between">
            <div className="flex flex-col text-slate-700">
              <h6 className="font-bold">شماره تماس:</h6>
              <span>۰۲۱-۴۳۷۲</span>
            </div>
            <div className="flex flex-col text-slate-700">
              <h6 className="font-bold">ایمیل:</h6>
              <span>info@bimeh.com</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="mt-4">
            <h6>مارا در شبکه های اجتماعی دنبال کنید</h6>
          </div>
          <div className="flex justify-end relative mt-20">
            <span className="p-4 rounded-t-full bg-blue-900  bottom-0 flex justify-center items-start fixed">
              <span className="cursor-pointer mdi mdi-chevron-up-circle text-white mdi-36px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
