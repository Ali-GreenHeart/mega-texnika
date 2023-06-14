import { createContext, useState } from "react"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json"
import az from "../locales/az.json"
import ru from "../locales/ru.json"

export const I18nContext = createContext<any>(() => { })

type Languages = 'en' | 'az' | 'ru'
interface Props {
    children: React.ReactNode;
}
const I18nContextComponent = ({ children }: Props) => {
    const [lang, setLang] = useState<Languages>('ru')
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: en
                },
                az: {
                    translation: az
                },
                ru: {
                    translation: ru
                }
            },
            lng: lang,
            fallbackLng: "en"
        });
    return (
        <>
            <I18nContext.Provider value={[lang, setLang]}>
                {children}
            </I18nContext.Provider>
        </>
    )
}
export default I18nContextComponent
