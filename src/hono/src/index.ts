import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono!"));

const port = 3000;
serve(app).listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
