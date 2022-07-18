### 1. What is NgRx in angular?
`NgRx is a framework for building reactive applications in Angular. NgRx is inspired by the Redux pattern - unifying the events in your application and deriving state using RxJS. At a high level, NgRx stores a single state and uses actions to express state changes.`

### 2. What are benefits of using store (ngrx) in angular 2 ?

- `Centralized, Immutable State - All relevant application state exists in one location. This makes it easier to track down problems, as a snapshot of state at the time of an error can provide important insight and make it easy to recreate issues.`
- `Performance - Since state is centralized at the top of your application, data updates can flow down through your components relying on slices of store.`
- `Testability -All state updates are handled in reducers, which are pure functions. Pure functions are extremely simple to test, as it is simply input in, assert against output.`
