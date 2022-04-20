var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Mundo',
        sum: 3 + 10,
        value: 7,
        isVisible: true,
        people: ['María', 'Matías', 'Titán'],
        content_html: '<h1>Hola Mundo!</h1>',
        src: 'https://www.holycarstv.com/wp-content/uploads/2020/04/nissan-skyline-1024x576.jpg',
        text: 'Descripción de nuestra imágen'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(value1, value2){
            return value1 + value2;
        }
    }
});