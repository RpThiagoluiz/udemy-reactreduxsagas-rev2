import { EntryLine } from '../EntryLine';

export const EntryLineList = ({ data, onDeleteEntry }) =>
  data.map((entry) => (
    <EntryLine key={entry.id} entry={entry} onDeleteEntry={onDeleteEntry} />
  ));
//<EntryLine key={entry.id} {...entry} onDeleteEntry={onDeleteEntry} />
