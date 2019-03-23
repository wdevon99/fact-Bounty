import axios from "axios";
import {
  FETCH_POSTS,
  LOADING,
  APPROVE_VOTE_COMPLETE,
  FAKE_VOTE_COMPLETE,
  MIX_VOTE_COMPLETE,
  VOTE_ERROR,
  INCREMENT_PAGE
} from "./actionTypes";
import PostsService from "../../services/PostsService";

export const fetchPosts = page => dispatch => {
  dispatch({ type: LOADING });
  PostsService.fetchPosts(page)
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts.docs
      });
      dispatch({ type: INCREMENT_PAGE });
    })
    .catch(err => {
      console.error("Server response invalid", err);
    });
};

export const approveVote = voteId => dispatch => {
  dispatch({ type: LOADING });
  PostsService.approveVote(voteId, 1)
    .then(res => {
      dispatch({
        type: APPROVE_VOTE_COMPLETE,
        id: voteId
      });
    })
    .catch(res => {
      dispatch({
        type: VOTE_ERROR,
        error: res
      });
    });
};

export const fakeVote = voteId => dispatch => {
  dispatch({ type: LOADING });
  PostsService.fakeVote(voteId, 1)
    .then(res => {
      dispatch({
        type: FAKE_VOTE_COMPLETE,
        id: voteId
      });
    })
    .catch(res => {
      dispatch({
        type: VOTE_ERROR,
        error: res
      });
    });
};

export const mixVote = voteId => dispatch => {
  dispatch({ type: LOADING });
  PostsService.mixVote(voteId, 1)
    .then(res => {
      dispatch({
        type: MIX_VOTE_COMPLETE,
        id: voteId
      });
    })
    .catch(res => {
      dispatch({
        type: VOTE_ERROR,
        error: res
      });
    });
};
