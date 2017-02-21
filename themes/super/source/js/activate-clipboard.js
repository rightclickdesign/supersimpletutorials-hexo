(function() {
    var clipboard = new Clipboard('.copy.btn');
    clipboard.on('success', function(e) {
        e.clearSelection();
        $(e.trigger)
            .popup({
                on: "manual",
                content: "Copied!",
                exclusive: true,
                position: 'top right',
                variation: 'mini'
            })
            .popup('show');

        setTimeout(function(){
            $(e.trigger)
                .popup('hide');
        }, 500);
    });
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
})();