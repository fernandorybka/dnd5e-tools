# DnD 5e Tools

This project was developed for studying purposes to practice [React JS](https://reactjs.org/) with [Material-UI](https://material-ui.com/) components. But there was also a concern of creating a real world app, with a beautiful design and really useful tools. So, we choose to develop a fully featured fragment of a real DnD 5e Tool (and not to "just scratch" a complete featured app). 

## The App
The main goal was to create a DnD 5e beautiful tool. For now, just Spell section is developed.

Working build: https://dnd5e-tools.vercel.app/

## Challenges and Opportunities
- **Design**: the first challenge was to design an attractive design with a fast and easy interface, aiming to a perfect UX. The idea was to use cards (or grids) instead of tables, making the page more interactive and beautiful. 
So a colorful grid of cards could be nice. Each card color carry an important content information - useful and pretty ;-)
 
- **Performance**: second challenge would be to deal with great amount of data in a single page. With the help of [React Profiler ](https://reactjs.org/docs/profiler.html) we could measure and improve render performance. Also, looking back at the user experience, we created a major filter in data. Users would always apply at least dnd class filter to their search, so we made it mandatory.

- **Real world problem**: third challenge was to think a real world app even if we were just implementing a small part of it. Knowing all the possible future features made easier to choose a project architecture following [SOLID](https://en.wikipedia.org/wiki/SOLID) principles and avoided over engineering or poor design.

- **Responsiveness**: React is very responsive aimed, and that is really helpful :-) Even so, the app is supposed to be somehow a compendium with lots of written information. De UI should mind not just to be beautiful but to be easy, useful and fast, as our UX agreement stated. 

- **Vercel build**: [Vercel](https://vercel.com/) usage was more a opportunity than a challenge. But to take full advantage of its static sites speed, DnD5eTools had to take a technical decision: use local jsons instead of grabbing them from an api or any other source. We could use cache control, but as the app data is quite small and static, we take this step of totally detaching it from any external source.


## Technologies, tools, frameworks
|Techonology |Why|
|-----------------------|-----------------|
|[React JS](https://reactjs.org/) |Main reason for this project was to study React. But the main reason to study React is because it really is a powerful JavaScript library, fast, declarative, easy to expand with several plugins available. |
|[Material-UI](https://material-ui.com/) |Used for  faster and easier web development, it was deeply customized with [Material-UI Theme](https://material-ui.com/customization/default-theme/#default-theme) and [Styles](https://material-ui.com/styles/api/#api)
|[Event Emitter](https://github.com/primus/eventemitter3) |Used to unattached component communication. Observers and event emitters always make easier to follow [SOLID](https://en.wikipedia.org/wiki/SOLID) principles |

## Database and another similar app
All the data used comes from another great project called [5e.Tools](https://5e.tools/). 

## Usage
To use this project you'll basically have to clone it using Git and manage with npm.

```sh
# Cloning the repository
git clone https://github.com/fernandorybka/dnd5e-tools.git

# Running it with npm on http://localhost:3000
cd dnd5e-tools/
npm start
```

## License
This project is licensed under the terms of the MIT license.