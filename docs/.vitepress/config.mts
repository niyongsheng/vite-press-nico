import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    title: 'LoopLoopTech',
    description: '一个独立开发者的项目介绍和源码销售网站。',
    lang: 'zh-CN',
    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '项目',
                        items: [
                            { text: '项目概览', link: '/projects/' },
                            { text: 'WMS - 仓库管理系统', link: '/projects/wms' },
                            { text: 'SKC - 智能钥匙柜', link: '/projects/skc' },
                            { text: 'ICMS - 智慧社区管理系统', link: '/projects/icms' },
                            { text: 'CMS - 合同管理系统', link: '/projects/cms' },
                            { text: 'QAS - 问答管理系统', link: '/projects/qas' },
                            { text: 'Packer - 智能装箱算法系统', link: '/projects/packer' },
                            { text: 'Missage - 音视频聊天系统', link: '/projects/missage' },
                            { text: 'LIMS - 实验室信息管理系统', link: '/projects/lims' },
                            { text: 'ST - 智慧食堂管理系统', link: '/projects/st' }
                        ]
                    },
                    {
                        text: '网站',
                        items: [
                            { text: 'YohoPVC', link: 'https://yohopvc.com' },
                            { text: 'YouhePVC', link: 'https://youhepvc.com' },
                            { text: 'HandPanCraft', link: 'https://handpancraft.com' },
                            { text: 'HuilangHome', link: 'https://huilanghome.com' }
                        ]
                    },
                    {
                        text: '框架',
                        items: [
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' }
                        ]
                    },
                    { text: '💼 商务合作', link: '/purchase/' },
                    { text: '关于', link: '/about/' }
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
                            { text: 'CMS - Contract Management System', link: '/en/projects/cms' },
                            { text: 'QAS - Q&A Management System', link: '/en/projects/qas' },
                            { text: 'Packer - Smart Packing Algorithm System', link: '/en/projects/packer' },
                            { text: 'Missage - Audio/Video Chat System', link: '/en/projects/missage' },
                            { text: 'LIMS - Laboratory Information Management System', link: '/en/projects/lims' },
                            { text: 'ST - Smart Canteen Management System', link: '/en/projects/st' }
                        ]
                    },
                    {
                        text: 'Webs',
                        items: [
                            { text: 'YohoPVC', link: 'https://yohopvc.com' },
                            { text: 'HandPanCraft', link: 'https://handpancraft.com' },
                            { text: 'HuilangHome', link: 'https://huilanghome.com' }
                        ]
                    },
                    {
                        text: 'Frameworks',
                        items: [
                            { text: 'OncecodeView', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'NYSKit', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'markdown-it-vue3', link: 'https://github.com/niyongsheng/markdown-it-vue3' }
                        ]
                    },
                    { text: '💳 Business', link: '/en/purchase/' },
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
        siteTitle: 'LoopLoopTech',
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
                        { text: 'CMS - 合同管理系统', link: '/projects/cms' },
                        { text: 'QAS - 问答管理系统', link: '/projects/qas' },
                        { text: 'Packer - 智能装箱算法系统', link: '/projects/packer' },
                        { text: 'Missage - 音视频聊天系统', link: '/projects/missage' },
                        { text: 'LIMS - 实验室信息管理系统', link: '/projects/lims' },
                        { text: 'ST - 智慧食堂管理系统', link: '/projects/st' }
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
                        { text: 'CMS - Contract Management System', link: '/en/projects/cms' },
                        { text: 'QAS - Q&A Management System', link: '/en/projects/qas' },
                        { text: 'Packer - Smart Packing Algorithm System', link: '/en/projects/packer' },
                        { text: 'Missage - Audio/Video Chat System', link: '/en/projects/missage' },
                        { text: 'LIMS - Laboratory Information Management System', link: '/en/projects/lims' },
                        { text: 'ST - Smart Canteen Management System', link: '/en/projects/st' }
                    ]
                }
            ],
            '/about/': [
                {
                    text: '关于我们',
                    items: [
                        { text: '关于 LoopLoopTech', link: '/about/' }
                    ]
                }
            ],
            '/purchase/': [
                {
                    text: '购买服务',
                    items: [
                        { text: '服务咨询', link: '/purchase/' },
                    ]
                }
            ],
            '/en/about/': [
                {
                    text: 'About Us',
                    items: [
                        { text: 'About LoopLoopTech', link: '/en/about/' }
                    ]
                }
            ],
            '/en/purchase/': [
                {
                    text: 'Purchase Services',
                    items: [
                        { text: 'Service Advisory', link: '/en/purchase/' },
                    ]
                }
            ]
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
            copyright: 'Copyright © 2025 LoopLoopTech. All rights reserved.'
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
