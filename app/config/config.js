(function () {
    'use strict';

    var app = angular
                .module('main');

    app.constant('BUCKET_SLUG', 'viktorija-event-app');
    app.constant('URL', 'https://api.cosmicjs.com/v1/viktorija-event-app');
    app.constant('MEDIA_URL', 'https://api.cosmicjs.com/v1/viktorija-event-app/media');
    app.constant('READ_KEY', '5BJQJxBXM2F4qLWUuYyGUUllPpuaAsi9av3QnPjnACFuHCoXqS');
    app.constant('WRITE_KEY', 'fHIU2HO2Y2JASttOnMpfLirHSEd2OQMAt284fl4wd6We7dpTza');
    app.constant('DEFAULT_EVENT_IMAGE', 'url-image');

})();