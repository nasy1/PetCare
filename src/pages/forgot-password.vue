<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-card>
          <v-window v-model="step">
            <v-window-item value="1">
              <v-card text variant="outlined" color="#9BB1D6" style="font-family: 'poppins', sans-serif;">
                <v-row justify="center">
                  <v-col cols="12" sm="11" md="11" class="py-10">
                    <v-form @submit.prevent>
                      <v-alert class="mb-3" type="error" dismissible>
                        <!-- error message -->
                      </v-alert>
                      <v-label class="text-p pb-4">Email</v-label>
                      <v-text-field variant="outlined" id="email" name="email" type="email"></v-text-field>
                      <v-btn block size="large" rounded="lg" class="my-4" variant="flat" color="#9BB1D6"
                        style="color: white; text-transform: none;" @click="goToNextStep">Check Email</v-btn>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card text>
            </v-window-item>
            <v-window-item value="2">
              <v-card text variant="outlined" color="#9BB1D6" style="font-family: 'poppins', sans-serif;">
                <v-row justify="center">
                  <v-col cols="12" sm="11" md="11" class="py-10">
                    <v-form @submit.prevent>
                      <v-alert class="mb-3" type="error" dismissible>
                        <!-- error message -->
                      </v-alert>
                      <v-label class="text-p pb-4">Password</v-label>
                      <v-text-field variant="outlined" id="password" name="password" type="password"></v-text-field>
                      <v-label class="text-p pb-4">Confirm Password</v-label>
                      <v-text-field variant="outlined" id="confirmPassword" name="confirmPassword"
                        type="password"></v-text-field>
                      <v-btn block size="large" rounded="lg" class="my-4" variant="flat" color="#9BB1D6"
                        style="color: white; text-transform: none;" @click="goToPreviousStep">Reset password</v-btn>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    goToNextStep() {
      this.step++;
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
