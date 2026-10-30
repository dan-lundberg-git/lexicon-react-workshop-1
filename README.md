# Workshop 1 – ReactJS (Components & Props)

## Goal

Build a React application that recreates the layout in `index.html` using:

- React
- Vite
- TypeScript
- Tailwind CSS
- `lucide-react`

Focus on component thinking, clean structure, reusability, and good frontend practices.

## What to Practice

- creating a React app from scratch
- installing and configuring libraries
- splitting a large page into smaller reusable components
- building composite components
- using TypeScript variables when needed
- passing props between components
- organizing a small React project in a clean way

## Reference File

Use the design in this folder as your visual reference:

- `index.html`

## Note

Think carefully before building. There are many valid ways to structure the solution.

---

## README Requirements

In your `README`, explain:

- which components you created
- the purpose of each component
- which props are passed between components
- why you used props
- how the components work together

---

## Before You Submit

Check that:

- [ ] the app runs without errors
- [ ] the layout matches `index.html` closely
- [ ] the page is split into reusable React components
- [ ] props are used where they make sense
- [ ] the project structure is clean and easy to follow
- [ ] TypeScript is used correctly
- [ ] Tailwind classes are organized and readable
- [ ] icons from `lucide-react` are used where needed
- [ ] the `README` explains your components and props
- [ ] there are no unused files, components, or variables
- [ ] the final solution is ready to present

## Questions to Answer

### Which components did you create?

A lot of components were created. Basically most of the commented code blocks like footer, links, header, aside, main, product grid, product cards etcetera. Probably too many created, but since this is a workshop. I let it remain that way.

### What's the purpose of each component?

At this initial level, basically for code isolation and for better readability. It's easier to understand a relatively small list of tags (components) in a page than a huge codeblock.

### Which props are passed between components?

As of writing this, only between the ProductGrid component and the ProductCard component. This is to be able to dynamically render an infinite amount of product cards on a page.

### Why did you use props?

See answer above, to not lock in a page to a static result, but to be able to render data dynamically, and for reusability of course.

### How do the components work together?

A parent-child relationship is made, and where needed data is passed by adhering to a pre-defined TypeScript interface describing the shape of an object (like title, price etcetera).
