const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hola Mundo',
        sum: 3 + 10,
        value: 7,
        isVisible: true,
        people: ['María', 'Matías', 'Titán'],
        content_html: '<h1>Hola Mundo!</h1>',
        src: 'https://www.holycarstv.com/wp-content/uploads/2020/04/nissan-skyline-1024x576.jpg',
        text: 'Descripción de nuestra imágen',
        numero: 14,
        v_model: 'Hola v-model',
        p_error: false
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(value1, value2){
            return value1 + value2;
        },
        incrementar(){
            this.numero++;
        },
        decrementar(){
            this.numero--;
        }
    },
    /* Cada vez que la variable numero reciba un cambio esta función watch se va a disparar */
    watch: {
        numero: function(val){
            console.log('watch: ' + val)
        }
    }
});