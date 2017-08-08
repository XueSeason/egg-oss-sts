# egg-oss-sts

Egg's plugin for STS (Security Token Service) supported.

## Usage

`npm i egg-oss-sts`

> config/plugin.js

```javascript
exports.sts = {
  enabled: true,
  package: 'egg-oss-sts'
}
```

> config/config.default.js

```javascript
exports.sts = {
  client: {
    accessKeyId: 'your access key id',
    accessKeySecret: 'your access key secret'
  }
}
```

> app/service/xxxx.js

```javascript
const token = yield app.sts.assumeRole(
  '<role-arn>',
  '<policy>',
  '<expire>',
  '<session-name>'
)
```