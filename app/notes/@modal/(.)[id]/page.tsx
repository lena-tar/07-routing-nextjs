import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: PageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
