<template>
    <div style="background-color: white; margin-top: 80px;">
        <v-container>
          <v-row class="center-cards">
            <!-- First Card -->
            <v-col cols="12" md="6" class="d-flex justify-center fixed-width">
              <div class="card-wrapper">
                <v-card color="#9BB1D6" variant="outlined" class="mb-3">
                  <v-container class="d-flex align-center">
                    <div style="width: 79px;">
                      <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain style="width: 100%; height: 79px;"></v-img>
                    </div>
                    <v-card-title style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                      Dokter Hewan
                    </v-card-title>
                  </v-container>
                  <v-card-text style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea?
                  </v-card-text>
                  <v-card-actions>
                    <v-btn append-icon="mdi-arrow-right" color="black">
                      Action
                    </v-btn>
                  </v-card-actions>
                  <v-img src="@/assets/card_icon.png"
                    style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
              </div>
            </v-col>
            <!-- Second Card -->
            <v-col cols="12" md="6" class="d-flex justify-center fixed-width">
              <div class="card-wrapper">
                <v-card color="#9BB1D6" variant="outlined" class="mb-3">
                  <v-container class="d-flex align-center">
                    <div style="width: 79px;">
                      <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain style="width: 100%; height: 79px;"></v-img>
                    </div>
                    <v-card-title style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                      Dokter Hewan
                    </v-card-title>
                  </v-container>
                  <v-card-text style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea?
                  </v-card-text>
                  <v-card-actions>
                    <v-btn append-icon="mdi-arrow-right" color="black">
                      Action
                    </v-btn>
                  </v-card-actions>
                  <v-img src="@/assets/card_icon.png"
                    style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row class="center-cards">
            <!-- Third Card -->
            <v-col cols="12" md="6" class="d-flex justify-center fixed-width">
              <div class="card-wrapper">
                <v-card color="#9BB1D6" variant="outlined" class="mb-3">
                  <v-container class="d-flex align-center">
                    <div style="width: 79px;">
                      <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain style="width: 100%; height: 79px;"></v-img>
                    </div>
                    <v-card-title style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                      Dokter Hewan
                    </v-card-title>
                  </v-container>
                  <v-card-text style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea?
                  </v-card-text>
                  <v-card-actions>
                    <v-btn append-icon="mdi-arrow-right" color="black">
                      Action
                    </v-btn>
                  </v-card-actions>
                  <v-img src="@/assets/card_icon.png"
                    style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
              </div>
            </v-col>
            <!-- Bottom Centered Card -->
            <v-col cols="12" md="6" class="d-flex justify-center fixed-width">
              <div class="card-wrapper">
                <v-card color="#9BB1D6" variant="outlined" class="mb-3">
                  <v-container class="d-flex align-center">
                    <div style="width: 79px;">
                      <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain style="width: 100%; height: 79px;"></v-img>
                    </div>
                    <v-card-title style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                      Dokter Hewan
                    </v-card-title>
                  </v-container>
                  <v-card-text style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea?
                  </v-card-text>
                  <v-card-actions>
                    <v-btn append-icon="mdi-arrow-right" color="black">
                      Action
                    </v-btn>
                  </v-card-actions>
                  <v-img src="@/assets/card_icon.png"
                    style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

</template>

<script setup></script>

<style scoped>

 .fixed-size {
  width: 400px; /* Adjust as needed */
  height: 246px; /* Adjust as needed */
}
.fixed-width {
  flex: 0 0 auto !important;
  max-width: 400px !important; /* Adjust as needed */
}
.card-wrapper {
  width: 100%;
  max-width: 400px;
  height: 246px;
}

@media (min-width: 800px) {
  .card-wrapper {
    width: 400px;
  }
}
.center-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
