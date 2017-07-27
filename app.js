// dropdown dynamic populate
$(document).ready(function(e) {
    $(document).on('click', '.bs-dropdown-to-select-group .dropdown-menu li', function(event) {
        var $target = $(event.currentTarget);
        $target.closest('.bs-dropdown-to-select-group')
            .find('[data-bind="bs-drp-sel-value"]').val($target.attr('data-value'))
            .end()
            .children('.dropdown-toggle').dropdown('toggle');
        $target.closest('.bs-dropdown-to-select-group')
            .find('[data-bind="bs-drp-sel-label"]').text($target.attr('data-value')); /*$target.text()*/

        //update placeholder
        if (($target.text().trim() == 'People') ||
            ($target.text().trim() == 'Species') ||
            ($target.text().trim() == 'Planets')) {
            var searchInput = $('input[id=searchInput]');
            searchInput.attr("placeholder", "Search Fields: Name");
        }

        if ($target.text().trim() == 'Films') {
            var searchInput = $('input[id=searchInput]');
            searchInput.attr("placeholder", "Search Fields: title");
        }


        if (($target.text().trim() == 'Starships') ||
            ($target.text().trim() == 'Vehicles')) {
            var searchInput = $('input[id=searchInput]');
            searchInput.attr("placeholder", "Search Fields: name or model");
        }


        console.log($target.text());
        return false;
    });

    //search button
    document.getElementById("searchButton").addEventListener('click', function() {
        var searchInput = $('input[id=searchInput]');
        var searchLabel = $('input[id=searchLabel]');
        console.log("searchInput : " + searchInput.val() +
            ", searchLabel: " + searchLabel.val());
        location.href = "#" + searchLabel.val().toLowerCase();
    });
});