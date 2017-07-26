(function($) {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };

    App.Router = Backbone.Router.extend({
        initialize: function() {
            console.log('Router enter');
        },
        routes: {
            '': '',
            'people': 'people',
            'films': 'films',
            'starships': 'starships',
            'vehicles': 'vehicles',
            'species': 'species',
            'planets': 'planets',
        },
        person: function() {
            var personCollection = new PersonCollection();
            var personView = new PersonView({ model: personCollection });
            personCollection.fetch({
                success: function() { personView.render(); }
            });
        },
        people: function() {
            var peoplesCollection = new PeoplesCollection();
            var peopleView = new PeopleView();
            peopleView.render();
            var peopleItemView = new PeopleItemView({ model: peoplesCollection });
            peoplesCollection.fetch({
                success: function() {
                    peopleItemView.render();
                }
            });
        },
        planets: function() {
            var planetsCollection = new PlanetsCollection();
            var planetsView = new PlanetsView({ model: planetsCollection });
            planetsCollection.fetch({
                success: function() { planetsView.render(); }
            });
        }
    });

    new App.Router;
    Backbone.history.start();


})(jQuery);