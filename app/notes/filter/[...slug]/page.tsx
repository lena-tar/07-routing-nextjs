import { fetchNotesByTag } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function FilterPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = slug?.[0];
  const filter = tag && tag !== "all" ? tag : undefined;

  const notes = await fetchNotesByTag(filter);

  return <NoteList notes={notes} />;
}
