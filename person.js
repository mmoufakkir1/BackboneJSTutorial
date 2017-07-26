 var Person = Backbone.Model.extend({
     initialize: function() {
         console.log('Person is initialized.');
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

 var PersonCollection = Backbone.Collection.extend({
     initialize: function() {
         console.log("Person Collection is initialized");
     },
     model: Person,
     url: "https://swapi.co/api/people/1/"
 });

 var PersonView = Backbone.View.extend({
     initialize: function() {
         console.log("Person view is initialized");
     },
     el: '#contentPerson',
     template: _.template($('#personTemplate').html()),
     render: function() {
         this.$el.empty();
         var personTemplate =
             this.template(this.model.models[0].toJSON());
         this.$el.append(personTemplate);

         return this;
     }
 });