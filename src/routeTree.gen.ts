/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShopImport } from './routes/shop'
import { Route as SecondShopPageImport } from './routes/secondShopPage'
import { Route as HomeImport } from './routes/home'
import { Route as FirstShopPageImport } from './routes/firstShopPage'
import { Route as ContactImport } from './routes/contact'
import { Route as CartImport } from './routes/cart'
import { Route as BlogImport } from './routes/blog'
import { Route as AboutImport } from './routes/about'

// Create/Update Routes

const ShopRoute = ShopImport.update({
  id: '/shop',
  path: '/shop',
  getParentRoute: () => rootRoute,
} as any)

const SecondShopPageRoute = SecondShopPageImport.update({
  id: '/secondShopPage',
  path: '/secondShopPage',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const FirstShopPageRoute = FirstShopPageImport.update({
  id: '/firstShopPage',
  path: '/firstShopPage',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const BlogRoute = BlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/firstShopPage': {
      id: '/firstShopPage'
      path: '/firstShopPage'
      fullPath: '/firstShopPage'
      preLoaderRoute: typeof FirstShopPageImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/secondShopPage': {
      id: '/secondShopPage'
      path: '/secondShopPage'
      fullPath: '/secondShopPage'
      preLoaderRoute: typeof SecondShopPageImport
      parentRoute: typeof rootRoute
    }
    '/shop': {
      id: '/shop'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof ShopImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/cart': typeof CartRoute
  '/contact': typeof ContactRoute
  '/firstShopPage': typeof FirstShopPageRoute
  '/home': typeof HomeRoute
  '/secondShopPage': typeof SecondShopPageRoute
  '/shop': typeof ShopRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/cart': typeof CartRoute
  '/contact': typeof ContactRoute
  '/firstShopPage': typeof FirstShopPageRoute
  '/home': typeof HomeRoute
  '/secondShopPage': typeof SecondShopPageRoute
  '/shop': typeof ShopRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/cart': typeof CartRoute
  '/contact': typeof ContactRoute
  '/firstShopPage': typeof FirstShopPageRoute
  '/home': typeof HomeRoute
  '/secondShopPage': typeof SecondShopPageRoute
  '/shop': typeof ShopRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/about'
    | '/blog'
    | '/cart'
    | '/contact'
    | '/firstShopPage'
    | '/home'
    | '/secondShopPage'
    | '/shop'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/about'
    | '/blog'
    | '/cart'
    | '/contact'
    | '/firstShopPage'
    | '/home'
    | '/secondShopPage'
    | '/shop'
  id:
    | '__root__'
    | '/about'
    | '/blog'
    | '/cart'
    | '/contact'
    | '/firstShopPage'
    | '/home'
    | '/secondShopPage'
    | '/shop'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AboutRoute: typeof AboutRoute
  BlogRoute: typeof BlogRoute
  CartRoute: typeof CartRoute
  ContactRoute: typeof ContactRoute
  FirstShopPageRoute: typeof FirstShopPageRoute
  HomeRoute: typeof HomeRoute
  SecondShopPageRoute: typeof SecondShopPageRoute
  ShopRoute: typeof ShopRoute
}

const rootRouteChildren: RootRouteChildren = {
  AboutRoute: AboutRoute,
  BlogRoute: BlogRoute,
  CartRoute: CartRoute,
  ContactRoute: ContactRoute,
  FirstShopPageRoute: FirstShopPageRoute,
  HomeRoute: HomeRoute,
  SecondShopPageRoute: SecondShopPageRoute,
  ShopRoute: ShopRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/blog",
        "/cart",
        "/contact",
        "/firstShopPage",
        "/home",
        "/secondShopPage",
        "/shop"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blog": {
      "filePath": "blog.tsx"
    },
    "/cart": {
      "filePath": "cart.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/firstShopPage": {
      "filePath": "firstShopPage.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/secondShopPage": {
      "filePath": "secondShopPage.tsx"
    },
    "/shop": {
      "filePath": "shop.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
