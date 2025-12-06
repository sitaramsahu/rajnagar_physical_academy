import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    // const db = client.db("asrs_news"); //this line created new db asrs_news
    const db = client.db(process.env.MONGODB_DB);

    // Save subscriber if not exists
    const exists = await db.collection("subscribers").findOne({ email });
    if (exists) {
      return new Response(
        JSON.stringify({ error: "Email already subscribed" }),
        { status: 400 }
      );
    }

    await db
      .collection("subscribers")
      .insertOne({ email, subscribedAt: new Date() });

    return new Response(
      JSON.stringify({ message: "Subscribed successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
      status: 500,
    });
  }
}
