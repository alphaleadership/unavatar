'use strict'
const test = require('ava')
const got = require('got').extend({ responseType: 'json' })
const { runServer } = require('./helpers')
const isCI = !!process.env.CI
console.log(isCI)
test('ping', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('ping', {
    prefixUrl: serverUrl,
    responseType: 'text'
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.is(body, 'pong')
})

test('youtube', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('youtube/natelive7?json', {
    prefixUrl: serverUrl
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.true(body.url.includes('images.weserv.nl'))
})

test('gitlab', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('gitlab/kikobeats?json', {
    prefixUrl: serverUrl
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.true(body.url.includes('images.weserv.nl'))
})

test('github', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('github/kikobeats?json', {
    prefixUrl: serverUrl
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.true(body.url.includes('images.weserv.nl'))
})

test('twitter', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('twitter/kikobeats?json', {
    prefixUrl: serverUrl
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.true(body.url.includes('images.weserv.nl'))
})

test('soundcloud', async t => {
  const serverUrl = await runServer(t)
  const { body, statusCode } = await got('soundcloud/kikobeats?json', {
    prefixUrl: serverUrl
  })
  console.log(statusCode)
  t.is(statusCode, 200)
  t.true(body.url.includes('images.weserv.nl'))
})
