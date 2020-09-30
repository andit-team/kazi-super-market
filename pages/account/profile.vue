<template>
    <div>
        <Header />
        <!-- Customer Profile Area Start -->
        <section class="customer-profile-area section-b-space light-layout">
            <div class="container">
                <div class="row customer-profile-wrap">
                    <div class="col-12 col-sm-12 col-md-4">
                        <div class="customer-info-box card">
                            <div class="customer-info-img-box rounded-circle ml-auto mr-auto mb-4"><img :src='"@/assets/images/profile-img/owner2.png"' alt="img">
                            </div>
                            <!-- Upload Profile Photo Start -->
                            <button class="btn theme-button mb-4">Upload Photo
                            <b-form-file v-model="upload_image" plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                            </button>
                            <!-- <div class="mt-3">Selected Image: {{ upload_image ? upload_image.name : '' }}</div> -->
                            <!-- Upload Profile Photo End -->
                            <div class="customer-name m-auto"><h6>Suraiya Aysha</h6></div>
                            <div class="customer-mobile m-auto"><strong>Mobile:</strong> 01911 222222</div>

                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-8">
                        <div class="customer-right-side">
                            <div class="customer-profile-pages">
                                <ul>
                                    <li><nuxt-link to="account-edit">আপডেট অ্যাকাউন্ট<i class="fas fa-angle-right"></i></nuxt-link></li>
                                    <li><nuxt-link to="add-vehicle">যানবাহন যুক্ত করুন<i class="fas fa-angle-right"></i></nuxt-link></li>
                                    <li><nuxt-link to="bookmark">বুকমার্ক দেখুন<i class="fas fa-angle-right"></i></nuxt-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Customer Profile Area End -->
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
export default {
  data() {
    return {
    upload_image: null,
    }
   }
}
</script>

<style>
.customer-info-img-box {
	width: 140px;
	height: 140px;
	background-color: #eee;
	overflow: hidden;
}
.customer-info-img-box img {
	height: 140px;
	width: auto;
}
.customer-info-box .form-control-file {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
}
.customer-info-box.card {
	padding: 30px;
	text-align: center;
}
.customer-profile-pages ul li a {
	border: 1px solid rgba(0, 0, 0, 0.125);
	padding: 15px 20px;
	display: flex;
	margin-bottom: 20px;
	justify-content: space-between;
	align-items: center;
	color: var(--heading-color);
	background-color: #fff;
}
.customer-profile-pages ul li a:hover {
	color: var(--hover-color);
}
</style>