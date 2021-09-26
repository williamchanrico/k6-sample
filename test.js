import http from 'k6/http'
import { check } from 'k6'
import { group } from 'k6'

http.setResponseCallback(http.expectedStatuses(200))

export default function () {
  let params = {
    headers: {
      // 'X-Header': 'value',
    },
  }

  group('test-1', function () {
    let res = http.get('https://arzhon.id/', params)
    check(res, {
      http_success: (res) => res.status == 200,
    })
  })
}
