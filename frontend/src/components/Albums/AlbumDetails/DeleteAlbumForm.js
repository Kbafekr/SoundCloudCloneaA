import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAnAlbum } from "../../../store/albums";
import { useHistory } from "react-router-dom";

import './DeleteAlbum.css'
function DeleteAlbum({setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory()
  // const {songId} = useParams()
  const user = useSelector(state => state.session.user)
  const album = useSelector(state => state.album)
  const albumId = useSelector(state => state.album.id)



  const handleSubmit = async () => {
      const response = dispatch(DeleteAnAlbum(albumId))
      setShowModal(false)
      history.push('/albums')
      return response
        }

  return (
    <div className="DeleteAlbum-outer">

    <form className="DeleteAlbum-inner" onSubmit={handleSubmit} autoComplete='off'>
      <p>Warning! This will permanently remove {album.title} from your library.</p>
        <div></div>
       <p>Are you sure you want to delete?</p>
      <button className="submitDeleteAlbum" type="submit">Delete album</button>
      <button className='cancelDeleteAlbum' onClick={() => setShowModal(false)}>Cancel</button>
    </form>
          </div>
  );
}

export default DeleteAlbum;