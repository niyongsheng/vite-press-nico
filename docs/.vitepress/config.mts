import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    title: 'NicoLab',
    description: '一个独立开发者的项目介绍网站。',
    lang: 'zh-CN',
    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '商业项目',
                        items: [
                            { text: '项目概览', link: '/projects/' },
                            { text: 'WMS - 仓库管理系统', link: '/projects/wms' },
                            { text: 'SKC - 智能钥匙柜', link: '/projects/skc' },
                            { text: 'ICMS - 智慧社区管理系统', link: '/projects/icms' },
                            { text: 'Missage - 音视频聊天系统', link: '/projects/missage' },
                            { text: 'LIMS - 实验室信息管理系统', link: '/projects/lims' },
                        ]
                    },
                    {
                        text: '开源项目',
                        items: [
                            { text: 'ARCC', link: 'https://github.com/niyongsheng/arcc' },
                            { text: 'Moler', link: 'https://github.com/niyongsheng/moler' },
                            { text: 'Mythpen', link: 'https://github.com/niyongsheng/mythpen' },
                            { text: 'Releaseon', link: 'https://github.com/niyongsheng/releaseon' },
                            { text: 'ArcOffice', link: 'https://github.com/Arc-River/ArcOffice' },
                            { text: 'TFFileExtractor', link: 'https://github.com/niyongsheng/TFFileExtractor' }
                        ]
                    },
                    {
                        text: '开源框架',
                        items: [
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' },
                            { text: 'free-vision-skill', link: 'https://github.com/niyongsheng/free-vision-skill' }
                        ]
                    },
                    {
                        text: '网站',
                        items: [
                            { text: 'YohoPVC', link: 'https://yohopvc.com' },
                            { text: 'YouhePVC', link: 'https://youhepvc.com' },
                            { text: 'HandPanCraft', link: 'https://handpancraft.com' },
                            { text: 'HuilangHome', link: 'https://huilanghome.com' },
                            { text: 'duckly日程管理', link: 'https://niyongsheng.github.io/duckly' },
                            { text: 'SteelTide坦克生存', link: 'https://niyongsheng.github.io/SteelTide' }
                        ]
                    },
                    { text: '关于我', link: '/about/' }
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    {
                        text: 'Projects',
                        items: [
                            { text: 'Project Overview', link: '/en/projects/' },
                            { text: 'WMS - Warehouse Management System', link: '/en/projects/wms' },
                            { text: 'SKC - Smart Key Cabinet', link: '/en/projects/skc' },
                            { text: 'ICMS - Smart Community Management System', link: '/en/projects/icms' },
                            { text: 'Missage - Audio/Video Chat System', link: '/en/projects/missage' },
                            { text: 'LIMS - Laboratory Information Management System', link: '/en/projects/lims' }
                        ]
                    },
                    {
                        text: 'Open Source',
                        items: [
                            { text: 'ARCC', link: 'https://github.com/niyongsheng/arcc' },
                            { text: 'Moler', link: 'https://github.com/niyongsheng/moler' },
                            { text: 'Mythpen', link: 'https://github.com/niyongsheng/mythpen' },
                            { text: 'Releaseon', link: 'https://github.com/niyongsheng/releaseon' },
                            { text: 'ArcOffice', link: 'https://github.com/Arc-River/ArcOffice' },
                            { text: 'TFFileExtractor', link: 'https://github.com/niyongsheng/TFFileExtractor' }
                        ]
                    },
                    {
                        text: 'Frameworks',
                        items: [
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' },
                            { text: 'free-vision-skill', link: 'https://github.com/niyongsheng/free-vision-skill' }
                        ]
                    },
                    {
                        text: 'Websites',
                        items: [
                            { text: 'YohoPVC', link: 'https://yohopvc.com' },
                            { text: 'YouhePVC', link: 'https://youhepvc.com' },
                            { text: 'HandPanCraft', link: 'https://handpancraft.com' },
                            { text: 'HuilangHome', link: 'https://huilanghome.com' },
                            { text: 'Duckly - Schedule Management', link: 'https://niyongsheng.github.io/duckly' },
                            { text: 'SteelTide - Tank Survival', link: 'https://niyongsheng.github.io/SteelTide' }
                        ]
                    },
                    { text: 'About', link: '/en/about/' }
                ]
            }
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', {rel: 'stylesheet', href: '/.vitepress/theme/custom.css'}],
        // Google Analytics
        ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-J7MVDSHN0V'}],
        ['script', {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J7MVDSHN0V');"],
        // CookieBot
        ['script', {id: 'Cookiebot', src: 'https://consent.cookiebot.com/uc.js', 'data-cbid': '3d19d30c-c3ab-4ea4-a453-0996e2044dea', type: 'text/javascript', async: ''}]
    ],
    appearance: true,
    themeConfig: {
        // 基础主题配置
        siteTitle: 'NicoLab',
        logo: '/logo.svg',

        sidebar: {
            '/projects/': [
                {
                    text: '项目展示',
                    items: [
                        { text: '项目概览', link: '/projects/' },
                        { text: 'WMS - 仓库管理系统', link: '/projects/wms' },
                        { text: 'SKC - 智能钥匙柜', link: '/projects/skc' },
                        { text: 'ICMS - 智慧社区管理系统', link: '/projects/icms' },
                        { text: 'Missage - 音视频聊天系统', link: '/projects/missage' },
                        { text: 'LIMS - 实验室信息管理系统', link: '/projects/lims' }
                    ]
                }
            ],
            '/en/projects/': [
                {
                    text: 'Project Showcase',
                    items: [
                        { text: 'Project Overview', link: '/en/projects/' },
                        { text: 'WMS - Warehouse Management System', link: '/en/projects/wms' },
                        { text: 'SKC - Smart Key Cabinet', link: '/en/projects/skc' },
                        { text: 'ICMS - Smart Community Management System', link: '/en/projects/icms' },
                        { text: 'Missage - Audio/Video Chat System', link: '/en/projects/missage' },
                        { text: 'LIMS - Laboratory Information Management System', link: '/en/projects/lims' }
                    ]
                }
            ],
            '/about/': [
                {
                    text: '关于我们',
                    items: [
                        { text: '关于 NicoLab', link: '/about/' }
                    ]
                }
            ],
            '/en/about/': [
                {
                    text: 'About Us',
                    items: [
                        { text: 'About NicoLab', link: '/en/about/' }
                    ]
                }
            ],
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    },
                    en: {
                        translations: {
                            button: {
                                buttonText: 'Search',
                                buttonAriaLabel: 'Search documentation'
                            },
                            modal: {
                                noResultsText: 'No results found',
                                resetButtonTitle: 'Clear search',
                                footer: {
                                    selectText: 'select',
                                    navigateText: 'navigate',
                                    closeText: 'close'
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/niyongsheng' },
            { icon: 'juejin', link: 'https://juejin.cn/user/2445728608161262' }
        ],
        footer: {
            message: '用代码书写自由，用产品连接世界。',
            copyright: 'Copyright © 2025 NicoLab. All rights reserved.'
        },
        // 禁用赞助商显示
        aside: false,
        // 禁用右侧边栏的赞助商
        docFooter: {
            prev: false,
            next: false
        }
    },
    vite: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        }
    },
})
