(() => {
    
    let old = Date.now,
        hook = function () {
            return old() * 10;
        };

    Date.now = hook;

})();
