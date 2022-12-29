import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: UserResponse;
  deleteUser: Scalars["String"];
  loginUser: UserResponse;
  logoutUser: Scalars["Boolean"];
};

export type MutationCreateUserArgs = {
  options: UserRegisterInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"];
};

export type MutationLoginUserArgs = {
  options: UserLoginInput;
};

export type Query = {
  __typename?: "Query";
  getCurrentUser?: Maybe<User>;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  createdDate: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["Float"];
  password: Scalars["String"];
  updatedDate: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UserLoginInput = {
  email?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UserRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreateUserMutationVariables = Exact<{
  options: UserRegisterInput;
}>;

export type CreateUserMutation = { __typename?: "Mutation" } & {
  createUser: { __typename?: "UserResponse" } & {
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "username" | "email" | "password">
    >;
    errors?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "field" | "message">
      >
    >;
  };
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["Float"];
}>;

export type DeleteUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteUser"
>;

export type LoginUserMutationVariables = Exact<{
  options: UserLoginInput;
}>;

export type LoginUserMutation = { __typename?: "Mutation" } & {
  loginUser: { __typename?: "UserResponse" } & {
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "username" | "email" | "password">
    >;
    errors?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "field" | "message">
      >
    >;
  };
};

export type LogoutUserMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logoutUser"
>;

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = { __typename?: "Query" } & {
  getCurrentUser?: Maybe<
    { __typename?: "User" } & Pick<User, "username" | "email">
  >;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<
      User,
      "id" | "email" | "username" | "createdDate" | "updatedDate"
    >
  >;
};

export const CreateUserDocument = gql`
  mutation CreateUser($options: UserRegisterInput!) {
    createUser(options: $options) {
      user {
        username
        email
        password
      }
      errors {
        field
        message
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: Float!) {
    deleteUser(id: $id)
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const LoginUserDocument = gql`
  mutation LoginUser($options: UserLoginInput!) {
    loginUser(options: $options) {
      user {
        username
        email
        password
      }
      errors {
        field
        message
      }
    }
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    options
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export const LogoutUserDocument = gql`
  mutation LogoutUser {
    logoutUser
  }
`;
export type LogoutUserMutationFn = Apollo.MutationFunction<
  LogoutUserMutation,
  LogoutUserMutationVariables
>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutUserMutation,
    LogoutUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(
    LogoutUserDocument,
    options
  );
}
export type LogoutUserMutationHookResult = ReturnType<
  typeof useLogoutUserMutation
>;
export type LogoutUserMutationResult =
  Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<
  LogoutUserMutation,
  LogoutUserMutationVariables
>;
export const GetCurrentUserDocument = gql`
  query GetCurrentUser {
    getCurrentUser {
      username
      email
    }
  }
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      email
      username
      createdDate
      updatedDate
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
