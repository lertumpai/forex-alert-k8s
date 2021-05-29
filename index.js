const fs = require('fs')
const files = [
  './namespace.yaml',
  './backend/backend-configmap.yaml',
  './backend/backend.yaml',
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
  FOREX_ALERT_SERVER_URL: 'https://forex-alert-nf.com',
  FOREX_ALERT_MONGO_URI: 'mongodb://lertumpai:sorawit5171718@34.87.156.163:27017/forex-alert',
  FOREX_ALERT_SECRET_NAME: 'forex-alert-tls-production',
  FOREX_ALERT_HOST: 'forex-alert.lertumpai.com',
  FOREX_ALERT_GCP_PROJECT_ID: 'crested-lexicon-312308',
}

let wrapFile = files.map(file => {
  const readFile = fs.readFileSync(file)
  return readFile.toString()
}).join('\n---\n')

Object
  .entries(env)
  .forEach(([key, value]) => {
    wrapFile = wrapFile.replaceAll('${' + key + '}', value)
  })

fs.writeFileSync('forex-alert.yaml', wrapFile)
