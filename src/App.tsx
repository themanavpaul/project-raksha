import React, { useState, useEffect } from 'react';
import { Shield, Download, MessageSquare, Globe, ThumbsUp, Save } from 'lucide-react';
import NotesSection from './components/NotesSection';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState<string[]>(() => {
    const savedNotes = localStorage.getItem('consultingNotes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    localStorage.setItem('consultingNotes', JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const downloadNotes = () => {
    const content = notes.join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'raksha-consulting-notes.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-2 mb-4">
            <Shield className="w-16 h-16 text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Raksha AI
          </h1>
          <p className="text-blue-200">Your Personal Cybersecurity Consultant</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Voice Widget */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="relative">
              <iframe
	#Widget here
                ></iframe>
            </div>
          </div>

          {/* Right Column - Notes & Actions */}
          <div className="space-y-6">
            <NotesSection
              notes={notes}
              currentNote={currentNote}
              setCurrentNote={setCurrentNote}
              saveNote={saveNote}
              deleteNote={deleteNote}
            />

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => window.open('https://forms.gle/XWYjSNc78Bc1Lq8F8', '_blank')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <ThumbsUp className="w-5 h-5" />
                Feedback
              </button>
              <button
                onClick={() => window.open('https://cybercrime.gov.in/', '_blank')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Globe className="w-5 h-5" />
                Website
              </button>
              <button
                onClick={downloadNotes}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 col-span-2"
              >
                <Download className="w-5 h-5" />
                Download Notes
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;