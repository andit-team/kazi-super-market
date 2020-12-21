
<script>
import {
    required
} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../../../helpers/helper'
/**
 * Form Validation component
 */
import { mapGetters,mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
    head() {
        return {
            title: `${this.title} | KazisSuperMarket - Address Management`,
        };
    },
    data() {
        return {
            title: 'Address',
            items: [{
                    text: 'Home',
                    href: '/',
                },
                {
                  text: 'Address',
                    active: true,
                },
            ],

            form: {
                id: '',
                address: '',
                Phone: '',
                email: '',
                fax: '',
            },
            submitted: false,
            submit: false,

            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: 'age',
            sortDesc: false,
            fields: [
                {
                    key: 'address',
                    sortable: true
                },
                {
                    key: 'phone',
                    sortable: true
                },
                {
                    key: 'email',
                    sortable: true
                },
                {
                    key: 'fax',
                    sortable: true
                },
                {
                    key: 'Actions',
                    sortable: true
                }
            ],

            loaded: false,

        }
    },
    validations: {
        form: {
            address: {
                required
            },
            Phone: {
                required
            },
            email: {
                required
            },
            email: {
                required
            },
        }
    },
    //  computed: mapGetters(['category/allCategories']),
    computed: {
        ...mapGetters({tableData : 'settings/allAddress'}),
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length
        },
    },
    mounted() {
        this.totalRows = this.items.length
    },
    methods: {
        ...mapActions({
                AddressData : 'settings/getAddress',
                // newAddress : 'settings/createAddress',
                updateAddress : 'settings/updateAddress',
            }),
        // SaveAddress(id) {
        //    this.submitted = true
        //     this.$v.$touch()
        //     if (this.$v.$invalid) {
        //         console.log('error submit');
        //     } else {
        //         this.submit = true
        //         this.updateAddress(this.form).then(res => {
        //             if(res.error === false){
        //                 helper.SuccessMsg(res.msg);
        //                 this.form = {
        //                     id: '',
        //                     address: '',
        //                     Phone: '',
        //                     email: '',
        //                     fax: '',
        //                 }
        //             }else{
        //                 helper.WarningMsg(res.msg);
        //             }
        //             this.submit = false
        //         }).catch(err => {
        //             helper.WarningMsg(err.msg);
        //         });
        //     }
        // },

        async UpdateAddress(){
            this.$nuxt.$loading.start()
            const form = await this.$store.dispatch('settings/updateAddress',this.form);
            if(!form.error){
                this.$nuxt.$loading.finish()
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: form.msg
                }) 
                this.$router.push({path: "/admin/settings"});
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: form.msg
                })  
            }

        },

        textSorten(str,len){
            return helper.textSort(str,len);
        },



        // OnEdit(item){
        //     this.form.id = item._id
        //     this.form.address = item.address
        //     this.form.Phone = item.Phone
        //     this.form.email = item.email
        //     this.form.fax = item.fax
        // },

    },

   async created(){
       await this.AddressData();
       this.loaded = true

       let data =  await this.AddressData();
       this.form.address = data.data[0].address.address,
       this.form.Phone = data.data[0].address.Phone,
       this.form.email = data.data[0].address.email,
       this.form.fax = data.data[0].address.fax
    //    console.log(ddd);
    //    console.log(ddd.data[0].address.Phone);
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
    },
    middleware: 'admin-auth'
}
</script>

<template>
<div v-if="loaded">
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-4">
            <div class="card">

    <!-- <p>{{tableData[0].address.Phone}}</p> -->
    <!-- <p>{{tableData.social_links}}</p> -->

                <div class="card-body">
                    <h4 class="header-title m-t-0">Address Information</h4>

                    <form @submit.prevent="UpdateAddress">
                        <div class="form-group">
                            <label for="email">Email<span class="text-danger">*</span></label>
                            <input id="email" v-model="form.email" v-focus name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.form.email.$error }" type="text" placeholder="Enter email" />
                            <div v-if="submitted && !$v.form.email.required" class="invalid-feedback">This value is required.</div> 
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone<span class="text-danger">*</span></label>
                            <input id="phone" v-model="form.Phone" v-focus name="Phone" class="form-control" :class="{ 'is-invalid': submitted && $v.form.Phone.$error }" type="text" placeholder="Enter phone" />
                            <div v-if="submitted && !$v.form.Phone.required" class="invalid-feedback">This value is required.</div> 
                        </div>
                        <div class="form-group">
                            <label for="fax">Fax<span class="text-danger">*</span></label>
                            <input id="fax" v-model="form.fax" v-focus name="fax" class="form-control" :class="{ 'is-invalid': submitted && $v.form.fax.$error }" type="text" placeholder="Enter phone" />
                            <div v-if="submitted && !$v.form.fax.required" class="invalid-feedback">This value is required.</div> 
                        </div>

                        <div class="form-group">
                            <label for="address">Address</label>
                            <textarea id="address" v-model="form.address" v-focus name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.form.address.$error }" rows="5" placeholder="Write address"></textarea>
                        </div>

                        <div class="form-group text-right m-b-0">
                             <button class="btn btn-primary" :class="{ 'disabled': submit}" id="submit" type="submit" v-if="!form.id">Save</button>
                            <button class="btn btn-primary" :class="{ 'disabled': submit}" id="submit" type="submit" v-else>Update</button>
                
                        </div>
                    </form>
                </div>
            </div>
            <!-- end card-box -->
        </div>
        <!-- end col -->

    </div>
</div>
</template>