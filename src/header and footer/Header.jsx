import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import GlobeIcon from "../icons/GlobeIcon";
import ArrowBottomIcon from "../icons/ArrowBottomIcon";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logoAr from "../assets/logo-ar.svg";
const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCollapsed = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setLangDropdownOpen(false);
  };

  // Close mobile menu when clicking on navigation items
  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".toggle-lang")) {
        setLangDropdownOpen(false);
      }
      // Close tablet dropdown when clicking outside
      if (
        !event.target.closest(".tablet-nav-container") &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full pt-4 md:pt-[30px] z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <NavLink to="/">
            <img
              src={i18n.language === "ar" ? logoAr : logo}
              alt="logo"
              className="w-[100px] md:w-[120px] h-auto max-h-[53px]"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {["home", "pricing", "about", "blog"]?.map((key) => (
            <NavLink
              key={key}
              to={key === "home" ? "/" : `/${key}`}
              className={({ isActive }) =>
                `${isActive ? "text-[var(--primary-color)] font-bold" : "text-[var(--dark-color)]"} capitalize text-[16px] xl:text-[18px] leading-[18px] cursor-pointer hover:text-[var(--primary-color)] transition-colors duration-200`
              }
            >
              {t(key)}
            </NavLink>
          ))}
        </nav>

        {/* Tablet Navigation Dropdown */}
        <div className="tablet-nav-container hidden md:block lg:hidden relative">
          <button
            className="flex items-center gap-2 text-[var(--dark-color)] hover:opacity-80 transition-opacity duration-200"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-[16px] font-medium">Menu</span>
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${menuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></span>
            </div>
          </button>

          {/* Tablet Dropdown Menu */}
          <div
            className={`absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-40 overflow-hidden transition-all duration-300 ${
              menuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="py-4">
              {["home", "pricing", "about", "blog"]?.map((key, index) => (
                <NavLink
                  key={key}
                  to={key === "home" ? "/" : `/${key}`}
                  className={`block capitalize text-[var(--dark-color)] text-[16px] leading-[24px] px-6 py-3 hover:bg-gray-50 hover:text-[var(--primary-color)] transition-all duration-200 ${
                    index !== 3 ? "border-b border-gray-100" : ""
                  }`}
                  onClick={handleNavItemClick}
                >
                  {t(key)}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Language + Auth Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          {/* Language Selector */}
          <div className="toggle-lang relative">
            <button
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={toggleLanguage}
              type="button"
              // aria-expanded={langDropdownOpen}
              // aria-haspopup="true"
            >
              <GlobeIcon />
              <span className="capitalize text-[var(--dark-color)] text-[15px] lg:text-[17px] whitespace-nowrap">
                {i18n.language === "ar" ? "English" : "العربية"}
              </span>
              {/* <ArrowBottomIcon
                className={`transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
              /> */}
            </button>

            {/* <ul
              className={`dropdown absolute top-[45px] ${i18n.language === "ar" ? "right-0" : "left-0"} w-[120px] bg-white border border-gray-200 rounded-[6px] shadow-lg z-20 overflow-hidden transition-all duration-200 ${
                langDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            > */}
            {/* <li
                data-lang="ar"
                className="border-b border-gray-100 py-2 px-3 text-right cursor-pointer hover:bg-[var(--dark-color)] hover:text-white transition-colors duration-200"
                onClick={toggleLanguage}
              >
                {t("arabic")}
              </li>
              <li
                data-lang="en"
                className="py-2 px-3 text-right cursor-pointer hover:bg-[var(--dark-color)] hover:text-white transition-colors duration-200"
                onClick={toggleLanguage}
              >
                {t("english")}
              </li> */}
            {/* </ul> */}
          </div>

          {/* Auth Buttons */}
          {/* <a
            href={
              i18n?.language === "ar"
                ? "https://selecttime.appointy.com/veda/packages"
                : "https://selecttime.appointy.com/veda/packages"
            }
            className="capitalize text-[var(--dark-color)] text-[14px] lg:text-[16px] leading-[27px] px-4 lg:px-5 py-2 lg:py-2.5 rounded-[14px] border border-[#1c3F3A] hover:bg-[var(--dark-color)] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            {t("login")}
          </a> */}
          <a
            href={
              i18n?.language === "ar"
                ? "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV_AR"
                : "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV"
            }
            className="btn bg-[var(--dark-color)] text-[var(--white-color)] text-[14px] lg:text-[16px] leading-[27px] px-4 lg:px-5 py-2 lg:py-2.5 rounded-[14px] capitalize hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          >
            {t("book_session")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle md:hidden flex flex-col justify-center items-center w-8 h-8 text-[var(--dark-color)] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-container md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <NavLink to="/">
                <img src={logo} alt="logo" className="w-[100px] h-auto" />
              </NavLink>
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-6">
              <ul className="space-y-4">
                {["home", "pricing", "about", "blog"]?.map((key) => (
                  <li key={key}>
                    <NavLink
                      to={key === "home" ? "/" : `/${key}`}
                      className="block capitalize text-[var(--dark-color)] text-[18px] leading-[28px] py-3 border-b border-gray-100 hover:text-[var(--primary-color)] transition-colors duration-200"
                      onClick={handleNavItemClick}
                    >
                      {t(key)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Language + Auth Section */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              {/* Mobile Language Selector */}
              <div className="toggle-lang relative mb-4">
                <button
                  className="flex items-center justify-between w-full gap-2 cursor-pointer p-3 bg-white rounded-lg border border-gray-200"
                  onClick={toggleCollapsed}
                  type="button"
                  aria-expanded={langDropdownOpen}
                >
                  <div className="flex items-center gap-2">
                    <GlobeIcon />
                    <span className="capitalize text-[var(--dark-color)] text-[16px]">
                      {i18n.language === "ar" ? "English" : t("arabic")}
                    </span>
                  </div>
                  <ArrowBottomIcon
                    className={`transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <ul
                  className={`dropdown absolute bottom-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden transition-all duration-200 mb-2 ${
                    langDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <li
                    data-lang="ar"
                    className="border-b border-gray-100 py-3 px-4 text-right cursor-pointer hover:bg-[var(--dark-color)] hover:text-white transition-colors duration-200"
                    onClick={toggleLanguage}
                  >
                    {t("arabic")}
                  </li>
                  <li
                    data-lang="en"
                    className="py-3 px-4 text-right cursor-pointer hover:bg-[var(--dark-color)] hover:text-white transition-colors duration-200"
                    onClick={toggleLanguage}
                  >
                    {t("english")}
                  </li>
                </ul>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-3">
                {/* <a
                  href="#"
                  className="block w-full capitalize text-[var(--dark-color)] text-[16px] leading-[27px] py-3 px-5 rounded-[14px] border border-[#1c3F3A] text-center hover:bg-[var(--dark-color)] hover:text-white transition-all duration-200"
                  onClick={handleNavItemClick}
                >
                  {t("login")}
                </a> */}
                <a
                  href={
                    i18n?.language === "ar"
                      ? "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV_AR"
                      : "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV"
                  }
                  className="block w-full btn bg-[var(--dark-color)] text-[var(--white-color)] text-[16px] leading-[27px] py-3 px-5 rounded-[14px] text-center hover:opacity-90 transition-opacity duration-200"
                  onClick={handleNavItemClick}
                >
                  {t("book_session")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
