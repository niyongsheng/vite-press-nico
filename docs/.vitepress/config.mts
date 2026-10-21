import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    title: 'NicoLab',
    description: '个人开发者的项目介绍网站。',
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
                            { text: 'WMS<span class="nav-desc">仓库管理系统</span>', link: '/projects/wms' },
                            { text: 'SKC<span class="nav-desc">智能钥匙柜</span>', link: '/projects/skc' },
                            { text: 'ICMS<span class="nav-desc">智慧社区管理系统</span>', link: '/projects/icms' },
                            { text: 'Missage<span class="nav-desc">音视频聊天系统</span>', link: '/projects/missage' },
                            { text: 'LIMS<span class="nav-desc">实验室信息管理系统</span>', link: '/projects/lims' }
                        ]
                    },
                    {
                        text: '开源项目',
                        items: [
                            { text: 'ARCC<span class="nav-desc">终端ai代理cli工具</span>', link: 'https://github.com/niyongsheng/arcc' },
                            { text: 'Moler<span class="nav-desc">mac垃圾清理应用</span>', link: 'https://github.com/niyongsheng/moler' },
                            { text: 'Mythpen<span class="nav-desc">ai辅助写小说应用</span>', link: 'https://github.com/niyongsheng/mythpen' },
                            { text: 'Releaseon<span class="nav-desc">app内测分发项目</span>', link: 'https://github.com/niyongsheng/releaseon' },
                            { text: 'ArcOffice<span class="nav-desc">ai自动化文档工具</span>', link: 'https://github.com/Arc-River/ArcOffice' },
                            { text: 'AudioScript<span class="nav-desc">电脑语音转写应用</span>', link: 'https://github.com/niyongsheng/AudioScript' },
                            { text: 'PinShell<span class="nav-desc">mac桌面锚定框应用</span>', link: 'https://github.com/niyongsheng/PinShell' },
                            { text: 'TFFileExtractor<span class="nav-desc">sd卡加密文件提取工具</span>', link: 'https://github.com/niyongsheng/TFFileExtractor' },
                            { text: 'HoloCubic<span class="nav-desc">ar小电视硬件</span>', link: 'https://github.com/niyongsheng/HoloCubic' },
                            { text: 'ps2x_smart_car<span class="nav-desc">diy遥控车玩具</span>', link: 'https://github.com/niyongsheng/ps2x_smart_car' }
                        ]
                    },
                    {
                        text: '开源框架',
                        items: [
                            { text: 'NYSTK<span class="nav-desc">ios弹窗组件库</span>', link: 'https://github.com/niyongsheng/NYSTK' },
                            { text: 'NYSKit<span class="nav-desc">ios项目脚手架</span>', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'RediQueue<span class="nav-desc">redis简易队列</span>', link: 'https://github.com/niyongsheng/RediQueue' },
                            { text: 'SmartPacker<span class="nav-desc">3d装箱算法库</span>', link: 'https://github.com/niyongsheng/SmartPacker' },
                            { text: 'SmartPather<span class="nav-desc">2d路径规划库</span>', link: 'https://github.com/niyongsheng/SmartPather' },
                            { text: 'OncecodeView<span class="nav-desc">ios验证码/密码组件</span>', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'free-vision-skill<span class="nav-desc">llm本地ocr技能</span>', link: 'https://github.com/niyongsheng/free-vision-skill' },
                            { text: 'markdown-it-vue3<span class="nav-desc">markdown流式渲染组件</span>', link: 'https://github.com/niyongsheng/markdown-it-vue3' },
                            { text: 'ruoyi-vue-nys<span class="nav-desc">若依admin-ui脚手架</span>', link: 'https://github.com/niyongsheng/ruoyi-vue-nys' }
                        ]
                    },
                    {
                        text: '游戏',
                        items: [
                            { text: 'SteelTide<span class="nav-desc">《钢铁潮汐》坦克游戏</span>', link: 'https://niyongsheng.github.io/SteelTide' },
                            { text: 'Scarebird<span class="nav-desc">《惊弓之鸟》手势游戏</span>', link: 'https://niyongsheng.github.io/scarebird' }
                        ]
                    },
                    {
                        text: '网站',
                        items: [
                            { text: 'YohoPVC<span class="nav-desc">外贸网站</span>', link: 'https://yohopvc.com' },
                            { text: 'YouhePVC<span class="nav-desc">企业官网</span>', link: 'https://youhepvc.com' },
                            { text: '<span class="nav-dead">HandPanCraft</span><span class="nav-desc">手碟外贸站</span>', link: 'https://handpancraft.com' },
                            { text: '<span class="nav-dead">HuilangHome</span><span class="nav-desc">陶瓷外贸站</span>', link: 'https://huilanghome.com' },
                            { text: 'duckly<span class="nav-desc">创意日程管理</span>', link: 'https://niyongsheng.github.io/duckly' },
                            { text: 'LuckyDraw<span class="nav-desc">年会抽奖网站</span>', link: 'https://niyongsheng.github.io/LuckyDraw' },
                            { text: 'clark-typer<span class="nav-desc">科幻《沉寂的回声》</span>', link: 'https://niyongsheng.github.io/clark-typer' },
                            { text: 'pixel-homepage<span class="nav-desc">像素风个人主页</span>', link: 'https://niyongsheng.github.io/pixel-homepage/PixelHomepage' },
                            { text: 'kataminoTower<span class="nav-desc">立方塔玩具求解器</span>', link: 'https://niyongsheng.github.io/katamino-tower/katamino_tower_solver.html' }
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
                            { text: 'WMS<span class="nav-desc">Warehouse Management System</span>', link: '/en/projects/wms' },
                            { text: 'SKC<span class="nav-desc">Smart Key Cabinet</span>', link: '/en/projects/skc' },
                            { text: 'ICMS<span class="nav-desc">Smart Community Management System</span>', link: '/en/projects/icms' },
                            { text: 'Missage<span class="nav-desc">Audio/Video Chat System</span>', link: '/en/projects/missage' },
                            { text: 'LIMS<span class="nav-desc">Laboratory Information Management System</span>', link: '/en/projects/lims' }
                        ]
                    },
                    {
                        text: 'Open Source',
                        items: [
                            { text: 'ARCC<span class="nav-desc">Terminal AI Agent</span>', link: 'https://github.com/niyongsheng/arcc' },
                            { text: 'Moler<span class="nav-desc">Mac Cleanup App</span>', link: 'https://github.com/niyongsheng/moler' },
                            { text: 'Mythpen<span class="nav-desc">AI-Assisted Novel Writing</span>', link: 'https://github.com/niyongsheng/mythpen' },
                            { text: 'Releaseon<span class="nav-desc">App Beta Distribution</span>', link: 'https://github.com/niyongsheng/releaseon' },
                            { text: 'ArcOffice<span class="nav-desc">AI Document Tools</span>', link: 'https://github.com/Arc-River/ArcOffice' },
                            { text: 'AudioScript<span class="nav-desc">Live Speech Translation</span>', link: 'https://github.com/niyongsheng/AudioScript' },
                            { text: 'PinShell<span class="nav-desc">Mac Desktop Pinning Frame</span>', link: 'https://github.com/niyongsheng/PinShell' },
                            { text: 'TFFileExtractor<span class="nav-desc">Encrypted Memory Card Extractor</span>', link: 'https://github.com/niyongsheng/TFFileExtractor' },
                            { text: 'HoloCubic<span class="nav-desc">AR Mini TV Hardware</span>', link: 'https://github.com/niyongsheng/HoloCubic' },
                            { text: 'ps2x_smart_car<span class="nav-desc">RC Car Toy</span>', link: 'https://github.com/niyongsheng/ps2x_smart_car' }
                        ]
                    },
                    {
                        text: 'Frameworks',
                        items: [
                            { text: 'NYSTK<span class="nav-desc">iOS Popup Component</span>', link: 'https://github.com/niyongsheng/NYSTK' },
                            { text: 'NYSKit<span class="nav-desc">iOS Project Scaffold</span>', link: 'https://github.com/niyongsheng/NYSKit' },
                            { text: 'RediQueue<span class="nav-desc">Simple Redis Queue</span>', link: 'https://github.com/niyongsheng/RediQueue' },
                            { text: 'SmartPacker<span class="nav-desc">3D Bin Packing Library</span>', link: 'https://github.com/niyongsheng/SmartPacker' },
                            { text: 'SmartPather<span class="nav-desc">2D Path Planning Library</span>', link: 'https://github.com/niyongsheng/SmartPather' },
                            { text: 'OncecodeView<span class="nav-desc">iOS Verification Code Component</span>', link: 'https://github.com/niyongsheng/OncecodeView' },
                            { text: 'free-vision-skill<span class="nav-desc">Local OCR Skill for LLMs</span>', link: 'https://github.com/niyongsheng/free-vision-skill' },
                            { text: 'markdown-it-vue3<span class="nav-desc">Markdown Rendering Component</span>', link: 'https://github.com/niyongsheng/markdown-it-vue3' },
                            { text: 'ruoyi-vue-nys<span class="nav-desc">RuoYi Admin-UI Scaffold</span>', link: 'https://github.com/niyongsheng/ruoyi-vue-nys' }
                        ]
                    },
                    {
                        text: 'Games',
                        items: [
                            { text: 'SteelTide<span class="nav-desc">Tank Game</span>', link: 'https://niyongsheng.github.io/SteelTide' },
                            { text: 'Scarebird<span class="nav-desc">Gesture Game</span>', link: 'https://niyongsheng.github.io/scarebird' }
                        ]
                    },
                    {
                        text: 'Websites',
                        items: [
                            { text: 'YohoPVC<span class="nav-desc">Foreign Trade Site</span>', link: 'https://yohopvc.com' },
                            { text: 'YouhePVC<span class="nav-desc">Corporate Website</span>', link: 'https://youhepvc.com' },
                            { text: '<span class="nav-dead">HandPanCraft</span><span class="nav-desc">Handpan Foreign Trade Site</span>', link: 'https://handpancraft.com' },
                            { text: '<span class="nav-dead">HuilangHome</span><span class="nav-desc">Ceramic Foreign Trade Site</span>', link: 'https://huilanghome.com' },
                            { text: 'Duckly<span class="nav-desc">Schedule Management</span>', link: 'https://niyongsheng.github.io/duckly' },
                            { text: 'LuckyDraw<span class="nav-desc">Annual Event Draw</span>', link: 'https://niyongsheng.github.io/LuckyDraw' },
                            { text: 'clark-typer<span class="nav-desc">Echoes of Silence</span>', link: 'https://niyongsheng.github.io/clark-typer' },
                            { text: 'pixel-homepage<span class="nav-desc">Pixel-style Homepage</span>', link: 'https://niyongsheng.github.io/pixel-homepage/PixelHomepage' },
                            { text: 'Katamino Tower<span class="nav-desc">Cube Tower Solver</span>', link: 'https://niyongsheng.github.io/katamino-tower/katamino_tower_solver.html' }
                        ]
                    },
                    { text: 'About', link: '/en/about/' }
                ],
                // 英文页脚；locale 的 themeConfig 与顶层是浅合并，需整体覆盖 footer
                footer: {
                    message: 'Write freedom with code, connect the world with products.',
                    copyright: 'Copyright © 2025 NicoLab. All rights reserved.'
                }
            }
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', {rel: 'stylesheet', href: '/.vitepress/theme/custom.css'}],
        // 首帧渲染前应用蓝宝石主题，避免从默认紫蓝渐变跳变
        ['script', {}, `(function() {
            var t = document.documentElement;
            ['default','emerald','ruby','amber','sapphire','amethyst','mint','ocean','coral','graphite','sakura','starry','deep-ocean','forest-green','warm-gold'].forEach(function(name) {
                t.classList.remove('theme-' + name);
            });
            t.classList.add('theme-sapphire');
            if (!localStorage.getItem('vitepress-theme')) {
                localStorage.setItem('vitepress-theme', 'sapphire');
            }
        })()`],
        // Google Analytics
        ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-J7MVDSHN0V'}],
        ['script', {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J7MVDSHN0V');"]
    ],
    appearance: 'dark',
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
