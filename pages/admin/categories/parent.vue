<script>
import {
    required,
    email,
    minLength,
    sameAs,
    maxLength,
    minValue,
    maxValue,
    numeric,
    url,
    alphaNum,
} from 'vuelidate/lib/validators'

/**
 * Form Validation component
 */
import Multiselect from 'vue-multiselect'
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        Multiselect
    },
    data() {
        return {
            title: 'Form Validation',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Forms',
                    href: '/',
                },
                {
                    text: 'Validation',
                    active: true,
                },
            ],

            form: {
                parent: '',
                category_name: '',
                description: '',
                thumbnail: ''
            },
            submitted: false,
            value: null,
            options: [
                'Alaska',
                'Hawaii',
                'California',
                'Nevada',
                'Oregon',
                'Washington',
                'Arizona',
                'Colorado',
                'Idaho',
                'Montana',
                'Nebraska',
                'New Mexico',
                'North Dakota',
                'Utah',
                'Wyoming',
                'Alabama',
                'Arkansas',
                'Illinois',
                'Iowa',
            ],
            // submitStatus: null,
        }
    },
    validations: {
        form: {
            // parent: {
            //     required
            // },
            category_name: {
                required
            },
            // description: {
            //     required
            // },
            // thumbnail: {
            //     required
            // },
        }
    },
    methods: {
        setFile(event){
            this.form.thumbnail = event.target.files[0];
        },
        /**
         * Basic Form submit
         */
        handleSubmit(e) {
            this.submitted = true
            // stop here if form is invalid
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
            } else {

            }
        }
    },
    middleware: 'router-auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title m-t-0">Basic Form</h4>

                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label for="category_name">
                                User Name
                                <span class="text-danger">*</span>
                            </label>
                            <input id="category_name" v-model="form.category_name" name="category_name" class="form-control" :class="{ 'is-invalid': submitted && $v.form.category_name.$error }" type="text" placeholder="Enter user name" />
                            <div v-if="submitted && !$v.form.category_name.required" class="invalid-feedback">This value is required.</div>
                        </div>
                        <div class="form-group">
                            <label for="category_name">
                                Thumbnail
                            </label>
                            <input id="thumbnail" name="thumbnail" class="form-control" type="file" @change="setFile"/>
                        </div>
                        <div class="form-group">
                            <label for="category_name">
                                Description
                            </label>
                            <textarea name="description" id="description" v-model="form.description" class="form-control" rows="5" placeholder="Write about this category">

                            </textarea>
                        </div>
                        <!-- <div class="form-group">
                            <label for="parent_category">Single Select</label>
                            <multiselect v-model="form.parent" :options="options"></multiselect>
                            <div v-if="submitted && !$v.form.parent.required" class="invalid-feedback">This value is required.</div>

                            <input id="category_name" v-model="form.category_name" name="category_name" class="form-control" :class="{ 'is-invalid': submitted && $v.form.category_name.$error }" type="text" placeholder="Enter user name" />
                            <div v-if="submitted && !$v.form.category_name.required" class="invalid-feedback">This value is required.</div>
                        </div> -->

                        <div class="form-group text-right m-b-0">
                            <button class="btn btn-primary" type="submit">Submit</button>
                            <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- end card-box -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">

        </div>
        <!-- end col -->
    </div>
</div>
</template>
