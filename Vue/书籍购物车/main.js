const app = new Vue({
    el: "#app",
    data: {
        message:'aaa',
        books: [
            {
                'id': 1,
                'name': '算法导论',
                'date': '2006-9',
                'price': 85,
                'num': 0
            },
            {
                'id': 2,
                'name': 'UNIX编程',
                'date': '2006-9',
                'price': 85,
                'num': 0
            },
            {
                'id': 3,
                'name': '编程珠玑',
                'date': '2008-10',
                'price': 39,
                'num': 0
            },
            {
                'id': 4,
                'name': '代码大全',
                'date': '2006-3',
                'price': 128,
                'num': 0
            },
        ],
    },
    filters:{
        showPrice(price){
            return "￥"+price.toFixed(2);
        }
    },
    methods: {
        removeHandle(index){
            this.books.splice(index,1)
        }
    },
})

