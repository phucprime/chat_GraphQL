# texting with GraphQL

<div align="middle">
 <img src="https://github.com/phucprime/chat_GraphQL/blob/main/assets/gif.gif" />
</div>

### GraphQL usage

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
 
