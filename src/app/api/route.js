import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ signature: "MTakata21" }, { status: 200 });
}

// export async function POST(
//     request: Request,
//     res: NextApiResponse<ResponseData>
//   ) {
//     const body = await request.json();
//     const promptString = body.prompt;

//     if (!promptString) {
//       return new Response("you need a prompt", { status: 400 });
//     }

//     const aiResponse = await openai.createImage({
//       prompt: promptString,
//       n: 1,
//       size: "512x512",
//     });

//     const imageUrl = aiResponse.data.data[0].url;
//     return NextResponse.json({ url: imageUrl }, { status: 200 });
//   }
