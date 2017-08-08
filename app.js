const assert = require('assert')

const OSS = require('ali-oss')
const STS = OSS.STS

module.exports = app => {
  app.addSingleton('sts', createSTS)
}

function createSTS (config, app) {
  assert(config.accessKeyId && config.accessKeySecret)

  const sts = new STS({
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret
  })

  return sts
}
