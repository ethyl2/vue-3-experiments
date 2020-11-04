const app = Vue.createApp({
    data() {
        return {
            cart: {},
            premium: true
        }
    },
    computed: {
        // inventory() {
        //     // Sum up the current quantities of all the variants
        //     return this.variants.reduce(function(prev, currentVariant) {
        //         return prev + currentVariant.quantity;
        //     }, 0);
        // },
        cartCount() {
            // Total number of items in the cart
            return Object.values(this.cart).reduce((prev, curr) => prev + curr, 0)
        },
        
    },
    methods: {
    //     addToCart() {
    //         if (this.variants[this.selectedVariant].quantity) {
    //             if (this.cart[this.selectedVariant]) {
    //                 this.cart[this.selectedVariant] += 1
    //             } else {
    //                 this.cart[this.selectedVariant] = 1
    //             }
    //         this.variants[this.selectedVariant].quantity -= 1
    //         }
    //     },
    //     removeFromCart() {
    //        if (this.cart[this.selectedVariant] > 0) {
    //            this.cart[this.selectedVariant] -= 1
    //            this.variants[this.selectedVariant].quantity += 1
    //        }
    //     },
    //     updateImage(imageUrl) {
    //         this.image = imageUrl
    //     },
    //     updateVariant(variantIndex) {
    //         this.selectedVariant = variantIndex
    //         this.updateImage(this.variants[variantIndex].image)
    //     },
    //     increaseHeadlineSize() {
    //         this.currentFontSize += 10
    //         if (this.currentBValue > 254) {
    //             this.goingUp = false
    //         }
    //         if (this.currentBValue <= 0) {
    //             this.goingUp = true
    //         }
    //         if (this.goingUp) {
    //             this.currentBValue += 10
    //         }
    //         else {
    //             this.currentBValue -= 10
    //         }
    //     },
    //     variantBarStyles(variantIndex) {
    //         return {
    //         backgroundImage: `url(${this.variants[variantIndex].image})`,
    //         backgroundSize: 'contain',
    //         width: '100%',
    //         height: '2em',
    //         paddingBottom: '0.5em'
    //         }
    //     }
    }
})
