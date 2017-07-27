 var PeopleSearch = Backbone.Model.extend({
     initialize: function() {
         console.log('People search is initialized.');
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

 var PeoplesSearchCollection = Backbone.Collection.extend({
     initialize: function(stringQ) {
         console.log("People search Collection is initialized");
         this.stringQ = stringQ.replace(':', '').trim();
         console.log("value " + this.stringQ);
     },
     model: PeopleSearch,
     url: function() {
         return "https://swapi.co/api/people/?format=json&search=" + this.stringQ;
     }
 });

 var PeopleSearchView = Backbone.View.extend({
     initialize: function() {
         console.log("People search view is initialized");
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

 var PeopleSearchItemView = Backbone.View.extend({
     el: '#contentItemPeople',
     template: _.template($('#peopleItemTemplate').html()),
     initialize: function() {
         console.log("People search Item view is initialized");
         this.listenTo(this.model, "change", this.render);
     },
     render: function() {
         this.$el.empty();
         if (this.model.models[0].attributes.results[0].length === 1) {
             var personTemplate =
                 this.template(this.model.models[0].attributes.results[0]);
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