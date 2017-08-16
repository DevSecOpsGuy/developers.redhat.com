"use strict";
// Test rhdp-search-sort-page component

describe('Search Sort and Paging', function() {
    var wc;
    beforeEach(function() {
        document.body.insertBefore(document.createElement('rhdp-search-sort-page'), document.body.firstChild);
        wc = document.body.firstChild;
    });

    afterEach(function() {
        document.body.removeChild(document.body.firstChild);
    });

/*
captures sort and pageSize properties
provides updates to above properties
displays text "Sort results by [sort as options]" on desktop
displays button menu with [sort] options on mobile
Unit tests for component pass
*/

    it('should respond to setting and getting the sort property', function() {
        wc.sort = 'Most Recent';
        expect(wc.sort).toEqual('Most Recent');
        wc.sort = 'Relevance'
        expect(wc.sort).toEqual('Relevance');

    });

    it('should share the sort property out', function() {
        wc.sort = "relevance";
        wc.setSort();
        expect(wc.sort).toEqual('relevance');
    });

    it('should read "Sort results by [[sort]]', function() {
        expect(wc.innerText.trim()).toEqual('Sort results by');
    });
});