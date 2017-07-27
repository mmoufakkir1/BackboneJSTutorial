 var Person = Backbone.Model.extend({
     initialize: function() {
         console.log('Person is initialized.');
     },
     defaults: {
         name: ""
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
     template: _.template($('#nameTemplate').html()),
     //template: _.template('template_person.html'),
     render: function() {
         this.$el.empty();
         console.log(this.model.models.length);
         console.log(this.model.models[0].toJSON());
         if (this.model.models.length === 1) {
             var personTemplate =
                 this.template(this.model.models[0].toJSON());
             this.$el.append(personTemplate);
         } else {
             _.each(this.model.models[0].attributes.results, function(data) {
                 var peopleTemplate =
                     this.template(data);
                 this.$el.append(peopleTemplate);
             }, this);
         }
         return this;
     }


 });