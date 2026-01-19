import { Event, IEvent } from "@/database";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// Type for the route params
interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Validates slug format (lowercase alphanumeric with hyphens)
function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
  _req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    const { slug } = await params;

    // Validate slug is provided
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { message: "Slug parameter is required" },
        { status: 400 }
      );
    }

    // Validate slug format
    const trimmedSlug = slug.trim().toLowerCase();
    if (!isValidSlug(trimmedSlug)) {
      return NextResponse.json(
        { message: "Invalid slug format" },
        { status: 400 }
      );
    }

    await connectDB();

    // Query event by slug using lean() for better performance
    const event = await Event.findOne({ slug: trimmedSlug }).lean<IEvent>();

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event fetched successfully", event },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching event:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
