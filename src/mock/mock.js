import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios, { delayResponse: 100 })

export default mock
