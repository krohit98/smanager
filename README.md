# Smanager
This is a simple state management library implementation (similar to redux) that can work with vanilla JS and React (with the provided custom hook).

**This is just a hobby project and should not be used in production.**

## Characteristics:  
**Centralized Store** -  The application state is stored in a single object (store state)  
**Reactive** - Components auto-update when associated state changes.  
**Predictable** - The state changes are done predictably with the help of reducer functions.  
**Immutable** - The store state cannot be modified directly.  
**Granular** - When part of the store state updates, only the components subscribed to those particular states rerender.  

## Component Architecture:
![lib architecture](https://github.com/user-attachments/assets/6b478b59-b217-4458-a8a9-3b2dc6bb0301)

The state manager library code is written in *src/lib/stateManager.js*  
The custom hook for working with react is written in *src/lib/useStore.js*

An implemented example is provided. To start the project, run:
1) npm install
2) npm run start
