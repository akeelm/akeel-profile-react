import assert from 'assert';
import * as screenFunctions from './../../../../src/functions/screen-functions';

let window = { screen: { width: 680 } };

let state = { screenBreakpoint : 'lge', someotherStuff : 123 };

describe('Screen functions', function () {

    describe('getScreenWidth(window)', function () {
        it('should return window size', function () {
            let result = screenFunctions.getScreenWidth(window);
            assert.equal(result, 680);
        });
    });

    describe('getScreenBreakpoint(window)', function () {
        it ('should return a screen breakpoint', function () {
            let result;
            window.screen.width = 400;
            result = screenFunctions.getScreenBreakpoint(window);
            assert.equal(result, 'small');
        });
    });

    describe('updateStateWithScreenBreakpoint', function () {
        it ('should update state with breakpoint', function () {
            let _this = {};
            _this.setState = function (obj) {
                state = obj; 
            }

            window.screen.width = 500;
            screenFunctions.updateStateWithScreenBreakpoint(window, _this);
            assert.equal(state.screenBreakpoint, 'small');

            window.screen.width = 650;
            screenFunctions.updateStateWithScreenBreakpoint(window, _this);
            assert.equal(state.screenBreakpoint, 'small-medium');

            window.screen.width = 1000;
            screenFunctions.updateStateWithScreenBreakpoint(window, _this);
            assert.equal(state.screenBreakpoint, 'medium');

            window.screen.width = 1201;
            screenFunctions.updateStateWithScreenBreakpoint(window, _this);
            assert.equal(state.screenBreakpoint, 'large');
        });
    });
});