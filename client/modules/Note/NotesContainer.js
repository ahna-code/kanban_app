import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from '../Note/NoteActions';
import { updateNoteRequest, deleteNoteRequest, editNote } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
