
## What
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed


## Why 
This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

# Description: 
small example using 2 counters and functions to increase each of them
iteration 1 - render when increase any of counters will re-render all components
iteration 2 -Memo.usememo fix the problem and render only updated component + new function objects
iteration 3 - useCallback fixes the issues with new function objects

# Finals - why not useallback always = article
https://dmitripavlutin.com/dont-overuse-react-usecallback/
https://kentcdodds.com/blog/usememo-and-usecallback

