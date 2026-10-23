import type { Theme } from 'vitepress'
import { init, trackEvent } from '@aptabase/web'
import ColorfulTheme from 'vitepress-colorful-themes'
import Layout from './Layout.vue'
import './custom.css'

const APTABASE_APP_KEY = 'A-US-8475457025'

export default {
    extends: ColorfulTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        // Aptabase 仅在浏览器端可用，SSR 阶段跳过
        if (typeof window === 'undefined') return

        // app key 中的 US 段会自动解析出 https://us.aptabase.com
        init(APTABASE_APP_KEY)

        // router.go() 在 enhanceApp 之后触发，因此首屏也会被记录
        router.onAfterRouteChange = (path) => {
            trackEvent('page_view', {
                path,
                locale: path.startsWith('/en/') ? 'en' : 'zh',
            })
        }
    },
} satisfies Theme
