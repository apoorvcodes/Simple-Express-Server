# Simple Express Server

This is a simple backend server for User registeration and User login made with Express and Typescript using MongoDB as main Database

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## API Reference

#### Get all items

```http
  Post /api/register
```

| Parameter  | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. Your User email   |
| `password` | `string` | **Required**. You User password |
| `username` | `string` | **Required**. Your user name    |

#### Get item

```http
  GET /api/user/${email}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `email`   | `string` | **Required**. email of user to fetch |

## Appendix

This is not a complex and project ready Api, this is just for information and basics for new backend developers.Something more complex than this muse use PassportJs

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Authors

- [@apoorvcodes](https://www.github.com/apoorvcodes)

## Deployment

To compile this project to JavaScript

```bash
  yarn watch
```

To actually run it

```bash
  yarn start
```

## Feedback

If you have any feedback, please reach out to us at tofu.develops@gmail.com
