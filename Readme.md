# Getting started

This project is a react project initialized with vite.js.

## Install dependencies

In this project, we prefere to use yarn package manager. But you can also use npm.

```bash
   yarn install
```

Or

```bash
   npm install
```

## Start development

```bash
   yarn dev
```

Or

```bash
   npm run dev
```

## Build project for production

To run build you have to run the following commands:

```bash
   yarn build
```

Or

```bash
   npm run build
```

An optimized build will be created in `/dist` directory.

## Preview project for production

You can localy preview production build.

```bash
   yarn preview
```

Or

```bash
   npm run preview
```

# Components

## Naming components

We will use the camel case naming convention for the components and folders.

### Example:

`LoginPage`  
`Home`  
`Button`

## How to create component

A component will be created in a folder named as the component name. So in the folder we have all the basic dependancy of the component: the separated style file, the component file, component logic if separated in other file, sub child components (strucutured as his parent component) ...

#### Example:

We will create the component `LoginPage` in the page folder.

```
src/
└───Pages
│   │
│   └───LoginPage
│       │   LoginPage.tsx
│       │   LoginPage.scss // or LoginPage.module.scss (for css module)
│       │   UseLoginPageLogic.ts
│       │   ...
│
└───Components
    │   ...
```

## Folder structure

We can see all the project in `src` folder.
All components are separated in folder discribed as below:

- `Assets`: we will all images, global styles, icon etc
- `Components`: All shared components.
- `Interfaces`: All shared type declarations.
- `Layouts`: All page layouts which are used in main routes' components.
- `Pages`: All pages of the site (Or components used in all routes that is not a layout)
- `Routes`: All declarations of our routes that are grouped per Layout.
- `Utils`: All utils functions.

## Layout

We have 2 page layout:

- AppLayout
- DefaultLayout

### Layout Context

In each Layout, we use Context to pass data from page content to Layout.

For example, in AppLayout you can set the header title from page with the useAppLayoutContext (setHeaderTitle)

## Components

### Text (`Components/General/Text`)

```javascript
<Text tag="h1" type="h1" variant="green">Content</Text>
// props
interface TextProps extends React.HTMLAttributes<any> {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "p";
  variant?: "black" | "red" | "grey" | "green" | "white";
  size?: number;
}
```


## Env variables

Create .env file and set value of variable env

Set value to VITE_API_HOST for the base url of the api

```env
   VITE_API_HOST=http://localhost:3002
```