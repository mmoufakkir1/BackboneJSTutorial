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
     el: '#sectionTemplates',
     template: _.template($('#personTemplate').html()),
     //template: _.template('template_person.html'),
     render: function() {
         this.$el.empty();
         var personTemplate =
             this.template(this.model.models[0].toJSON());
         this.$el.append(personTemplate);
         //  var data = this.model.models[0].toJSON();
         //  $.get('template_person.html', function(data) {
         //      template = _.template(data, null);
         //      that.$el.html(template);
         //  }, 'html');
         return this;
     }


 });