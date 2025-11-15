import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";
import { eq, and } from "drizzle-orm";
import path from "path";


export async function POST(request: NextRequest) 
[
    try {
    const { userId } = await auth();
         if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const { name,userId: bodyUserId, parentId=null } = body;

    if (bodyUserId !== userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    if (!name || typeof name !== "string" || name.trim() === "") {
        return NextResponse.json({ error: "Invalid folder name" }, { status: 400 });
    }

    if(parentId) {
        const [parentFolder] = await db.select().from(files)
            where: and(
                eq(files.userId, userId),
                eq(files.id, parentId), 
                eq(files.isFolder, true)
            )
        );
         if (!parentFolder) {
            return NextResponse.json({ error: "Parent folder not found" }, { status: 404 });
        }
    }
const folderData = {
        id: uuidv4(),
        name: name.trim(),
        path: `/folders/${userId}/${name.trim()}`,
        size: 0,
        type: "folder",
        userId,
        parentId: parentId || null,
        userId,
        isFolder: true,
        isStarred: false,
        isTrash: false,
    };   


}
await db.insert(files).values(folderData).returning();
    return NextResponse.json({
        sucess: true,
        message: "Folder created successfully", 
        folder:newFolder
    })

        });

       
    }
]