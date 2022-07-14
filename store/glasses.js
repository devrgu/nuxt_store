export const state = () => ({
    titles:[
                    {
                        name: 'sunglasses'
                    },
                    {
                        name: 'prescription frames'
                    },
                    {
                        name: 'PROTECTIVE EYEWARE'
                    }
                ],
                cards:[
                   {
                       id: 0,
                       class: 'sunglasses',
                       name: 'Premium Square Sunglasses',
                       price: 32.95,
                       src: '/glass-1.png',
                       src2: '/glass-1-2.png',
                       src3: '/glass-1-3.png',
                       srcmini: '/glass-1-mini.png',
                       src2mini:'/glass-2-mini.png',
                       src3mini:'/glass-3-mini.png',
                       
                   },
                   {
                       id: 1,
                       class: 'sunglasses',
                       name: 'Premium Cat-Eye Sunglasses',
                       price: 39.95,
                       src: '/glass-2.png'
                   },
                    {
                        id: 2,
                        class: 'sunglasses',
                       name: 'Premium Tint Sunglasses',
                       price: 29.95,
                       src: '/glass-3.png'
                   },
                    {
                        id: 3,
                        class: 'sunglasses',
                       name: 'Premium Aviator Sunglasses',
                       price: 39.95,
                       src: '/glass-4.png'
                    },
                   {
                       class: 'prescription frames',
                       id: 4,
                       name: 'Square Glasses',
                       price: 23.95,
                       src: '/pres-glass-1.png'
                   },
                   {
                       class: 'prescription frames',
                       id: 5,
                       name: 'Aviator Glasses',
                       price: 32.95,
                       src: '/pres-glass-2.png'
                   },
                    {
                        class: 'prescription frames',
                        id: 6,
                       name: ' Cat Eye Glasses',
                       price: 23.95,
                       src: '/pres-glass-3.png'
                   },
                    {
                        class: 'prescription frames',
                        id:7,
                       name: 'Rimless Glasses',
                       price: 35.95,
                       src: '/pres-glass-4.png'
                   },
                   {
                       class: 'PROTECTIVE EYEWARE',
                       id: 8,
                       name: 'Safety Glasses',
                       price: 39.95,
                       src: '/protec-glass-1.png'
                   },
                   {
                       class: 'PROTECTIVE EYEWARE',
                       id: 9,
                       name: 'Protective Glasses',
                       price: 27.95,
                       src: '/protec-glass-2.png'
                   },
                    {
                        class: 'PROTECTIVE EYEWARE',
                        id:10,
                       name: 'Sports Protective Goggles',
                       price: 45.95,
                       src: '/protec-glass-3.png'
                   },
                    {
                        class: 'PROTECTIVE EYEWARE',
                        id: 11,
                       name: 'Protective Goggles',
                       price: 9.95,
                       src: '/protec-glass-4.png'
                   }
                    ]
})
      export const getters = {
          products: state
      }
