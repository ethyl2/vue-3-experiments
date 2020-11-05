app.component('reviews-list', {
    props: {
        reviews: {
            type: Array, 
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container" v-if="reviews.length">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index" class="review">
            <div class="image-cropper">
                <img :src="review.avatar" :alt="review.name" class="avatar-img"/>
            </div>
            <span style="padding-left: 10px;">
            {{ review.name }} gave {{ review.product}} {{ review.rating }} {{ starVersion(review.rating) }}.
            <br />
            "{{ review.review }}"
            </span>
            </li>
        </ul>
    </div>
    `,
   methods: {
        starVersion(rating) {
            console.log(rating)
            return parseInt(rating) > 1 || parseInt(rating) === 0 ? 'stars': 'star'
        }
    }
})