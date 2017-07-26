 var People = Backbone.Model.extend({
     initialize: function() {
         console.log('People is initialized.');
     },
     defaults: {
         name: "",
         height: "",
         mass: "",
         hair_color: "",
         skin_color: "",
         eye_color: "",
         birth_year: "",
         gender: "",
         homeworld: "",
         films: "",
         species: "",
         vehicles: "",
         starships: "",
         created: "",
         edited: "",
         url: ""
     },
 });

 var PeoplesCollection = Backbone.Collection.extend({
     initialize: function() {
         console.log("People Collection is initialized");
     },
     model: People,
     url: "https://swapi.co/api/people/?format=json"
 });

 var PeopleView = Backbone.View.extend({
     initialize: function() {
         console.log("People view is initialized");
         //this.bind("reset", this.render, this);
     },
     el: '#sectionTemplates',
     template: _.template($('#peopleTemplate').html()),
     render: function() {
         this.$el.empty();
         this.$el.append(this.template);
         return this;
     }
 });

 var PeopleItemView = Backbone.View.extend({
     initialize: function() {
         console.log("People Item view is initialized");
     },
     el: '#contentItemPeople',
     template: _.template($('#peopleItemTemplate').html()),
     render: function() {
         _.each(this.model.models[0].attributes.results, function(people) {
             //console.log(people);
             var peopleTemplate =
                 this.template(people);
             this.$el.append(peopleTemplate);
         }, this);
         return this;
     }
 });