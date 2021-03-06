export enum ActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_NONE = 'FETCH_PROFILE_NONE',
    FETCH_PROFILE_FETCHING = 'FETCH_PROFILE_FETCHING',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
    FETCH_PROFILE_REFETCHING = 'FETCH_PROFILE_REFETCHING',

    FETCH_ORGS = 'FETCH_ORGS',
    FETCH_ORGS_NONE = 'INITIAL_RENDER_ORGS',
    FETCH_ORGS_FETCHING = 'FETCH_ORGS_FETCHING',
    FETCH_ORGS_SUCCESS = 'FETCH_ORGS_SUCCESS',
    FETCH_ORGS_ERROR = 'FETCH_ORGS_ERROR',
    FETCH_ORGS_REFETCHING = 'FETCH_ORGS_REFETCHING',

    FETCH_NARRATIVE = 'FETCH_NARRATIVE',
    FETCH_NARRATIVE_NONE = 'FETCH_NARRATIVE_NONE',
    FETCH_NARRATIVE_FETCHING = 'FETCH_NARRATIVE_FETCHING',
    FETCH_NARRATIVE_SUCCESS = 'FETCH_NARRATIVE_SUCCESS',
    FETCH_NARRATIVE_ERROR = 'FETCH_NARRATIVE_ERROR'
};