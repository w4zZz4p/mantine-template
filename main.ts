import { Application, send } from 'https://deno.land/x/oak@v12.6.1/mod.ts';

const app = new Application();

app.use(async (ctx) => {
    try {
        await ctx.send({
            root: './build',
            index: 'index.html',
        });
    } catch (_) {
        await send(ctx, 'index.html', { root: './build' });
    }
});

await app.listen({ port: 8080 });
