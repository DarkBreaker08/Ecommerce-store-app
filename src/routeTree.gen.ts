/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShopImport } from './routes/shop'
import { Route as HomeImport } from './routes/home'
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

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
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
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
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
  '/home': typeof HomeRoute
  '/shop': typeof ShopRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/cart': typeof CartRoute
  '/contact': typeof ContactRoute
  '/home': typeof HomeRoute
  '/shop': typeof ShopRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/cart': typeof CartRoute
  '/contact': typeof ContactRoute
  '/home': typeof HomeRoute
  '/shop': typeof ShopRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/about' | '/blog' | '/cart' | '/contact' | '/home' | '/shop'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/blog' | '/cart' | '/contact' | '/home' | '/shop'
  id: '__root__' | '/about' | '/blog' | '/cart' | '/contact' | '/home' | '/shop'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AboutRoute: typeof AboutRoute
  BlogRoute: typeof BlogRoute
  CartRoute: typeof CartRoute
  ContactRoute: typeof ContactRoute
  HomeRoute: typeof HomeRoute
  ShopRoute: typeof ShopRoute
}

const rootRouteChildren: RootRouteChildren = {
  AboutRoute: AboutRoute,
  BlogRoute: BlogRoute,
  CartRoute: CartRoute,
  ContactRoute: ContactRoute,
  HomeRoute: HomeRoute,
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
        "/home",
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
    "/home": {
      "filePath": "home.tsx"
    },
    "/shop": {
      "filePath": "shop.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
