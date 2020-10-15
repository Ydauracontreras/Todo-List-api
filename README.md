# TODO-APP

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Ydauracontreras/Todo-List-api/

cd the-example-app.nodejs
```

```bash
npm install
```


## Steps for read-only access

To start the express server, run the following

```bash
npm run start
```
Open [http://localhost:3000](http://localhost:3000) and take a look around.



| Endpoint      | HTTP   | Description                         |
| ------------- | ------ | ----------------------------------- |
| `/todos `     | GET    | Retrive all the TODO                |
| `/todos:id `  | GET    | Retrive an specific TODO with `id`  |
| `/todos `     | POST   | Create a new TODO                |
| `/todos/:id ` | PUT    | Update a TODO with `id`    |
| `/todos/:id ` | DELETE | Remove a TODO                    |
| `/todos/:id/status ` | DELETE | Remove a TODO                    |
