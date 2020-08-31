<template>
  <div id="shop-page">
    <nuxt-link to="/">← Go back home</nuxt-link>
    <br />
    <div class="container">
      <h3>Power To The Post Store</h3>
      <p>
        Created with ♥️ for the USPS. All profits from our store will be donated
        to support the American Postal Workers Union and ACLU.
      </p>
      <!-- <p>
        All proceeds support the USPS, ACLU and AWPU. Learn more about our
        efforts by reading our
        <nuxt-link to="/mission">mission page.</nuxt-link>
      </p> -->
    </div>

    <main class="collection-container container">
      <div id="collection-component-1598035906541"></div>

      <p style="text-align: center;">+ more merch coming soon!</p>
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Shop - Power To The Post',
    script: [
      {
        vmid: 'shopify-script',
        innerHTML: `
        /*<![CDATA[*/
        ;(function () {
          var scriptURL =
            'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit()
            } else {
              loadScript()
            }
          } else {
            loadScript()
          }
          function loadScript() {
            var script = document.createElement('script')
            script.async = true
            script.src = scriptURL
            ;(
              document.getElementsByTagName('head')[0] ||
              document.getElementsByTagName('body')[0]
            ).appendChild(script)
            script.onload = ShopifyBuyInit
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'power-to-the-post.myshopify.com',
              storefrontAccessToken: '4ceaf131af809e4cceafdb73c9b8a0a8',
            })
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('collection', {
                id: '212888354982',
                node: document.getElementById(
                  'collection-component-1598035906541'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  product: {
                    styles: {
                      product: {
                        '@media (min-width: 601px)': {
                          'max-width': 'calc(25% - 20px)',
                          'margin-left': '20px',
                          'margin-bottom': '50px',
                          width: 'calc(25% - 20px)',
                        },
                        img: {
                          height: 'calc(100% - 15px)',
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          top: '0',
                        },
                        imgWrapper: {
                          'padding-top': 'calc(75% + 15px)',
                          position: 'relative',
                          height: '0',
                        },
                      },
                      button: {
                        'font-family': 'Open Sans, sans-serif',
                        'font-weight': 'bold',
                        ':hover': {
                          'background-color': '#3227c8',
                        },
                        'background-color': '#382bde',
                        ':focus': {
                          'background-color': '#3227c8',
                        },
                      },
                    },
                    text: {
                      button: 'Add to cart',
                    },
                    googleFonts: ['Open Sans'],
                  },
                  productSet: {
                    styles: {
                      products: {
                        '@media (min-width: 601px)': {
                          'margin-left': '-20px',
                        },
                      },
                    },
                  },
                  modalProduct: {
                    contents: {
                      img: false,
                      imgWithCarousel: true,
                      button: false,
                      buttonWithQuantity: true,
                    },
                    styles: {
                      product: {
                        '@media (min-width: 601px)': {
                          'max-width': '100%',
                          'margin-left': '0px',
                          'margin-bottom': '0px',
                        },
                      },
                      button: {
                        'font-family': 'Open Sans, sans-serif',
                        'font-weight': 'bold',
                        ':hover': {
                          'background-color': '#3227c8',
                        },
                        'background-color': '#382bde',
                        ':focus': {
                          'background-color': '#3227c8',
                        },
                      },
                    },
                    googleFonts: ['Open Sans'],
                    text: {
                      button: 'Add to cart',
                    },
                  },
                  cart: {
                    styles: {
                      button: {
                        'font-family': 'Open Sans, sans-serif',
                        'font-weight': 'bold',
                        ':hover': {
                          'background-color': '#3227c8',
                        },
                        'background-color': '#382bde',
                        ':focus': {
                          'background-color': '#3227c8',
                        },
                      },
                    },
                    text: {
                      total: 'Subtotal',
                      button: 'Checkout',
                    },
                    googleFonts: ['Open Sans'],
                  },
                  toggle: {
                    styles: {
                      toggle: {
                        'font-family': 'Open Sans, sans-serif',
                        'font-weight': 'bold',
                        'background-color': '#382bde',
                        ':hover': {
                          'background-color': '#3227c8',
                        },
                        ':focus': {
                          'background-color': '#3227c8',
                        },
                      },
                    },
                    googleFonts: ['Open Sans'],
                  },
                },
              })
            })
          }
        })()
        /*]]>*/
      `,
        type: 'text/javascript',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'shopify-script': ['innerHTML'],
    },
  },
}
</script>

<style>
#shop-page {
  padding: 1rem;
}

.collection-container {
  margin-top: 3rem;
}
</style>
