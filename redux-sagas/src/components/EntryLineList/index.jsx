import { EntryLine } from "../EntryLine";

export const EntryLineList = ({ data, editEntry }) =>
  data.map((entry) => (
    <EntryLine key={entry.id} entry={entry} editEntry={editEntry} />
  ));
// <EntryLine key={entry.id} {...entry} onDeleteEntry={onDeleteEntry} />
