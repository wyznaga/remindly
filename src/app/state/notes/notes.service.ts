import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const uuidv4 = require('uuid/v4');

interface Note {
  id: string;
  text: string;
  todos: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _notes = new BehaviorSubject<Note[]>([]);

  readonly notes$ = this._notes.asObservable();

  private get notes(): Note[] {
    return this._notes.getValue();
  }

  private set notes(newNotes: Note[]) {
    this._notes.next(newNotes);
  }

  createNote(text: string) {
    this.notes = [
      ...this.notes,
      {
        id: uuidv4(),
        text,
        todos: [],
      },
    ];
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  settTodos(id: string, todos: string[]) {
    const currentNotes = this.notes;
    const currentNote = currentNotes.find(note => note.id === id);

    if (currentNote) {
      const currentNoteIndex = currentNotes.indexOf(currentNote);
      currentNotes[currentNoteIndex] = {
        ...currentNote,
        todos,
      };
      this.notes = [...currentNotes];
    }
  }
}
