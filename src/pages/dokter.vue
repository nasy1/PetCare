<template>
    <div class="custom-background" style="margin-top: 40px;">
        <v-container fluid>
  <v-row>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-col cols="3">
          <v-card class="card-item" height="200px">
            <v-img src="@/assets/banner_dokter_kiri.png" cover style="height: 100%;"></v-img>
            <v-card-text>
              <!-- Isi Kartu 1 -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="card-item" height="200px">
            <v-img src="@/assets/banner_dokter_tengah.png" cover style="height: 100%;"></v-img>
            <v-card-text>
              <!-- Isi Kartu 2 -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="card-item" height="200px">
            <v-img src="@/assets/banner_dokter_kanan.png" cover style="height: 100%;"></v-img>
            <v-card-text>
              <!-- Isi Kartu 3 -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</div>


<v-container class="mt-4 mb-4">
  <v-row justify="center" no-gutters class="mt-4 mb-4">
    <!-- Card 1 -->
    <v-col cols="12" md="4" class="my-2 mb-4" style="margin-right: 8px;">
      <v-card outlined style="min-height: 200px;">
        <v-row no-gutters class="align-center">
          <!-- Bagian gambar -->
          <v-col cols="4" class="d-flex justify-center">
            <v-img src="@/assets/aether.png" alt="Dokter Clorinde" class="pa-4" style="width: 100px; height: 100px;"></v-img>
          </v-col>

          <!-- Bagian teks -->
          <v-col cols="8" class="d-flex flex-column justify-center">
            <v-card-title class="headline" style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 16px;">
              Dokter Aether
            </v-card-title>
            <v-card-text style="color: #9BB1D6; Font-family: 'Poppins', sans-serif; font-size: 14px;">
              Spesialis hewan peliharaan.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text :to="{ path: '/formulir' }">Chat Sekarang</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- Card 2 -->
    <v-col cols="12" md="4" class="my-2 mb-4" style="margin-right: 8px;">
      <v-card outlined style="min-height: 200px;">
        <v-row no-gutters class="align-center">
          <!-- Bagian gambar -->
          <v-col cols="4" class="d-flex justify-center">
            <v-img src="@/assets/venti.png" alt="Dokter Clorinde" class="pa-4" style="width: 100px; height: 100px;"></v-img>
          </v-col>

          <!-- Bagian teks -->
          <v-col cols="8" class="d-flex flex-column justify-center">
            <v-card-title class="headline" style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 16px;">
              Dokter Venti
            </v-card-title>
            <v-card-text style="color: #9BB1D6; Font-family: 'Poppins', sans-serif; font-size: 14px;">
              Ahli dalam perawatan kesehatan hewan peliharaan.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text :to="{ path: '/formulir' }">Chat Sekarang</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- Card 3 -->
    <v-col cols="12" md="4" class="my-2 mb-4" style="margin-right: 8px;">
      <v-card outlined style="min-height: 200px;">
        <v-row no-gutters class="align-center">
          <!-- Bagian gambar -->
          <v-col cols="4" class="d-flex justify-center">
            <v-img src="@/assets/zhongli.png" alt="Dokter Clorinde" class="pa-4" style="width: 100px; height: 100px;"></v-img>
          </v-col>

          <!-- Bagian teks -->
          <v-col cols="8" class="d-flex flex-column justify-center">
            <v-card-title class="headline" style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 16px;">
              Dokter Zhongli
            </v-card-title>
            <v-card-text style="color: #9BB1D6; Font-family: 'Poppins', sans-serif; font-size: 14px;">
              Spesialis Dermatologi hewan peliharaan.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text :to="{ path: '/formulir' }">Chat Sekarang</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- Card 4 -->
    <v-col cols="12" md="4" class="my-2 mb-4">
      <v-card outlined style="min-height: 200px;">
        <v-row no-gutters class="align-center">
          <!-- Bagian gambar -->
          <v-col cols="4" class="d-flex justify-center">
            <v-img src="@/assets/raiden.png" alt="Dokter Clorinde" class="pa-4" style="width: 100px; height: 100px;"></v-img>
          </v-col>

          <!-- Bagian teks -->
          <v-col cols="8" class="d-flex flex-column justify-center">
            <v-card-title class="headline" style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 16px;">
              Dokter Raiden Shogun
            </v-card-title>
            <v-card-text style="color: #9BB1D6; Font-family: 'Poppins', sans-serif; font-size: 14px;">
              Ahli bedah hewan peliharaan.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text :to="{ path: '/formulir' }">Chat Sekarang</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

  </v-row>
</v-container>



</template>

<script setup></script>

<style scoped>
.custom-background {
        background-color: rgba(155, 177, 214, 0.13);
        /* This makes sure the background color covers the full height of the viewport */
    }
  
    .box-container {
        padding: 20px;
        border-radius: 10px;
        margin-top: 80px;
    }

    .card-item {
        margin: 10px;
    }
    
    .image-wrapper {
  width: 100%; /* Sesuaikan dengan lebar yang diinginkan */
}

</style>
