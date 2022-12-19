import { useTranslation } from "react-i18next";

function Header() {
  const {t, i18n} = useTranslation();

  const handleChangeLanguage= (lang) => {

    const value = lang;
    i18n.changeLanguage(value);
  }

  return (
    <div className="flex w-100 justify-center justify-items-end p-5 bg-black-800 border-b-2 mb-5">
      <div >
        <div className="text-4xl font-bold">KNUCKLEBONES</div>
      </div>
      <div className="flex justify-self-end w-100">
        <div onClick={()=>handleChangeLanguage("en")} className="flex w-10 mx-2 hover:cursor-pointer hover:w-11" >
          <img
            alt="English"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          />
        </div>
        <div onClick={()=>handleChangeLanguage("pl")} className="flex w-10 mx-2 hover:cursor-pointer hover:w-11">
          <img
            alt="Polish"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
