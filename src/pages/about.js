import Layout from "@/components/layout";

function About() {
  return (
    <Layout>
      <h1>About Page</h1>
      <section>
          <h1 className="text-lg font-bold">Important Tailwind Resources</h1>
          <ol>
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://tailwindcss.com/docs/guides/nextjs">
                https://tailwindcss.com/docs/guides/nextjs
              </a>
            </li>
            <li>https://tailblocks.cc/</li>
            <li href="https://nerdcave.com/tailwind-cheat-sheet">
              Cheat Sheet
            </li>
            <li>
              <a href="https://codeytek.com/next-js-tailwind-with-sass-example/">
                https://codeytek.com/next-js-tailwind-with-sass-example/
              </a>
            </li>
          </ol>
        </section>
    </Layout>
  )
}

export default About;