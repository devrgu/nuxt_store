<template>
    <div class="category">
        <div class="category-container">
            <div class="title">
                <p>DIFFERENT STYLES</p>
            </div>
            <div class="category-card-containers">
                <glasses-category v-for="(categor, i) in category" :key="i + 'B'" :placeholder="categor"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                category:[
                    {
                        img: '/glass-1.png',
                        title: 'Sunglasses'
                    },
                    {
                        img: '/glass-4.png',
                        title: 'Aviator'
                    },
                    {
                        img: '/glass-3.png',
                        title: 'Square'
                    },
                    {
                        img: '/pres-glass-3.png',
                        title: 'Cat Eye'
                    },
                    {
                        img: '/pres-glass-4.png',
                        title: 'Rimless'
                    },
                    {
                        img: '/protec-glass-3.png',
                        title: 'Sports'
                    },
                ]
            }
        },
        components: {
        }
    }
</script>

<style scoped>
    .category-container{
        max-width: calc(1440px - 100px);
        margin: 0 auto;
    }
    .title{
        text-align: center;
        font-weight: 600;
        font-size: 36px;
        margin: 42px 0 0px 0;
    }
    .category-card-containers{
        display: flex;
        flex-wrap: wrap;
    }
    >>>nav{
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    }
</style>