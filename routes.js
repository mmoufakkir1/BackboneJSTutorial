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
            'person': 'person',
            'people': 'people',
            'people:search': 'people',
            'films': 'films',
            'films:search': 'films',
            'starships': 'starships',
            'starships:search': 'starships',
            'vehicles': 'vehicles',
            'vehicles:search': 'vehicles',
            'species': 'species',
            'species:search': 'species',
            'planets': 'planets',
            'planets:search': 'planets',
        },
        person: function() {
            var personCollection = new PersonCollection();
            var personView = new PersonView({ model: personCollection });
            personCollection.fetch({
                success: function() { personView.render(); }
            });
        },
        people: function(search) {
            var peoplesCollection;
            if (_.isEmpty(search))
                peoplesCollection = new PeoplesCollection();
            else
                peoplesCollection = new PeoplesSearchCollection(search);

            var peopleView = new PeopleView();
            peopleView.render();
            var peopleItemView = new PeopleItemView({ model: peoplesCollection });
            peoplesCollection.fetch({
                success: function() {
                    peopleItemView.render();
                }
            });
        },
        planets: function(search) {
            var planetsCollection;
            if (_.isEmpty(search))
                planetsCollection = new PlanetsCollection();
            else
                planetsCollection = new PlanetsSearchCollection(search);

            var planetsView = new PlanetsView();
            planetsView.render();
            var planetsItemView = new PlanetsItemView({ model: planetsCollection });
            planetsCollection.fetch({
                success: function() { planetsItemView.render(); }
            });
        },
        films: function(search) {
            var filmsCollection;
            if (_.isEmpty(search))
                filmsCollection = new FilmsCollection();
            else
                filmsCollection = new FilmsSearchCollection(search);

            var filmView = new FilmsView();
            filmView.render();
            var filmItemView = new FilmsItemView({ model: filmsCollection });
            filmsCollection.fetch({
                success: function() {
                    filmItemView.render();
                }
            });
        },
    });

    new App.Router;
    Backbone.history.start();

})(jQuery);