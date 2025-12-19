import React from "react";
import {
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ThankYouPage() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");

  // 🔐 منع الدخول المباشر
  if (success !== "1") {
    return <Navigate to="/" replace />;
  }

  // تغيير اتجاه الصفحة حسب اللغة
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-cyan-50 to-white"
      dir={direction}
    >
      <main className="px-4 pb-12 py-[130px]">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 opacity-20 rounded-full blur-xl"></div>
              <CheckCircle
                className="w-24 h-24 text-teal-500 relative"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {t("thank.title")}
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              {t("thank.subtitle1")}
            </p>
            <p className="text-lg text-slate-500">{t("thank.subtitle2")}</p>
          </div>

          {/* Confirm Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-teal-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("thank.bookingConfirmed")}
                </h3>
                <p className="text-slate-600">{t("thank.emailSent")}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                {t("thank.whatNext")}
              </h4>

              {/* Step 1 */}
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                      {num}
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">
                        {t(`thank.steps.${num}.title`)}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {t(`thank.steps.${num}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              to={"/"}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t("thank.returnHome")}
              {i18n.language === "ar" ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </Link>

            <Link
              to="/about"
              className="text-center bg-white text-teal-600 font-semibold py-4 px-6 rounded-2xl border-2 border-teal-500 hover:bg-teal-50 transition-all duration-300"
            >
              {t("thank.aboutUs")}
            </Link>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t("thank.needHelp")}</h3>
            <p className="mb-6 opacity-90">{t("thank.supportText")}</p>

            <div className="flex flex-col sm:flex-row gap-4" dir="ltr">
              <a
                href="mailto:info@letsveda.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                info@letsveda.com
              </a>

              <a
                href="tel:+962770062747"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                +962 77 006 2747
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-slate-600">
              {t("thank.quote")}
            </blockquote>
            <p className="text-slate-500 mt-2">{t("thank.quoteAuthor")}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
