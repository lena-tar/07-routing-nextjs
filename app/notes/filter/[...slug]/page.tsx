import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function FilterPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = slug?.[0];
  const filter = tag && tag !== "all" ? tag : undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", filter],
    queryFn: () => fetchNotes(1, "", filter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={filter} />
    </HydrationBoundary>
  );
}
