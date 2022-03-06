import { reactive } from 'vue'
import axios from 'axios'

// 中间商
interface DataProps<T> {
  result: T | null,
  loading: boolean,
  loaded: boolean,
  error: any
}
const useURLLoader = <T = any>(url: string) => {
  // 把T类型作用到result上去
  const data = reactive<DataProps<T>>({
    result: null,
    loading: true,
    loaded: false,
    error: null
  })
  axios.get(url).then(resp => {
    console.log('1', resp)
    data.result = resp.data
  }).catch((e) => {
    data.error = e
  }).finally(() => {
    data.loading = false
    data.loaded = true
  })
  return data
}

export default useURLLoader
