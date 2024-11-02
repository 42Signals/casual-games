import { useLanguage } from "~/contexts/LanguageContext";

export function BannerAd() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 p-4 mb-10 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center items-center h-32 bg-black/20 dark:bg-black/40 rounded-lg border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.01]">
        <span className="text-white/90 font-semibold text-xl mb-2">{t("ad_space")}</span>
        <span className="text-white/60 text-sm">{t("your_ad_here")}</span>
      </div>
    </div>
  );
}
