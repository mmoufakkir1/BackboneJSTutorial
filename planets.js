var Planets = Backbone.Model.extend({
    initialize: function() {
        console.log('planet is initialized.');
    },
    defaults: {
        name: "",
    }
});

var PlanetsCollection = Backbone.Collection.extend({
    initialize: function() {
        console.log('planets Collection is initialized.');
    },
    model: Planets,
    url: "http://swapi.co/api/planets/?format=json"
});

var PlanetsSearchCollection = Backbone.Collection.extend({
    initialize: function(stringQ) {
        console.log("People search Collection is initialized");
        this.stringQ = stringQ.replace(':', '').trim();
        console.log("value " + this.stringQ);
    },
    model: Planets,
    url: function() {
        return "https://swapi.co/api/planets/?format=json&search=" + this.stringQ;
    }
});

var PlanetsView = Backbone.View.extend({
    initialize: function() {
        console.log('planets View is initialized');
    },
    el: '#sectionTemplates',
    template: _.template($('#nameTemplate').html()),
    render: function() {
        this.$el.empty();
        this.$el.append(this.template);
        return this;
    }
});

var PlanetsItemView = Backbone.View.extend({
    el: '#contentItemName',
    template: _.template($('#nameItemTemplate').html()),
    initialize: function() {
        console.log("Films search Item view is initialized");
        this.listenTo(this.model, "change", this.render);
    },
    render: function() {
        this.$el.empty();
        if (this.model.models[0].attributes.results[0].length === 1) {
            var template =
                this.template(this.model.models[0].attributes.results[0]);
            this.$el.append(template);
        } else {
            _.each(this.model.models[0].attributes.results, function(data) {
                var template =
                    this.template(data);
                this.$el.append(template);
            }, this);
        }

        return this;
    }
});