import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import BasicComponentsLocale from '@geip/basic-components/lib/locale'

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  'zh-CN': {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  },
  'sv-SE': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

Vue.use(VueI18n)

const defaultLang = process.env.VUE_APP_I18N_LOCALE || 'zh-CN'

function loadLocaleMessages () {
  const locales = require.context('../locales', false, /[A-Za-z0-9-_,\s]+\.json$/i)
  const bcLocales = require.context('@geip/basic-components/lib/locale/lang', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      const bcLocaleKey = `./${locale}.js`
      messages[locale] = {
        ...locales(key),
        ...bcLocales(bcLocaleKey).default
      }
    }
  })
  return messages
}

export const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-CN',
  dateTimeFormats,
  messages: loadLocaleMessages(),
  silentTranslationWarn: true
})

export function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  document.title = i18n.t('htmlTitle')
  return lang
}
setI18nLanguage(defaultLang)

BasicComponentsLocale.i18n((key, value) => i18n.t(key, value))
