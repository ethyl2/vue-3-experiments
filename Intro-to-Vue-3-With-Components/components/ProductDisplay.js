app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            default: false
        }
    },
    template: 
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <a :href="url" :target="target">
              <img :class="{'out-of-stock-img': !inStock}" :src="image" alt="product"/>
            </a>
          </div>
          <div class="product-info">
            <h1 :style="headlineStyles" @click="increaseHeadlineSize">{{ title }}</h1>
            <p v-if="almostSoldOut">Almost Sold Out</p>
            <p v-else-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">
              <span class="lined">{{ normalPrice }}</span> <span class="on-sale">{{ currentPrice }}</span> <span class="sale-message">{{ saleMessage }}</span></p>
            <p v-else>{{ currentPrice }}</p>
            <p>Shipping: {{ shipping }}</p>
           <product-details :details="details"></product-details>
           <div style="display: flex;">
            <div v-for="variant, index in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle"  :style="{ backgroundColor: variant.color }" >
            <span>{{ variant.quantity }}</span>
            </div>
          </div>
          <div v-for="variant, index in variants" :key="variant.id" :style="variantBarStyles(index)" @mouseover="updateVariant(index)"></div>
           <h3>Sizes:</h3>
           <ul>
             <div v-for="size, index in sizes" :key=index style="display: inline; margin-right: 4px;">{{ size }}</div>
           </ul>
           
           <div style="display: flex; padding-left: 0;">
            <button class="button" @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button class="button" @click="removeFromCart" :disabled="!cart" :class="{ disabledButton: !cart }">Remove from Cart</button>
          </div>
          </div>
         
        </div>
      </div>
    `,
    data() {

        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            url: 'https://greensock.com/',
            target: '_blank',
            normalPrice: 10,
            currentPrice: 5,
            saleMessage: 'On Sale!',
            details: ['50% cotton', '30% wool', '20% polyester', '100% awesome'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 1}
            ],
            selectedVariant: 0,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            currentFontSize: 20,
            currentBValue: 100,
            goingUp: true 
        }
    },
    computed: {
        shipping() {
            return this.premium ? 'Free' : '$4.99'
        },
        inventory() {
            // Sum up the current quantities of all the variants
            return this.variants.reduce(function(prev, currentVariant) {
                return prev + currentVariant.quantity;
            }, 0);
        },
        inStock() {
            //return this.inventory > 0
            return this.variants[this.selectedVariant].quantity > 0
        },
        almostSoldOut() {
            return this.variants[this.selectedVariant].quantity <= 10 && this.variants[this.selectedVariant].quantity > 0
        },
        onSale() {
            return this.currentPrice < this.normalPrice
        },
        headlineStyles() {
            return {
                color: `rgb(34,193, ${this.currentBValue})`,
                fontSize: `${this.currentFontSize}px`,
                cursor: 'pointer',
            }
        },
        title() {
            return `${this.brand} ${this.product}`
        }
        
        
    },
    methods: {
       
        addToCart() {
            this.$emit('add-to-cart')
            // if (this.variants[this.selectedVariant].quantity) {
            //     if (this.cart[this.selectedVariant]) {
            //         this.cart[this.selectedVariant] += 1
            //     } else {
            //         this.cart[this.selectedVariant] = 1
            //     }
            // this.variants[this.selectedVariant].quantity -= 1
            // }
        },
        removeFromCart() {
           if (this.cart[this.selectedVariant] > 0) {
               this.cart[this.selectedVariant] -= 1
               this.variants[this.selectedVariant].quantity += 1
           }
        },
        updateImage(imageUrl) {
            this.image = imageUrl
        },
        updateVariant(variantIndex) {
            this.selectedVariant = variantIndex
            this.updateImage(this.variants[variantIndex].image)
        },
        increaseHeadlineSize() {
            this.currentFontSize += 10
            if (this.currentBValue > 254) {
                this.goingUp = false
            }
            if (this.currentBValue <= 0) {
                this.goingUp = true
            }
            if (this.goingUp) {
                this.currentBValue += 10
            }
            else {
                this.currentBValue -= 10
            }
        },
        variantBarStyles(variantIndex) {
            return {
            backgroundImage: `url(${this.variants[variantIndex].image})`,
            backgroundSize: 'contain',
            width: '100%',
            height: '2em',
            paddingBottom: '0.5em'
            }
        }
    }
})