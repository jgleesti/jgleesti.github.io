var data = {
    title: "Citrus Pear",
    items: [
        {name: "Brown rice, quinoa, or Asian noodle", checked: false},
        {name: "Whole wheat pita bread", checked: false},
        {name: "Plain low fat Greek yogurt", checked: false},
        {name: "Lemon juice", checked: false},
        {name: "Cucumber", checked: false},
        {name: "Dried dill", checked: false},
        {name: "Prepared tzatziki sauce (if desired)", checked: false},
        {name: "Whole wheat tortillas", checked: false},
        {name: "Lettuce", checked: false},
        {name: "Shredded cheese", checked: false},
        {name: "Desired taco toppings", checked: false},
        {name: "Parmesan cheese if desired", checked: false},
        {name: "Brown rice", checked: false},
        {name: "Green onions", checked: false},
        {name: "Sesame Seeds", checked: false},
        {name: "Noodle of choice", checked: false},
        {name: "Whole wheat tortillas", checked: false},
        {name: "Additional salad/taco toppings", checked: false},
        {name: "Brown rice", checked: false},
        {name: "Tortillas", checked: false},
        {name: "Chicken broth for tortilla soup", checked: false},
        {name: "Fresh 'taco style' toppings", checked: false}
    ],
    newItem: ''
};

var vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        sortItems: function () {
            this.items.sort((a,b) => a.checked === b.checked ? 0 : a.checked ? 1 : -1);
        },
        init: function() {
            this.sortItems();
        },
        addItem: function() {
            var item = this.newItem;

            this.items.unshift({name: item, checked: false});
            this.newItem = '';
        },
        checkboxToggle: function(item) {
            this.sortItems();
        }
    }
});

vm.init();