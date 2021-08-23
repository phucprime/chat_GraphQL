# texting with GraphQL

<div align="middle">
 <img src="https://github.com/phucprime/chat_GraphQL/blob/main/assets/gif.gif" />
</div>

## GraphQL usage

* get messages:

```javascript
const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      user
      text
    }
  }
`;
```

* post a message:

```javascript
const POST_MESSAGE = gql`
  mutation($user:String!, $text:String!){
    postMessage(user:$user,text:$text)
  }
`;
```

[Read more](https://graphql.org/learn/queries/#mutations) about `Queries and Mutations`
 
## Material UI

React components for faster and easier web development. 

* [Button](https://material-ui.com/components/buttons/)

* [Grid](https://material-ui.com/components/grid/)

* [Chip](https://material-ui.com/components/chips/)

* [Text Field](https://material-ui.com/components/text-fields/#text-field)

* [Container](https://material-ui.com/components/container/)

## Measuring Performance

Measure and analyze the performance of your application using different metrics.

To measure any of the supported metrics, you only need to pass a function into the `reportWebVitals` function in `index.js`:

```javascript
reportWebVitals(console.log);
```

[Read more](https://create-react-app.dev/docs/measuring-performance/) about this article.
