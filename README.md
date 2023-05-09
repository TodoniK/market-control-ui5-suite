
![Logo](https://w2.market-control.com/wp-content/uploads/2020/05/logo_Blackturquesa2-300x72.png)
# Market Control UI5 Suite 💻

A suite of dynamic graphical components custom-built for the Market Control product using the SAP OpenUI5 framework.




## Installation 📥

⚠️ NodeJS needed ⚠️

- Get the project on your computer and install dependencies

```bash
  git clone https://github.com/TodoniK/market-control-ui5-suite.git
  npm install
```

- Run the backend ExpressJS API

```bash
  cd webapp/api/
  node index.js
```

- Run the frontend

```bash
  cd webapp/
  npm run start
```
    
## API Reference 🌐

#### Get all data from table

```http
  GET /api/{name}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
|   `name`  | `string` | **Required**. Your db table name |


## License 📑

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

