/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
      id
      userId
      name
      phone
      birthday
      workPlace
      interests
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        phone
        birthday
        workPlace
        interests
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
