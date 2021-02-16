interface ErrorAction {
  type: string;
  error: string | null;
}

export interface ErrorState {
  [key: string]: string | null;
}

const getErrorMatches = (actionType: string) => {
  return /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);
};

function errorReducer(state: ErrorState = {}, action: ErrorAction): ErrorState {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === 'FAILURE' ? action.error : null,
  };
}

export default errorReducer;
