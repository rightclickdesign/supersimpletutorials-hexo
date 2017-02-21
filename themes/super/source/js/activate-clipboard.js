(function() {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        e.clearSelection();
        $('.copy.btn')
            .popup('destroy');
        $(e.trigger)
            .popup({
                content: "Copied!",
                delay: {
                    hide: 600
                },
                exclusive: true,
                position: 'top center',
                variation: 'mini'
            })
            .popup('show');
    });
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
})();