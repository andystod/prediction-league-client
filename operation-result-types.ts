/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type EntryQueryVariables = {
  id?: string | null,
};

export type EntryQuery = {
  entry:  {
    __typename: "Entry",
    user:  {
      __typename: "User",
      name: string | null,
    } | null,
    // Predictions picked by user
    predictions:  Array< {
      __typename: "Prediction",
      match:  {
        __typename: "Match",
        home: string | null,
        away: string | null,
        score:  {
          __typename: "Score",
          home: string | null,
          away: string | null,
        } | null,
      } | null,
      pick: string | null,
      points: number | null,
    } | null > | null,
  } | null,
};
