<template>
  <footer class="footer">
      <div class="container">

          <!-- {% if site.footer_menu %}
          <div class="columns is-multiline">
              {% for item in site.data[site.footer_menu] %}
              <div class="column has-text-centered">
                  <div>
                      <a href="{{ item.link | prepend: site.baseurl }}" class="link">{{ item.name }}</a>
                  </div>
              </div>
              {% endfor %}
          </div>
          {% endif %} -->

          <div class="content is-small has-text-centered">
              <p>
                &copy; {{ year }} {{ $siteConfig.author }} &bull; Build with ❤️ by <a href="https://github.com/Liwoj">Michal Levý</a> using <a href="https://saber.land">Saber</a>, <a href="https://vuejs.org/">Vue</a> and <a href="https://bulma.io/">Bulma</a>
                <template v-if="buildInfo">
                  {{ buildInfo }}
                </template>
              </p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      buildInfo: process.env.NETLIFY ? `&bull; (<a href="${process.env.REPOSITORY_URL}">repo</a> - <a href="${process.env.REPOSITORY_URL}/commit/${process.env.COMMIT_REF}">commit: ${process.env.COMMIT_REF}</a>)` : null
    }
  }
}
</script>

<style scoped lang="scss">
</style>
