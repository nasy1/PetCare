<template>
    <div class="custom-background">
        <v-main class="top-padding">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="d-flex align-center">
                        <div class="d-flex flex-column">
                            <h1 class="mb-5"
                                style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 45px;">
                                Destinasi Kebahagiaan<br />Untuk Peliharaanmu</h1>
                            <p class="mb-5"
                                style="color: #8FD0C6; font-family: 'Poppins', sans-serif; font-weight: 600;">
                                Kami menyediakan berbagai layanan untuk peliharaanmu, mulai dari petshop, dokter hewan,
                                dan masih banyak
                                lagi.
                            </p>
                            <div class="d-flex">
                                <v-btn class="me-3" color="#9BB1D6" width="250" height="60" rounded="pill" text
                                    style="color: white; text-transform: none; font-family: 'Mochiy Pop One', sans-serif;">
                                    <template v-slot:prepend>
                                        <span class="mr-3">Layanan Kami</span>
                                    </template>
                                    <template v-slot:append>
                                        <v-icon>mdi-arrow-top-right</v-icon>
                                    </template>
                                </v-btn>
                                <v-btn variant="outlined" class="me-3" color="#8FD0C6" width="250" height="60"
                                    rounded="pill" text
                                    style="text-transform: none; font-family: 'Mochiy Pop One', sans-serif; ">
                                    <template v-slot:prepend>
                                        <span class="mr-3">Hubungi kami</span>
                                    </template>
                                    <template v-slot:append>
                                        <v-icon>mdi-phone</v-icon>
                                    </template>
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex justify-end align-center">
                        <img class="hero-image" src="@/assets/cathero.png" alt="Cat Hero" />
                    </v-col>
                </v-row>
            </v-container>
            <div style="background-color: white; padding-bottom: 148px;">
                <v-container>
                    <h2 class="text-center"
                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; margin-bottom: 75px;">
                        Layanan Kami
                    </h2>
                    <v-row class="center-cards">
                        <!-- First Card -->
                        <v-col cols="12" md="6" class="d-flex justify-center fixed-width ">
                            <div class="card-wrapper">
                                <v-card color="#9BB1D6" variant="outlined" class="mb-3">
                                    <v-container class="d-flex align-center">
                                        <div style="width: 79px;">
                                            <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain
                                                style="width: 100%; height: 79px;"></v-img>
                                        </div>
                                        <v-card-title
                                            style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                                            Dokter Hewan
                                        </v-card-title>
                                    </v-container>
                                    <v-card-text
                                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                                        Dokter hewan memastikan hewan tetap sehat melalui perawatan medis berkualitas dan saran kesehatan yang tepat.
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
                                            <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain
                                                style="width: 100%; height: 79px;"></v-img>
                                        </div>
                                        <v-card-title
                                            style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                                            Grooming
                                        </v-card-title>
                                    </v-container>
                                    <v-card-text
                                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                                        Grooming membantu mencegah masalah kesehatan dan memastikan hewan terlihat rapi dan sehat.
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
                                            <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain
                                                style="width: 100%; height: 79px;"></v-img>
                                        </div>
                                        <v-card-title
                                            style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                                            Petshop
                                        </v-card-title>
                                    </v-container>
                                    <v-card-text
                                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                                        Petshop juga menyediakan produk kesehatan seperti vitamin dan obat-obatan untuk mendukung kesejahteraan hewan peliharaan.
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
                                            <v-img src="@/assets/cat_icon.png" aspect-ratio="1" contain
                                                style="width: 100%; height: 79px;"></v-img>
                                        </div>
                                        <v-card-title
                                            style="font-family: 'Mochiy Pop One', sans-serif; font-size: 24px; margin-left: 10px;">
                                            Pet Hotel
                                        </v-card-title>
                                    </v-container>
                                    <v-card-text
                                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin: 5px;">
                                        Pet hotel menyediakan ruang bermain, makanan bergizi, dan pemantauan kesehatan, 
                                        serta layanan tambahan seperti grooming dan spa untuk memastikan hewan peliharaan merasa nyaman selama menginap.
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
            
            <div style="padding: 80px 0;">
                <v-container class="fill-height d-flex align-center justify-center">
                    <v-row>
                        <v-col cols="12" md="6">
                            <div class="text-center">
                                <div style="margin: auto; max-width: 80%;">
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Siapa Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        Kami adalah sebuah komunitas pecinta hewan yang berkomitmen untuk menyediakan
                                        fasilitas
                                        kesehatan<br>serta layanan untuk hewan peliharaan anda
                                    </p>
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Visi Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        Menjadi penyedia layanan petcare terdepan yang memberikan perawatan holistik, inovatif, 
                                        dan penuh kasih sayang kepada hewan peliharaan, serta meningkatkan kualitas hidup hewan peliharaan dan kepuasan pemiliknya.
                                    </p>
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Misi Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        1. Memberikan Perawatan Terbaik<br>
                                        2. Meningkatkan Kesehatan Hewan<br>
                                        3. Lingkungan yang Aman dan Nyaman<br>
                                        4. Layanan Inovatif<br>
                                        5. Pelayanan Pelanggan yang Unggul
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" class="align-self-center">
                            <div class="d-flex justify-center">
                                <v-img src="@/assets/collapse.png" width="462" height="457"></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

            <div style="padding: 62px 152px 92px 152px; background-color: #FCFCFC;">
                <v-container>
                    <h2 class="text-center"
                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; margin-bottom: 75px;">
                        Pet Shop
                    </h2>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-card outlined class="d-inline-block mr-4" style="width: 300px; height: 122px;">
                                <!-- content for first card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/Whiskas_Dry_Adult.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        Whiskas Dry Food
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                            <v-card outlined class="d-inline-block mr-4" style="width: 300px; height: 122px;">
                                <!-- content for second card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/Whiskas_Dry_Adult.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        Whiskas Dry Food
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                            <v-card outlined class="d-inline-block" style="width: 300px; height: 122px;">
                                <!-- content for third card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/Whiskas_Wet_Adult.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        Whiskas Wet Food
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-card outlined class="d-inline-block mr-4" style="width: 300px; height: 122px;">
                                <!-- content for fourth card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/Whiskas_Wet_Adult.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        Whiskas Wet Food
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                            <v-card outlined class="d-inline-block mr-4" style="width: 300px; height: 122px;">
                                <!-- content for fifth card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/MAXlife_Cat_Litter.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        MAXlife Cat Litter
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                            <v-card outlined class="d-inline-block" style="width: 300px; height: 122px;">
                                <!-- content for sixth card here -->
                                <div style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
                                    <v-img src="@/assets/MAXlife_Cat_Litter.png" aspect-ratio="1" contain
                                        style="width: 100px; height: 79px;"></v-img>
                                    <v-card-text style="font-family: 'Poppins', sans-serif;">
                                        MAXlife Cat Litter
                                        <br>
                                        <span style="color: #FFBF00;">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <br>
                                        <a href="/halaman-tujuan"
                                            style="text-decoration: none; color: black; transition: color 0.3s; font-family: 'Poppins', sans-serif;"
                                            onmouseover="this.style.color='blue'"
                                            onmouseout="this.style.color='black'">Cek Sekarang<v-icon
                                                x-small>mdi-chevron-right</v-icon></a>
                                    </v-card-text>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

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
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4"
                        style="text-transform: none;">
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
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4"
                        style="text-transform: none;">
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
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-card-text
                        style="font-family: 'Poppins', sans-serif; font-size: 14px; margin-bottom: 10px; padding: 0; opacity: 0.3;">
                        <v-icon left style="margin-right: 19px;">mdi-check-circle</v-icon>
                        Lorem ipsum dolor sit
                    </v-card-text>
                    <v-btn variant="outlined" color="#8FD0C6" class="elevation-0 mt-4"
                        style="text-transform: none;">
                        Cek Sekarang
                    </v-btn>
                    <v-img src="@/assets/card_icon.png"
                        style="position: absolute; bottom: 0px; right: -10px; z-index: 1; width: 133px; height: 122px;"></v-img>
                </v-card>
            </div>
            <div style="padding: 122px 0; background-color: white; display: flex; justify-content: center;">
                <v-card flat
                    style="width: 1260px; height: 270px; background-color: #8FD0C6; border-radius: 33px; display: flex; justify-content: center; align-items: center;">
                    <div
                        style="padding: 0 133px; display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <v-card-text
                            style="font-family: 'Mochiy Pop One', sans-serif; font-size: 39px; color: white; text-transform: none; line-height: 1.5;">
                            Peliharaan Anda Aman<br>Bersama Kami
                        </v-card-text>
                        <v-btn class="elevation-0"
                            style="width: 250px; font-family: 'Mochiy Pop One', sans-serif; height: 74px; background-color: white; color: #8FD0C6; border-radius: 37px; text-transform: none;">
                            Hubungi Kami
                        </v-btn>
                    </div>
                    <!-- other content for card here -->
                </v-card>
            </div>
        </v-main>
    </div>
</template>

<script setup></script>

<style scoped>
    .custom-background {
        background-color: rgba(155, 177, 214, 0.13);
        /* This makes sure the background color covers the full height of the viewport */
    }

    .hero-image {
        width: 100%;
        /* Adjust as needed */
    }

    .top-padding {
        padding-top: 0px;
        /* Adjust this value to increase or decrease the top padding */
    }

    .fixed-size {
        width: 400px;
        /* Adjust as needed */
        height: 246px;
        /* Adjust as needed */
    }

    .fixed-width {
        flex: 0 0 auto !important;
        max-width: 400px !important;
        /* Adjust as needed */
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
