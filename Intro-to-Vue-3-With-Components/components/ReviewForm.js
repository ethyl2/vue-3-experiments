app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a Review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="formData.name" />

        <label for="avatar">Avatar Url:</label>
        <input id="avatar" type="url" v-model="formData.avatar" />

        <label for="review">Review:</label>
        <textarea id="review" v-model="formData.review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="formData.rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            <option>0</option>
        </select>

       <input class="button" type="submit" value="Submit" />
    </form>
    `,
    data() {
        return {
            formData: {
            name: '',
            avatar: '',
            review: '',
            rating: null
            }
        }
    },
    props: {
        product: {
            type: String,
            required: true
        }
    },
    methods: {
        onSubmit() {
            const productReview = {
               name: this.formData.name,
               avatar: this.formData.avatar,
               rating: this.formData.rating,
               review: this.formData.review,
               product: this.product 
            }
            this.$emit('review-submitted', productReview)
            this.formData.name = ''
            this.formData.avatar = ''
            this.formData.review = ''
            this.formData.rating = null
        }
    }
})