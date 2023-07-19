# React Router


## App.jsx
1. *Index*: Determines if the route is an index route. Index routes render into their parent's Outlet at their parent's URL (like a default child route).
2. *Dynamic segment*: If a path segment starts with : then it becomes a "dynamic segment". When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs.
3. *Splats*: Also known as "catchall" and "star" segments. If a route path pattern ends with "/*" then it will match any characters following the "/", including other "/" characters.
4. *Layout route*: Omitting the path makes this route a "layout route". It participates in UI nesting, but it does not add any segments to the URL. Includes a <Outlet/> component.

## Vans.jsx
1. *useSearchParams*: The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params (AN NATIVE OBJECT) and a function that may be used to update them. Just as React's useState hook, setSearchParams also supports functional updates. Therefore, you may provide a function that takes a searchParams and returns an updated version.
2. *state prop*: The state property of LINK component can be used to set a stateful value for the new location which is stored inside history state. This value can subsequently be accessed via useLocation().

## VanDetails.jsx
1. *useLocation*: This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.
2. *useParams*: The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
3. *relative*: Prop to Link component. By default, links are relative to the route hierarchy, so .. will go up one Route level. Occasionally, you may find that you have matching URL patterns that do not make sense to be nested, and you'd prefer to use relative path routing.

## HostLayout.jsx
1. *NavLink*: Knows whether or not it is "active" or "pending".
2. *className and style with function*: The className/style prop works like normally, but you can also pass it a function to customize the classNames applied based on the active and pending state of the link.
3. *end*: The end prop changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. If the URL is longer than to , it will no longer be considered active. Without the end prop, this link is always active because every URL matches / .

## HostVanDetails.jsx
1. *to prop*: Link compoenet has to prop which can take value ".." to go back one level of hierarchy.
2. *Context prop*: To the outlet we can pass context prop. Often parent routes manage state or other values you want shared with child routes.

## HostVanInfo.jsx
1. *useOutletContext()*: works like useEffect hook.

## Loaders
1. Working: 
    * Loader function is declared inside the component which is going to use the data that the Loader function loads. Async Actions such as authentication, api fetchs etc. are moved inside Loader function.
    * Then Loader function is exported out of that component and important in the compononet where the route to Loader component is defined, which in our case is App.jsx. This ensures that async task such as data fetch will happen before the respective component is loaded which improves the UX. (earlier a lag was seen, where a blank page is loaded first and then data is populated)
    * Finally, to get access to the api data, we use { useLoaderData } hook inside the original component.
    * While you can return anything you want from a loader and get access to it from useLoaderData, you can also return a web Response.
2. Protected routes also utilize loader functions to do authentication beforehand.
3. To the Loader function an object is passed with {params} and {request} data.
4. Benefits:

# Important
> React-router changed the way they check a response in versions  >6.4.4. MirageJS uses a package called pretender.js that uses a polyfill response object (basically a fake response). React-router's versions ABOVE 6.4.4 check to make sure that the response has a body property that is anything other than undefined. Pretender is not spec compliant (they don't follow the rules) so no body is present in the response that redirect creates because pretender patches the redirect response too. It fails react-router's check and gets thrown as an error. The quick fix is to downgrade to 6.4.4 or 6.4.3.