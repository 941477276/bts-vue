import { createI18n, I18n, I18nOptions } from 'vue-i18n';

let i18n: I18n = undefined!;

// 初始化i18n
export function setupI18n (options = { locale: 'cn' } as I18nOptions) {
  if (i18n) {
    return i18n;
  }
  i18n = createI18n(options);
  console.log('i18n----', i18n);
  setI18nLanguage(options.locale as string);
  return i18n;
};

/**
 * 设置当前语言
 * @param locale 语言code
 * @param i18n
 */
export function setI18nLanguage (locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    // @ts-ignore
    i18n.global.locale.value = locale;
  }
  setStorageLangCode(locale);
  let htmlEl = document.querySelector('html');
  if (htmlEl) {
    htmlEl.setAttribute('lang', locale);
  }
  loadLocalMessages(locale);
};

/**
 * 加载语言文本
 * @param local 语言code
 * @param i18n
 */
export async function loadLocalMessages (local: string) {
  let messages = local == 'cn' ? await import('./cn') : await import('./en');
  console.log('messages', messages);
  i18n.global.setLocaleMessage(local, messages.default);
};

const storageLangKey = 'bs_vue_lang';
export function getStorageLangCode () {
  return localStorage.getItem(storageLangKey);
}

export function setStorageLangCode (langCode: string) {
  localStorage.setItem(storageLangKey, langCode);
}

export default i18n;
