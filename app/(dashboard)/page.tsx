import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <h1>Hello world</h1>
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        in unde vel, distinctio dolorum modi, consequatur molestiae atque culpa
        quos eos eum ipsam debitis maiores ex dolorem. Impedit, eum.
      </p>
    </>
  );
}
