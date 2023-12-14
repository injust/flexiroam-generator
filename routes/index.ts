import { FreshContext, Handlers } from '$fresh/server.ts'
import { generateNumber } from '../src/mod.ts'

export const handler: Handlers = {
    GET(_req: Request, _ctx: FreshContext) {
        return new Response(generateNumber())
    },
}
