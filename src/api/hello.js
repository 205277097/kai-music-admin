import { get } from "./request"

export const sayHello =()=> {
    return get("/api/say")
}