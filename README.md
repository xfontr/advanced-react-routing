# React advanced routes

**Simple React app with a scalable system that automatically creates and protects (if required) all the routes and navigation links, by simply setting up a config object.**

_Tested with Jest and React Testing Library_

## Summary

The app will automatically render a route for each path, as well as a navigation link.

What's both interesting and useful is that the renders will occur conditionally, depending on the user being or not logged in.

Furthermore, the user won't be allowed to manually go to a specific path (by writing it at the URL), since the RouteProtector component will prevent him to do so - if he is not allowed, of course.

## Paths structure

It has a global object that contains all the paths, with the following structure:

```ts
type RenderOptions = "always" | "logged" | "loggedOut";

interface RouteType {
  path: string;
  renders: RenderOptions;
  name?: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
}
```

On practice, it looks like this:

```ts
[
  {
    path: paths.root,
    renders: "always",
    navigate: paths.home,
  },
  {
    path: paths.home,
    name: "Home",
    renders: "always",
    Page: lazy(() => import("./pages/DummyPage1")),
  },
  // ...
];
```

## Usage

You will need to set up a global object such as the previous one (see the repository routes.ts file to have a more accurate example). The required components are all avaliable in this repository.

They take a Routes object as props and a boolean to inform about the user status (whether it is logged in or not).

The following components are a must for the routes to work:

- /containters/RouteProtector.tsx
- /containers/RouteSelector.tsx
- /components/NavigationLinks.tsx
- /components/RenderRoutes.tsx
