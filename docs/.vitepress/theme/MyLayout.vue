<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #sidebar-top>
      My custom sidebar top content
    </template> -->
    <template #home-footer>
      <div class="footer">
        <div class="container">
          <p class="text" style="text-align: center;"><a  href="http://beian.miit.gov.cn/">粤ICP备19057760号 </a></p>
        </div>
      </div>
    </template>
  </Layout>
</template>