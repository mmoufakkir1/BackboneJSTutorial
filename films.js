 var Films = Backbone.Model.extend({
     initialize: function() {
         console.log('People search is initialized.');
     },
     defaults: {
         title: ""
     },
 });

 var FilmsCollection = Backbone.Collection.extend({
     initialize: function() {
         console.log("Films Collection is initialized");
     },
     model: Films,
     url: "https://swapi.co/api/films/?format=json"
 });

 var FilmsSearchCollection = Backbone.Collection.extend({
     initialize: function(stringQ) {
         console.log("Films search Collection is initialized");
         this.stringQ = stringQ.replace(':', '').trim();
         console.log("value " + this.stringQ);
     },
     model: Films,
     url: function() {
         return "https://swapi.co/api/films/?format=json&search=" + this.stringQ;
     }
 });

 var FilmsView = Backbone.View.extend({
     initialize: function() {
         console.log("Films search view is initialized");
         //this.bind("reset", this.render, this);
     },
     el: '#sectionTemplates',
     template: _.template($('#titleTemplate').html()),
     render: function() {
         this.$el.empty();
         this.$el.append(this.template);
         return this;
     }
 });

 var FilmsItemView = Backbone.View.extend({
     el: '#contentItemTitle',
     template: _.template($('#titleItemTemplate').html()),
     initialize: function() {
         console.log("Films search Item view is initialized");
         this.listenTo(this.model, "change", this.render);
     },
     render: function() {
         this.$el.empty();
         if (this.model.models[0].attributes.results[0].length === 1) {
             var filmTemplate =
                 this.template(this.model.models[0].attributes.results[0]);
             this.$el.append(filmTemplate);
         } else {
             _.each(this.model.models[0].attributes.results, function(data) {
                 var filmTemplate =
                     this.template(data);
                 this.$el.append(filmTemplate);
             }, this);
         }

         return this;
     }
 });