This project was bootstrapped with:

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Flow](https://flow.org)
- [Prettier](https://github.com/prettier/prettier)

## Getting Started

The [Create React App](https://github.com/facebookincubator/create-react-app) includes a much more comprehensive documentation. TLDR:

```
yarn
yarn start
```

## Run tests

```
yarn test
```

## Extra thoughts

- The test coverage isn't amazing, but hopefully you can tell that I can write tests
- The UI and CSS isn't brilliant either (e.g. toggling the filters on mobile is a bit naff), hopefully you deduce my skills by viewing my previous experience
- **Careful** The range slider doesn't appear in chrome devtools, but does if you use a phone.
- I used the new React Context API instead of using Redux (which I proficient with). I couldn't see a reason to use it in this app and I'm always sceptical of using another state management solution when React can do the job itself.
- For testing I used Jest & Enzyme. Jest is the quickest to get started with while using CRA so that was my choice for this project, but I have used Tape and Mocha, (Tape)[https://github.com/substack/tape] is usually my goto assertion lib.
- I have used (styled-components)[https://www.styled-components.com/docs/advanced] as my goto CSS-in-JS library
- I have gone with a folder structure that works for this project, however as projects get bigger, having one `/components` directory isn't sufficient. I have used various folder structures in my experience, whatever suits the project.
- I am using (Flow)[https://flow.org] for strong typing
- There's a few more things I would have liked to do, e.g. sort the filter list of genres by name, more testing, etc. But I probably spent more than the allocated time on this.
- You're right. It was fun!
