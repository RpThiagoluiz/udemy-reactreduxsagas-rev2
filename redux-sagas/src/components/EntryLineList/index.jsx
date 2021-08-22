import { EntryLine } from '../EntryLine';

export const EntryLineList = ({ data, onDeleteEntry, editEntry }) =>
  data.map((entry) => (
    <EntryLine
      key={entry.id}
      entry={entry}
      onDeleteEntry={onDeleteEntry}
      editEntry={editEntry}
    />
  ));
// <EntryLine key={entry.id} {...entry} onDeleteEntry={onDeleteEntry} />
