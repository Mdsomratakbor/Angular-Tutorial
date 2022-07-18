### 1. What is NgRx in angular?
`NgRx is a framework for building reactive applications in Angular. NgRx is inspired by the Redux pattern - unifying the events in your application and deriving state using RxJS. At a high level, NgRx stores a single state and uses actions to express state changes.`

### 2. What are benefits of using store (ngrx) in angular 2 ?

- `Centralized, Immutable State - All relevant application state exists in one location. This makes it easier to track down problems, as a snapshot of state at the time of an error can provide important insight and make it easy to recreate issues.`
- `Performance - Since state is centralized at the top of your application, data updates can flow down through your components relying on slices of store.`
- `Testability -All state updates are handled in reducers, which are pure functions. Pure functions are extremely simple to test, as it is simply input in, assert against output.`

### 3. What are Reducers in NgRX?
`Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the action's type. Reducers are pure functions that are the only ones that can change state. They are not really changing state but making a copy of existing state and changing one or more properties on the new state.`

### 4. What is the difference between NgRX and RxJS?
`Ngrx is a redux implementation usingrxjs. Rxjs is for handling complex asynchronous work like handling communication between client and server. Ngrx is for optimally storing data in the client and recalling them from all over the application, usually.`

### 5.  What are Actions in NgRX?
`Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. Actions are objects that extend the NgRx Action class with a 'type' property. They have an optional 'payload' property (naming is up to you but the standard is to name it 'payload') for sending in data to the effect/reducer and are dispatched by the store to either run an effect or change state in a reducer.`
