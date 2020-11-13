

(() => {
    
    const mult = 10;

    let old_date = Date.now,
        hook_date = function () {
            return old_date.apply(this, arguments) * mult;
        };

    Date.now = hook_date;


    let old_interval = setInterval,
        hook_interval = function () {

            let args = [...arguments];

            if (args[1]) args[1] /= mult

            return old_interval.apply(this, args);
        };

    setInterval = hook_interval;


    let old_timeout = setTimeout,
        hook_timeout = function () {

            let args = [...arguments];

            if (args[1]) args[1] /= mult

            return old_timeout.apply(this, args);
        };

    setTimeout = hook_timeout;

})();
