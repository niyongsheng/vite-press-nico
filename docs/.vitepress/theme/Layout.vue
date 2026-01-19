<!-- 自定义 Layout，隐藏 ThemeSelector -->
<script setup lang="ts">
import {useData} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {nextTick, onMounted, onUnmounted, provide, ref} from 'vue'

const {Layout} = DefaultTheme
const {isDark} = useData()

const enableTransitions = () =>
    'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

const showMobileThemeSelector = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  showMobileThemeSelector.value = scrollTop > 300
}

// 设置默认主题
const setDefaultTheme = () => {
  const themes = ['default', 'emerald', 'ruby', 'amber', 'sapphire', 'amethyst', 'mint', 'ocean', 'coral', 'graphite', 'sakura', 'starry', 'deep-ocean', 'forest-green', 'warm-gold']
  themes.forEach(theme => {
    document.documentElement.classList.remove(`theme-${theme}`)
  })
  // 添加 sapphire 主题类
  document.documentElement.classList.add('theme-sapphire')
  localStorage.setItem('vitepress-theme', 'sapphire')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // 延迟设置默认主题，确保插件先初始化
  nextTick(() => {
    setDefaultTheme()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

provide('toggle-appearance', async ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
      {clipPath: isDark.value ? clipPath.reverse() : clipPath},
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
  )
})
</script>

<template>
  <Layout>
    <!-- 不包含 nav-bar-content-after，这样就不会显示 ThemeSelector -->
    <!-- 不包含 aside-ads-before 和 aside-ads-after，这样就不会显示赞助商广告 -->
  </Layout>

  <!-- 不包含移动设备主题选择器 -->
</template>

<style>
/* 确保主题选择器完全隐藏 */
.theme-selector {
  display: none !important;
}

.mobile-theme-selector {
  display: none !important;
}

/* 保持原有的过渡效果 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
