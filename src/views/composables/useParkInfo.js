import { ref } from 'vue'
import { getParkInfoAPI } from '@/api'

export function useParkInfo () {
  // 业务逻辑代码
  // 获取园区信息
  const parkInfo = ref({})
  const getParkInfo = async () => {
    const res = await getParkInfoAPI()
    parkInfo.value = res.data
  }
  return {
    parkInfo,
    getParkInfo
  }
}