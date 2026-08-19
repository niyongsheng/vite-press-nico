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
                            { text: 'PinShell', link: 'https://github.com/niyongsheng/PinShell' },
                            { text: 'HoloCubic', link: 'https://github.com/niyongsheng/HoloCubic' },
                            { text: 'ps2x_smart_car', link: 'https://github.com/niyongsheng/ps2x_smart_car' },
                            { text: 'TFFileExtractor', link: 'https://github.com/niyongsheng/TFFileExtractor' }
                        ]
                    },
                    {
                        text: '开源框架',
                        items: [
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'RediQueue', link: 'https://github.com/niyongsheng/RediQueue' },
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'free-vision-skill', link: 'https://github.com/niyongsheng/free-vision-skill' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' }
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
                            { text: 'SteelTide坦克生存', link: 'https://niyongsheng.github.io/SteelTide' },
                            { text: 'LuckyDraw年会抽奖', link: 'https://niyongsheng.github.io/luck_draw' },
                            { text: 'clark-typer《沉寂的回声》', link: 'https://niyongsheng.github.io/clark-typer' },
                            { text: 'kataminoTower立方塔求解器', link: 'https://niyongsheng.github.io/katamino-tower/katamino_tower_solver.html' }
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
                            { text: 'PinShell', link: 'https://github.com/niyongsheng/PinShell' },
                            { text: 'HoloCubic', link: 'https://github.com/niyongsheng/HoloCubic' },
                            { text: 'ps2x_smart_car', link: 'https://github.com/niyongsheng/ps2x_smart_car' },
                            { text: 'TFFileExtractor', link: 'https://github.com/niyongsheng/TFFileExtractor' }
                        ]
                    },
                    {
                        text: 'Frameworks',
                        items: [
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'RediQueue', link: 'https://github.com/niyongsheng/RediQueue' },
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'free-vision-skill', link: 'https://github.com/niyongsheng/free-vision-skill' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' }
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
                            { text: 'SteelTide - Tank Survival', link: 'https://niyongsheng.github.io/SteelTide' },
                            { text: 'LuckyDraw - Annual Event Draw', link: 'https://niyongsheng.github.io/luck_draw' },
                            { text: 'clark-typer - Echoes of Silence', link: 'https://niyongsheng.github.io/clark-typer/' },
                            { text: 'Katamino Tower - Cube Tower Solver', link: 'https://niyongsheng.github.io/katamino-tower/katamino_tower_solver.html' }
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
            {
                icon: {
                    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373"/></svg>'
                },
                link: 'https://space.bilibili.com/241980240'
            },
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
