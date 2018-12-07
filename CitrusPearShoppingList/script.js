var data = {
    title: "Citrus Pear",
    items: [
        {name: "Brown rice, quinoa, or Asian noodle", checked: false, recipe: "Cashew Chicken"},
        {name: "Whole wheat pita bread", checked: false, recipe: "Chicken Gyros"},
        {name: "Plain low fat Greek yogurt", checked: false, recipe: "Chicken Gyros"},
        {name: "Lemon juice", checked: false, recipe: "Chicken Gyros"},
        {name: "Cucumber", checked: false, recipe: "Chicken Gyros"},
        {name: "Dried dill", checked: false, recipe: "Chicken Gyros"},
        {name: "Prepared tzatziki sauce (if desired)", checked: false, recipe: "Chicken Gyros"},
        {name: "Whole wheat tortillas", checked: false, recipe: "Chicken Lime Tacos"},
        {name: "Lettuce", checked: false, recipe: "Chicken Lime Tacos"},
        {name: "Shredded cheese", checked: false, recipe: "Chicken Lime Tacos"},
        {name: "Desired taco toppings", checked: false, recipe: "Chicken Lime Tacos"},
        {name: "Parmesan cheese if desired", checked: false, recipe: "Italian Sausage & Tortellini Soup"},
        {name: "Brown rice", checked: false, recipe: "Korean Beef"},
        {name: "Green onions", checked: false, recipe: "Korean Beef"},
        {name: "Sesame Seeds", checked: false, recipe: "Korean Beef"},
        {name: "Noodle of choice", checked: false, recipe: "Pesto Tossed Lasagna"},
        {name: "Whole wheat tortillas", checked: false, recipe: "Sweet Pork"},
        {name: "Additional salad/taco toppings", checked: false, recipe: "Sweet Pork"},
        {name: "Brown rice", checked: false, recipe: "Tex-Mex Chicken"},
        {name: "Tortillas", checked: false, recipe: "Tex-Mex Chicken"},
        {name: "Chicken broth for tortilla soup", checked: false, recipe: "Tex-Mex Chicken"},
        {name: 'Fresh "taco style" toppings', checked: false, recipe: "Tex-Mex Chicken"}
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

            this.items.unshift({name: item, checked: false, recipe:'Custom'});
            this.newItem = '';
        },
        checkboxToggle: function(item) {
            this.sortItems();
        }
    }
});

vm.init();