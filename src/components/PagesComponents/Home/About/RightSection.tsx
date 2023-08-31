import ChooseBranch from "./ChooseBranch/ChooseBranch";

const RightSection = () => {
  return (
    <div className="w-full md:w-[600px] ">
      <h2 className="font-overline-lg sd:font-header-4 text-white mb-[8px] sd:mb-[24px]">
        رستوران‌های زنجیره‌ای ترخینه
      </h2>
      <p className="font-caption-md sd:font-body-xl text-white text-justify">
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
        زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و
        طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
        ارائه دهیم.
      </p>
      <ChooseBranch />
    </div>
  );
};

export default RightSection;
