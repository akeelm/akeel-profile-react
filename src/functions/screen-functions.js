export function getScreenWidth (window) {
    return window.innerWidth;
}

//Should match with values in screen-breakpoints.scss
export function getScreenBreakpoint(window) {
    let width = getScreenWidth(window);


    if (width > 1200)
        return 'large';

    if (width > 962)
        return 'medium';

    if (width > 628)
        return 'small-medium';

    if (width <= 628) 
        return 'small';
}

export function updateStateWithScreenBreakpoint(window, _this) {
    _this.setState({ screenBreakpoint : getScreenBreakpoint(window) });
}