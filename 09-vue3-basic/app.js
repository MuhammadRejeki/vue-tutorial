const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            showFilter: false,
            books: [
                { title: 'The Final Empire', author: 'Brandon Sand', year: '1994', isFav: true },
                { title: 'The Way of king', author: 'King Ragnar', year: '0984', isFav: false },
                { title: 'The Pacifier', author: 'Brandon Sand', year: '1123', isFav: true },

            ],
            url: "https://effist.com",
            x: 0,
            y: 0
        }
    },
    methods: {
        fShow() {
            this.showBooks = !this.showBooks
        },
        filter() {
            this.showFilter = !this.showFilter
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(function (book) { book.isFav == true });
        }
    }
});

app.mount("#vueApp");