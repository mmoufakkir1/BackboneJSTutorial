var People = Backbone.Model.extend({
    urlRoot: "https://swapi.co/api/people/1",
    initialize: function() { console.log('People is initialized.'); },
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
    initialize: function() { console.log("People Collection is initialized"); },
    model: People,
    url: "https://swapi.co/api/people/2"
});
var PeopleView = Backbone.View.extend({
    el: "#content",
    template: _.template($('#peopleTemplate').html()),
    render: function(eventName) {
        _.each(this.model.models, function(people) {
            var peopleTemplate =
                this.template(people.toJSON());
            $(this.el).append(peopleTemplate);
        }, this);
        return this;
    }
});
var peoplesCollection = new PeoplesCollection();
var peopleView = new PeopleView({ model: peoplesCollection });
peoplesCollection.fetch({
    success: function() { peopleView.render(); }
});