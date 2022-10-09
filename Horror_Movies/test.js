// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - https://docs.docker.com/config/daemon/prometheus/', function () {
    response = http.get('https://docs.docker.com/config/daemon/prometheus/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(4)
  })

  group('page_2 - https://docs.docker.com/', function () {
    response = http.get('https://docs.docker.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}