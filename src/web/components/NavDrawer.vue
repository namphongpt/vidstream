<template>
  <v-navigation-drawer
    v-model="drawer"
    class="navigation-drawer"
    :expand-on-hover="$vuetify.breakpoint.mdAndUp"
    stateless
    :mini-variant="$vuetify.breakpoint.mdAndUp"
    fixed
    :app="$vuetify.breakpoint.mdAndUp"
  >
    <v-list dense nav>
      <v-list-item v-if="isLoggedIn()" two-line class="px-0">
        <v-list-item-avatar>
          <text-avatar
            :profile="`${apiURL}/api/assets/user/profile?id=${user.username}.png`"
            :size="36"
            :name="user.username"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="isLoggedIn()"></v-divider>
      <item-icon-list :items="generalItems"></item-icon-list>
      <v-divider v-if="isLoggedIn()"></v-divider>
      <item-icon-list v-if="isLoggedIn()" :items="userItems"></item-icon-list>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.navigation-drawer {
  z-index: 13 !important;
  padding-top: 48px;
}
</style>
<script>
import ItemIconList from '~/components/ItemIconList'
import TextAvatar from '~/components/TextAvatar'

export default {
  name: 'NavBar',
  components: { ItemIconList, TextAvatar },
  props: {
    showDrawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const user = this.$store.state.app.userInfo

    return {
      drawer: false,
      apiURL: this.$config.apiURL,
      generalItems: [
        {
          icon: 'mdi-home',
          title: 'Home',
          href: '/',
        },
        {
          icon: 'mdi-history',
          title: 'Recently Added',
          href: '/page/recents',
        },
        {
          icon: 'mdi-trending-up',
          title: 'Trending',
          href: '/page/trending',
        },
      ],
      user,
      userItems: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          href: `/profile/${user.username}`,
        },
        // {
        //   icon: 'mdi-playlist-play',
        //   title: 'Playlists',
        //   href: `/profile/${user.username}/playlists`,
        // },
        {
          icon: 'mdi-upload',
          title: 'Upload',
          href: '/upload',
        },
      ],
    }
  },
  mounted() {
    this.$nuxt.$on('toggleDrawer', (state) => {
      this.drawer = state
    })
  },
  methods: {
    isLoggedIn() {
      return !!this.$store.state.auth.token
    },
  },
}
</script>
