# Remix dynmic root routes with layout

The content of `app/routes` shows an simple example of how you can render dynamic root routes, with a layout file in Remix. This is useful if you for example control what pages that the site has with an external CMS.

This allows routes like "", `"/"`, and any `"/$page"` route to work, while `app/routes/__page.tsx` acts like a layout for all the routes.
