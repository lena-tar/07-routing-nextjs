"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotesByTag } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const {
    data: notes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotesByTag(tag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return <NoteList notes={notes} />;
}
