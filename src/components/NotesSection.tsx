import React from 'react';
import { Save, Trash2 } from 'lucide-react';

interface NotesSectionProps {
  notes: string[];
  currentNote: string;
  setCurrentNote: (note: string) => void;
  saveNote: () => void;
  deleteNote: (index: number) => void;
}

const NotesSection: React.FC<NotesSectionProps> = ({
  notes,
  currentNote,
  setCurrentNote,
  saveNote,
  deleteNote,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-blue-300">Consultation Notes</h2>
      
      {/* Notes Input */}
      <div className="mb-4">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Add your consultation notes here..."
          className="w-full h-32 bg-white/10 rounded-lg p-3 text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        />
        <button
          onClick={saveNote}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          Save Note
        </button>
      </div>

      {/* Saved Notes */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white/10 p-3 rounded-lg hover:bg-white/15 transition-colors group relative"
          >
            {note}
            <button
              onClick={() => deleteNote(index)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500/0 hover:bg-red-500 text-white/0 hover:text-white transition-all group-hover:bg-red-500/10 group-hover:text-white/50"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesSection;