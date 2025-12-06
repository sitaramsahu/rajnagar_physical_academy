import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Check if email exists already
    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      role: "User", // default role
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (err) {
    console.error("🔥 Error in register:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
