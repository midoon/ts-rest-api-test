import { Application, Router } from 'express'
import { HealthRouter } from './health.route'
import { ProductRouter } from './product.route'
import { AuthRouter } from './auth.route'

const _routes: Array<[String, Router]> = [['/health', HealthRouter], ['/product', ProductRouter], ['/auth', AuthRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(String(url), router)
    // const url: String = route[0]
    // const router: Router = route[1]
    // app.use(String(url), router)
  })
}
