const app = Vue.createApp({
    data() {
        return {
            cart: {},
            premium: true
        }
    },
    computed: {
        cartCount() {
            // Total number of items in the cart
            return Object.values(this.cart).reduce((prev, curr) => prev + curr, 0)
        },
        
    },
    methods: {
       updateCart(selectedVariant) {
        if (this.cart[selectedVariant]) {
            this.cart[selectedVariant] += 1
        } else {
            this.cart[selectedVariant] = 1
        }
        },
        removeFromCart(selectedVariant) {
           if (this.cart[selectedVariant] > 0) {
               this.cart[selectedVariant] -= 1
           }
        },
    }
})
