import { EntryLine } from "../EntryLine";

export const EntryLineList = ({ data }) =>
  data.map((entry) => <EntryLine key={entry.id} entry={entry} />);
// <EntryLine key={entry.id} {...entry} onDeleteEntry={onDeleteEntry} />
