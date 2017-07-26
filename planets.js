var Planets = Backbone.Model.extend({
    initialize: function() {
        console.log('planet is initialized.');
    },
    defaults: {
        climate: "",
        diameter: "",
        gravity: "",
        name: "",
        orbital_period: "",
        population: "",
        residents: "",
        rotation_period: "",
        surface_water: "",
        terrain: "",
        url: ""
    }
});

var PlanetsCollection = Backbone.Collection.extend({
    initialize: function() {
        console.log('planets Collection is initialized.');
    },
    model: Planets,
    url: "http://swapi.co/api/planets/1/"
});

var PlanetsView = Backbone.View.extend({
    initialize: function() {
        console.log('planets View is initialized');
    },
    el: '#contentPlanet',
    template: _.template($('#planetTemplate').html()),
    render: function() {
        this.$el.empty();
        var planetsTemplate =
            this.template(this.model.models[0].toJSON());
        this.$el.append(planetsTemplate);
        return this;
    }
});