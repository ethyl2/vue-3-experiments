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
        <div class="recommendation-section">
            <h4>Would you recommend this product?</h4>
            <input type="radio" id="yes" value="Yes" v-model="formData.wouldRecommend">
            <label for="yes">Yes</label>
            <input type="radio" id="no" value="No" v-model="formData.wouldRecommend">
            <label for="no">No</label>
        </div>

       <input class="button" type="submit" value="Submit" />
    </form>
    `,
    data() {
        return {
            formData: {
            name: '',
            avatar: '',
            review: '',
            rating: null,
            wouldRecommend: null
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
            if (this.formData.name === '' || this.formData.review === '' || this.formData.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            } else {
            const productReview = {
               name: this.formData.name,
               avatar: this.formData.avatar,
               rating: this.formData.rating,
               review: this.formData.review,
               product: this.product,
               wouldRecommend: this.formData.wouldRecommend
            }
            this.$emit('review-submitted', productReview)
            this.formData.name = ''
            this.formData.avatar = ''
            this.formData.review = ''
            this.formData.rating = null
            this.formData.wouldRecommend = null
        }
    }
    }
})