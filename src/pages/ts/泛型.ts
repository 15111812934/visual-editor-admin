// 泛型 自动补全 类型推断
// 用于函数中
function echo<T>(arg:T):T {
  return arg
}
echo('str')

interface GithubResp {
   name: string,
   count: number
}
interface GithubResp1 {
   a: string,
   b: number,
   c: boolean
}
function widthAPI<T>(url: string):Promise<T> {
   return fetch(url).then(resp => resp.json())
}
widthAPI<GithubResp1>('github.user').then(resp => {
   
})
widthAPI<GithubResp>('github.user').then(resp => {
  //  resp.count
})

// type 类型别名
interface IName {
  name: string
}
// 交叉类型
type IPerson = IName & { age: number }
let person:IPerson = {
  name: '1111',
  age:　22
}

// 联合类型
let str: string | number

// 类型断言
function getLength(input: number | string) {
  const str = input as string
  let len
  if (str.length) {
    len = str.length 
  } else {
     const number = input as number
     len = number.toString().length
  }
  return len
}

getLength('123')

// ts 高级特性 Partial1 源码解析
type Partial2<T> = {
  [P in keyof T]?: T[P]
}

interface GithubResp {
  name: string,
  count: number
}
type keys = keyof GithubResp
type NameType = GithubResp['name']
// mapped types
type Test = {
  [key in keys]: any
}

type CountryOpt = {
  readonly [p in keys]?: GithubResp[p] // 可选且只读
}
let str1:CountryOpt = {
 name: '11'
}
// str1.name = // 报错，只读

interface IWidthArr {
  length: number
}
// extends 
// 1.约束传入的内容必须有length属性
function echo1<T extends IWidthArr>(arg:T):T {
  console.log(arg.length)
  return arg
}
echo1('111')

// d.ts 类型定义文件
type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'
declare function myFetch<T = any>(url: 'string', method: HTTPMethod, data?:any) : Promise<T>

declare namespace myFetch {
   const get: <T = any>(url: string) => Promise<T>
   const post: <T = any>(url: string, data: any) => Promise<T>
}
// 使用
// myFetch.get<number>('test').then(data => {})