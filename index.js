const fs = require('fs')
const files = [
  './namespace.yaml',
  './redis/redis.yaml',
  './backend/backend-configmap.yaml',
  './backend/backend.yaml',
  './cronjob/cronjob-configmap.yaml',
  './cronjob/cronjob.yaml',
  './frontend/frontend.yaml',
  './frontend/frontend-configmap.yaml',
  './ingress/issuers.yaml',
  './ingress/ingress.yaml',
]
const env = {
  FOREX_ALERT_NAMESPACE: 'forex-alert',
  FOREX_ALERT_NODE_ENV: 'production',
  FOREX_ALERT_DOCKER_TAG: 'latest',
  FOREX_ALERT_LET_ENCRYPT: 'letencrypt-production',
  FOREX_ALERT_SERVER_URL: 'https://forex-alert-server.lertumpai.com',
  FOREX_ALERT_MONGO_URI: 'mongodb://lertumpai:sorawit5171718@34.124.237.231:27017/forex-alert',
  FOREX_ALERT_SECRET_NAME: 'forex-alert-tls-production',
  FOREX_ALERT_HOST_FRONTEND: 'forex-alert.lertumpai.com',
  FOREX_ALERT_HOST_BACKEND: 'forex-alert-server.lertumpai.com',
  FOREX_ALERT_HOST: 'forex-alert.lertumpai.com',
  FOREX_ALERT_GCP_PROJECT_ID: 'maximal-park-331914',
}

let wrapFile = files.map(file => {
  const readFile = fs.readFileSync(file)
  return readFile.toString()
}).join('\n---\n')

Object
  .entries(env)
  .forEach(([key, value]) => {
    wrapFile = wrapFile.replace(new RegExp('{' + key + '}', 'g'), value)
  })

fs.writeFileSync('forex-alert.yaml', wrapFile)
