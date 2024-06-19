<template>

<div style="padding: 80px 0; display: flex; justify-content: center;">
                <v-card color="#9BB1D6" variant="outlined" class="mb-3 text-center"
                    style="width: 277px; height: 468px; margin-right: 153px;">
                    <v-container class="d-flex align-center justify-center">
                    </v-container>
                    <v-card-title class="mb-5"
                        style="font-family: 'Mochiy Pop One', sans-serif; text-transform: none;">
                        Regular Groom
                    </v-card-title>
                    <v-btn class="elevation-0 mb-10"
                        style="width: 145px; height: 43px; background-color: #8FD0C6; color: white; font-weight: bold; font-size: 18px; font-family: 'Poppins', sans-serif; text-transform: none;">Rp.
                        100.000</v-btn>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Mandi
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Gunting kuku
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Membersihkan telinga
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4" style="text-transform: none;"
                        :to="{ path: '/formulir' }">
                        Cek Sekarang
                    </v-btn>
                    <v-img src="@/assets/card_icon.png"
                        style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>

                <v-card color="#9BB1D6" variant="outlined" class="mb-3 text-center"
                    style="width: 277px; height: 468px; margin-right: 153px;">
                    <v-container class="d-flex align-center justify-center">
                    </v-container>
                    <v-card-title class="mb-5"
                        style="font-family: 'Mochiy Pop One', sans-serif; text-transform: none;">
                        Treatment Groom
                    </v-card-title>
                    <v-btn class="elevation-0 mb-10"
                        style="width: 145px; height: 43px; background-color: #8FD0C6; color: white; font-weight: bold; font-size: 18px; font-family: 'Poppins', sans-serif; text-transform: none;">Rp.
                        100.000</v-btn>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Mandi
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Pemberian obat khusus untuk kutu
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Gunting kuku
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Membersihkan telinga
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4" style="text-transform: none;"
                        :to="{ path: '/formulir' }">
                        Cek Sekarang
                    </v-btn>
                    <v-img src="@/assets/card_icon.png"
                        style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>

                <v-card color="#9BB1D6" variant="outlined" class="mb-3 text-center"
                    style="width: 277px; height: 468px;">
                    <v-container class="d-flex align-center justify-center">
                    </v-container>
                    <v-card-title class="mb-5"
                        style="font-family: 'Mochiy Pop One', sans-serif; text-transform: none;">
                        Total Groom
                    </v-card-title>
                    <v-btn class="elevation-0 mb-10"
                        style="width: 145px; height: 43px; background-color: #8FD0C6; color: white; font-weight: bold; font-size: 18px; font-family: 'Poppins', sans-serif; text-transform: none;">Rp.
                        100.000</v-btn>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Mandi
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Pemberian obat khusus untuk kutu
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Pemberian obat khusus untuk jamur
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Gunting kuku
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Membersihkan telinga
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4" style="text-transform: none;"
                        :to="{ path: '/formulir' }">
                        Cek Sekarang
                    </v-btn>
                    <v-img src="@/assets/card_icon.png"
                        style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
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
