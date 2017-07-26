(function($) {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };

    // var mySearchView = Backbone.View.extend({
    //     el: '#searchButton',
    //     initialize: function() {
    //         console.log("initialize");
    //     },
    //     events: {
    //         'click': 'search'
    //     },
    //     search: function() {
    //         var searchInput = $('input[id=searchInput]');
    //         var searchLabel = $('input[id=searchLabel]');
    //         searchInput.focus();
    //         console.log("searchInput : " + searchInput.val() +
    //             ", searchLabel: " + searchLabel.val());

    //         //App.navigate(searchInput.val().toLowerCase(), { trigger: true, replace: true });
    //     }
    // });
    // new mySearchView();

    App.Router = Backbone.Router.extend({
        // events: function() {
        //     console.log('Router events  enter');
        //     var searchInput = $('input[id=searchInput]');
        //     var searchLabel = $('input[id=searchLabel]');
        //     $('#searchButton').click(function(e) {
        //         // e.preventDefault();

        //         searchInput.focus();
        //         console.log("searchInput : " + searchInput.val() +
        //             ", searchLabel: " + searchLabel.val());

        //         App.navigate(searchInput.val().toLowerCase(), { trigger: true, replace: true });

        //     });
        // },
        // el: '#searchButton',
        // events: {
        //     'click': 'search'
        //         // 'click #searchButton': 'search'
        // },
        // search: function() {
        //     console.log('Router events  enter');
        // },

        // events: function() {
        //     $('#searchButton').click(function(e) {
        //         e.preventDefault();
        //         console.log('Router events  enter');
        //         //App.navigate(e.target.pathname, true);
        //     });
        // },

        initialize: function() {
            console.log('Router enter');
        },
        routes: {
            '': '',
            'person': 'person',
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