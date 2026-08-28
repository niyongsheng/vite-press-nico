import type { Theme } from 'vitepress'
import ColorfulTheme from 'vitepress-colorful-themes'
import Layout from './Layout.vue'
import './custom.css'

export default {
    extends: ColorfulTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        // Your custom app enhancement

    },
} satisfies Theme