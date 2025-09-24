export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    // ✅ 프로덕션(배포)에서는 ESLint 모듈 끔
    modules: process.env.NODE_ENV === 'production' ? [] : ['@nuxt/eslint'],

    app: { baseURL: '/seminar/' },
    nitro: { preset: 'github-pages' },
})
