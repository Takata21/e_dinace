export async function POST() {
  return NextResponse.json({ signature: "POST" }, { status: 200 });
}
