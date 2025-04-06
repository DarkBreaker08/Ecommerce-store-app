An e-commerce store application visual design was inspired by the Tech2etc creator's video series: (https://www.youtube.com/watch?v=P8YuWEkTeuE&list=PL9bD98LkBR7P8MYh0RzNSHgeVNTA8g0nB&index=1). The appearance of the application was created according to the instructions in the videos. The entire structure and code were elevated to a higher level of abstraction – enriched with routing, a dedicated API that stores products and other information, and the entire code was written in React. The Vite bundler (React + Babel) was used, and validated forms were implemented with the help of dedicated libraries. The code was also written according to the commonly accepted principles in React (isolated parts of the application, independent components, etc.). The styles were written following the BEM (block-element-modifier) methodology with slight modifications where necessary. To run the application correctly, you must first start the json-server using the command: `yarn run json-server ./src/db.json`. Here is a list of the libraries used:

- react
- react-dom
- react-hook-form
- yup
- json-server
- tanstack router
- tanstack query
- @hookform/resolver (needed to connect yup with react-hook-form)
