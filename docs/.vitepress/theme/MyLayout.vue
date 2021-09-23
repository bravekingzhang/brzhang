<!--.vitepress/theme/MyLayout.vue-->
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
        <!-- <img src="https://file.ess.myqcloud.com/bresource/resource/resource/0/0.PNG?key=%5C%12%3F%EA%26%86%BC%5B%A2%87%C2%D6%CD%B1%1C%BC%0D%D0%D7%D0%0AW%D0%7C%008%2B%27n%E0%1C%7C%AA%80%85%F3K%1279%07%C5%D6%09%85-0%179rJ%A3%2F%F4%5B%07%A8%A8%8AQ%C9%FCzP%87%E8%0F%C8%D3E%9D%8C%C4%18%0F%9B%8E%B7RX"/> -->
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
console.log(Layout)

</script>

<style scoped>

</style>