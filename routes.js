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
            'people:search': 'peopleSearch',
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
        peopleSearch: function(search) {
            var peoplesSearchCollection = new PeoplesSearchCollection(search);
            var peopleSearchView = new PeopleSearchView();
            peopleSearchView.render();
            var peopleSearchItemView = new PeopleSearchItemView({ model: peoplesSearchCollection });
            peoplesSearchCollection.fetch({
                success: function() {
                    peopleSearchItemView.render();
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