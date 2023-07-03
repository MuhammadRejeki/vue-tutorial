const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sand',
            age: 45
        }
    },
    methods: {
        fShow() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data)
            }
        }
    }
});

app.mount("#vueApp");