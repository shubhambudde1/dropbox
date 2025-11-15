import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { eq, and, isNull } from "drizzle-orm";
<<<<<<< HEAD

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryUserId = searchParams.get("userId");
    const parentId = searchParams.get("parentId");

    // Verify the user is requesting their own files
    if (!queryUserId || queryUserId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch files from database based on parentId
    let userFiles;
    if (parentId) {
      // Fetch files within a specific folder
      userFiles = await db
        .select()
        .from(files)
        .where(and(eq(files.userId, userId), eq(files.parentId, parentId)));
    } else {
      // Fetch root-level files (where parentId is null)
      userFiles = await db
        .select()
        .from(files)
        .where(and(eq(files.userId, userId), isNull(files.parentId)));
    }

    return NextResponse.json(userFiles);
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
=======
import { user } from "@heroui/theme";

export  async function  GET(Request: NextRequest) {
    try{
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const searchParams = Request.nextUrl.searchParams;
        const queryUserId = searchParams.get("userId");
        const parentId = searchParams.get("parentId")

        if (!queryUserId || queryUserId !== userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });   
        // Fetch all files for the authenticated user
       
        if(parentId){
            //fetch 
            userFiles = await db.select().from(files)
            .where(     
                and(
                    eq(files.userId, userId),   
                    eq(files.parentId, parentId),
        }else{
            userFiles = await db.select().from(files)
            .where(
                eq(files.userId, userId)
                isNull(files.parentId) // Fetch root level files
            );

        }

        return NextResponse.json(allFiles);
    }

}
>>>>>>> 39d38f8 (droply clone started)
