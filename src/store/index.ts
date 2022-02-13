import { createStore } from 'vuex'

// 目的: 自动补全 类型检查
export interface usersProp {
  isLogin: boolean;
  userName?: string;
}

export interface templateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: usersProp;
  template: templateProps[];
}

const testData:templateProps[] = [
  { id: 1, title: '测试数据', coverImg: '', author: 'Aley', copiedCount: 0 }
]

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    template: testData
  }
})

export default store
