(function () {
    'use strict';
    var MaterialAutocomplete = function () {
        var jsFile = 'materializecss-autocomplete.js';
        var minifiedJsFile = 'materializecss-autocomplete.min.js';
        var jsFileComponent = document.querySelector("script[src$='" + jsFile + "']");
        var minfiedJsFileComponent = document.querySelector("script[src$='" + minifiedJsFile + "']");
        var jsFilePath;
        if (jsFileComponent) {
            jsFilePath = jsFileComponent.src;
        } else if (minfiedJsFileComponent) {
            jsFilePath = minfiedJsFileComponent.src;
        }

        var baseUrl = jsFilePath.substring(0, jsFilePath.lastIndexOf('/', jsFilePath.lastIndexOf('/') - 1));

        var listView = baseUrl + '/views/list.html';

        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                id: '@acId',
                inputName: '@acInputName',
                showInputName: '=?acShowInputName',
                placeHolder: '=?acPlaceHolder',
                selectedItem: '=acSelectedItem',
                searchText: '=?acSearchText',
                displayProperty1: '@acDisplayProperty1',
                displayProperty2: '@?acDisplayProperty2',
                displayProperty3: '@?acDisplayProperty3',
                displaySubProperty1: '@?acDisplaySubProperty1',
                displaySubProperty2: '@?acDisplaySubProperty2',
                displaySubProperty3: '@?acDisplaySubProperty3',
                displayColor: '@acDisplayColor',
                displayPicture: '@acDisplayPicture',
                isMultiValued: '=acIsMultiValued',
                uniqueDisplayProperty: '=?acUniqueDisplayProperty',
                itemList: '=?acItems',
                remoteMethod: '@?acRemoteMethod',
                itemChange: '&?acSelectedItemChange',
                disableInput: '=?acDisableInput',
                onBlurCb: '&?acOnBlurCb',
                onFocusCb: '&?acOnFocusCb'
            },
            replace: true,
            controller: 'materialAutocompleteCntrl',
            controllerAs: 'ac',
            templateUrl: listView,
        };
    };

    angular.module('material.autocomplete')
        .directive('materialAutocomplete', [MaterialAutocomplete]);
})();