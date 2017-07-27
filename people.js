var People = Backbone.Model.extend({
    initialize: function() {
        console.log('People search is initialized.');
    },
    defaults: {
        name: "",
    },
});

var PeoplesCollection = Backbone.Collection.extend({
    initialize: function(stringQ) {
        console.log("People  Collection is initialized");
    },
    model: People,
    url: "https://swapi.co/api/people/?format=json"
});

var PeoplesSearchCollection = Backbone.Collection.extend({
    initialize: function(stringQ) {
        console.log("People search Collection is initialized");
        this.stringQ = stringQ.replace(':', '').trim();
        console.log("value " + this.stringQ);
    },
    model: People,
    url: function() {
        return "https://swapi.co/api/people/?format=json&search=" + this.stringQ;
    }
});

var PeopleView = Backbone.View.extend({
    initialize: function() {
        console.log("People search view is initialized");
        //this.bind("reset", this.render, this);
    },
    el: '#sectionTemplates',
    template: _.template($('#nameTemplate').html()),
    render: function() {
        this.$el.empty();
        this.$el.append(this.template);
        return this;
    }
});

var PeopleItemView = Backbone.View.extend({
    el: '#contentItemName',
    template: _.template($('#nameItemTemplate').html()),
    initialize: function() {
        console.log("People search Item view is initialized");
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