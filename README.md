## Setup the Project

Setting up the docsite project is easy. It's a Vite site. The following steps
will get you up and running to contribute to the Chakrathon-Select-Component docsite:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/jvincent3/Chakrathon-Select-Component))

2. Clone your fork locally

```sh
git clone https://github.com/jvincent3/Chakrathon-Select-Component.git
cd Chakrathon-Select-Component
```

3. Setup all the dependencies and packages by running `npm i`.

> if you're having trouble installing try installing it with ```--peer-dependenciesp```

4. Execute `npm run dev` to spin up a local development server.

> If you run into any issues, kindly reach out to the Tokyo Ghoul team.

### Commands

**`npm i`**: installs the dependency packages.

**`npm run dev`**: starts the local development server.

**`npm run build`**: builds the docsite for production.

**`npm run storybook`**: starts the local storybook server.
## Updating the docs for new release

When a new version of `Chakrathon-Select-Component` has been released, here's what you need
to do to get it reflected in the docs:

- Bump the version of `Chakrathon-Select-Component`
- Open a Pull Request titled `docs: updates for new release`

# Select

 A simple and easily styleable Select Input

![alt text](./src/images/SelectComponent.png "Logo Title Text 1")

## Components

### Select

- `onChange` - action which is set when the component is changed
- `value` - control the current value
- `getLabel` - add the active label which is set
- `onClose` - action which is set when the component is closed
- `onOpen` - action which is set when the component is open
### SelectList

### SelectItem
- `isActive` - action which is set when the component is active
- `value` - control the current value
### SelectValue

## Example
![alt text](./src/images/example.png "Example image")

# Contribute
### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the Chakrathon-Select-Component repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[feature/task-code]`. For example `feature/CDEV-xxx-name-of-task`.

3. Make and commit your changes following the
   commit convention.
