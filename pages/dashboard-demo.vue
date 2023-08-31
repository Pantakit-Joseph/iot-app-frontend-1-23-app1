<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <template #prepend>
        <div class="d-flex align-center" style="height:64px;">
          <v-avatar
            image="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg"
            rounded="0"
            size="48"
            class="ms-3 me-3"
          >
          </v-avatar>
          <v-toolbar-title>
            APP NAME
          </v-toolbar-title>
        </div>
      </template>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-subheader>HOME</v-list-subheader>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Analytical" value="Analytical">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-app-bar-title>Dashboard</v-app-bar-title> -->
      <template #append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="pb-sm-15 pb-10" fluid>
        <div class="mt-3 mb-6 ">
          <div class="d-flex justify-space-between">
            <div>
              <h3 class="text-h3 mb-2">
                Analytical
              </h3>
              <v-breadcrumbs
                :items="breadcrumbsItems"
                color="text-h6 font-weight-regular pa-0 ml-n1"
              >
                <template #divider>
                  <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
              </v-breadcrumbs>
            </div>
          </div>
        </div>

        <v-row>
          <v-col
            sm="6"
            lg="3"
            class="py-0 mb-3"
          >
            <v-card
              class="rounded-lg"
            >
              <v-card-text>
                <div class="d-flex align-center">
                  <v-btn
                    size="large"
                    variant="tonal"
                    color="deep-purple-darken-4"
                    icon="mdi-lightbulb-on-outline"
                  >
                  </v-btn>
                  <div>
                    <v-card-subtitle>
                      Total Income
                    </v-card-subtitle>
                    <v-card-title class="py-0">
                      953,000
                    </v-card-title>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
            class="py-0 mb-3"
          >
            <v-card
              class="rounded-lg"
            >
              <v-card-text>
                <div class="d-flex align-center">
                  <v-btn
                    size="large"
                    variant="tonal"
                    color="deep-purple-darken-4"
                    icon="mdi-lightbulb-on-outline"
                  >
                  </v-btn>
                  <div>
                    <v-card-subtitle>
                      Total Income
                    </v-card-subtitle>
                    <v-card-title class="py-0">
                      953,000
                    </v-card-title>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
            class="py-0 mb-3"
          >
            <v-card
              class="rounded-lg"
            >
              <v-card-text>
                <div class="d-flex align-center">
                  <v-btn
                    size="large"
                    variant="tonal"
                    color="deep-purple-darken-4"
                    icon="mdi-lightbulb-on-outline"
                  >
                  </v-btn>
                  <div>
                    <v-card-subtitle>
                      Total Income
                    </v-card-subtitle>
                    <v-card-title class="py-0">
                      953,000
                    </v-card-title>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
            class="py-0 mb-3"
          >
            <v-card
              class="rounded-lg"
            >
              <v-card-text>
                <div class="d-flex align-center">
                  <v-btn
                    size="large"
                    variant="tonal"
                    color="deep-purple-darken-4"
                    icon="mdi-lightbulb-on-outline"
                  >
                  </v-btn>
                  <div>
                    <v-card-subtitle>
                      Total Income
                    </v-card-subtitle>
                    <v-card-title class="py-0">
                      953,000
                    </v-card-title>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card class="rounded-lg">
              <v-card-item title="Florida">
                <template #subtitle>
                  <v-icon
                    icon="mdi-alert"
                    size="18"
                    color="error"
                    class="me-1 pb-1"
                  ></v-icon>

                  Extreme Weather Alert
                </template>
              </v-card-item>

              <v-card-text class="py-0">
                <v-row align="center" no-gutters>
                  <v-col
                    class="text-h2"
                    cols="6"
                  >
                    64&deg;F
                  </v-col>

                  <v-col cols="6" class="text-right">
                    <v-icon
                      color="error"
                      icon="mdi-weather-hurricane"
                      size="88"
                    ></v-icon>
                  </v-col>
                </v-row>
              </v-card-text>

              <div class="d-flex py-3 justify-space-between">
                <v-list-item
                  density="compact"
                  prepend-icon="mdi-weather-windy"
                >
                  <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
                </v-list-item>

                <v-list-item
                  density="compact"
                  prepend-icon="mdi-weather-pouring"
                >
                  <v-list-item-subtitle>48%</v-list-item-subtitle>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              color="primary"
              class="rounded-lg"
            >
              <v-card-text>
                <div class="d-flex align-start">
                  <div class="text-h5">
                    Earnings
                  </div>
                  <div class="flex-grow-1"></div>
                  <div class="ml-auto">
                    <v-btn icon="mdi-currency-usd" color="secondary"></v-btn>
                  </div>
                </div>
                <div class="mt-4 mb-3">
                  <div class="text-h5 font-weight-regular">
                    $93,438.78
                  </div>
                  <div class="text-subtitle-1 mt-1">
                    Monthly revenue
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            sm="6"
            lg="3"
          >
            <v-card class="rounded-lg">
              <v-card-title>This is a title</v-card-title>
              <v-card-subtitle>This is a subtitle</v-card-subtitle>
              <v-card-text>
                <div class="text-center">
                  <v-progress-circular
                    :rotate="0"
                    :size="125"
                    :width="15"
                    :model-value="value"
                    color="primary"
                  >
                    {{ value }}%
                  </v-progress-circular>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
          >
            <v-card class="rounded-lg">
              <v-card-title>This is a title</v-card-title>
              <v-card-subtitle>This is a subtitle</v-card-subtitle>
              <v-card-text>
                <div class="text-center">
                  <v-progress-circular
                    :rotate="0"
                    :size="125"
                    :width="15"
                    :model-value="value"
                    color="secondary"
                  >
                    {{ value }}%
                  </v-progress-circular>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
          >
            <v-card class="rounded-lg">
              <v-card-title>This is a title</v-card-title>
              <v-card-subtitle>This is a subtitle</v-card-subtitle>
              <v-card-text>
                <div class="text-center">
                  <v-btn
                    size="125"
                    variant="tonal"
                    :color="isLightOn ? 'amber-darken-4' : 'grey-darken-4'"
                    class="rounded-circle"
                    @click="isLightOn = !isLightOn"
                  >
                    <v-icon
                      size="60"
                      :icon="isLightOn ? 'mdi-lightbulb-on-outline' : 'mdi-lightbulb-off-outline'"
                    ></v-icon>
                  </v-btn>
                </div>
                <v-card-actions>
                  <v-switch
                    v-model="isLightOn"
                    hide-details
                    :label="`Light on: ${isLightOn.toString()}`"
                  ></v-switch>
                  <v-spacer></v-spacer>
                  <v-btn size="small" color="surface-variant" variant="text" icon="mdi-dots-vertical"></v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            sm="6"
            lg="3"
          >
            <v-card class="rounded-lg">
              <v-card-title>This is a title</v-card-title>
              <v-card-subtitle>This is a subtitle</v-card-subtitle>
              <v-card-text>
                <div class="text-center">
                  <v-btn
                    size="125"
                    variant="tonal"
                    :color="isLight2On ? 'amber-darken-4' : 'grey-darken-4'"
                    class="rounded-circle"
                    @click="isLight2On = !isLight2On"
                  >
                    <v-icon
                      size="60"
                      :icon="isLight2On ? 'mdi-lightbulb-on-outline' : 'mdi-lightbulb-off-outline'"
                    ></v-icon>
                  </v-btn>
                </div>
                <v-card-actions>
                  <div class="text-center">
                    <v-switch
                      v-model="isLight2On"
                      hide-details
                      :label="`Light on: ${isLight2On.toString()}`"
                    ></v-switch>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn size="small" color="surface-variant" variant="text" icon="mdi-dots-vertical"></v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    breadcrumbsItems: [
      {
        title: 'Dashboard',
        disabled: false,
      },
      {
        title: 'Analytical ',
        disabled: true,
        href: '#',
      },
    ],
    value: Math.floor(Math.random() * 100),
    isLightOn: true,
    isLight2On: true,
  }),
}
</script>

<style lang="scss">
main {
  background-color: #FAFAFA;
}
</style>
