import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-28 mt-10 flex justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-bold w-2/5 py-4 text-blue-700 ">
          با امکان مدیریت این بخش
        </h3>
        <div className="text-justify mt-4 text-base leading-10 text-slate-500 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/assets/static/images/pagevector.png"
          width={500}
          height={500}
          className="w-4/5"
        />
      </div>
    </section>
  );
}
