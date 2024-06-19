<template>
  <v-footer class="d-flex flex-column"
    style="background-color: #9BB1D6; border-top-left-radius: 36px; border-top-right-radius: 36px; padding: 42px 122px;">
    <v-container>
      <v-row>
        <v-col>
          <div>
            <img src="@/assets/PetCare_white.png" alt="PetCare" width="250">
          </div>
          <div style="color: white;">
            Pusat Kebutuhan Untuk
            Hewan Peliharaan Anda.Terbesar, Terlengkap ,
            dan Terpercaya Di Indonesia.
          </div>
        </v-col>
        <v-col class="d-flex justify-center">
          <div style="color: white; text-align: left;">
            <p class="font-weight-bold mb-5">Fitur Kami</p>
            Home<br>
            Layanan<br>
            PetShop<br>
            Dokter Hewan<br>
            Tentang Kami
          </div>
        </v-col>
        <v-col>
          <div style="color: white;">
            <p class="font-weight-bold mb-5">Layanan</p>
            Jalan sekian nomer sekian<br>
            <span class="font-weight-bold">Kontak:</span> 081232132198<br>
            <span class="font-weight-bold">Email:</span> awikwok@gmail.com
          </div>
        </v-col>
        <v-col>
          <div style="color: white;">
            <p class="font-weight-bold mb-5">Layanan</p>
            Petshop<br>
            Grooming<br>
            Dokter Hewan<br>
          </div>
        </v-col>
      </v-row>
      <div>
 <hr style="width: 1200px; height: 2px; background-color: white; border: none; margin-top: 38px;">
      </div>
    </v-container>

    <v-divider></v-divider>

<div style="color: white;">
  © {{ new Date().getFullYear() }} Copyright PetCare!. All Rights Reserved
</div>
  </v-footer>
</template>

<style scoped></style>