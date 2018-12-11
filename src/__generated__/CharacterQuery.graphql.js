/**
 * @flow
 * @relayHash 7bdc2e1ab4468d4c1b8de30dd07ef66d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CharacterQueryVariables = {||};
export type CharacterQueryResponse = {|
  +allFighters: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +profileImage: ?string,
    +firstName: ?string,
    +lastName: ?string,
    +nickname: ?string,
    +weightClass: ?string,
    +wins: ?number,
    +losses: ?number,
    +draws: ?number,
    +beltThumbnail: ?string,
    +link: ?string,
  |}>
|};
export type CharacterQuery = {|
  variables: CharacterQueryVariables,
  response: CharacterQueryResponse,
|};
*/


/*
query CharacterQuery {
  allFighters {
    _id
    profileImage
    firstName
    lastName
    nickname
    weightClass
    wins
    losses
    draws
    beltThumbnail
    link
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "weightClass",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileImage",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "wins",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "losses",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "draws",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beltThumbnail",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "link",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CharacterQuery",
  "id": null,
  "text": "query CharacterQuery {\n  allFighters {\n    _id\n    profileImage\n    firstName\n    lastName\n    nickname\n    weightClass\n    wins\n    losses\n    draws\n    beltThumbnail\n    link\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFighters",
        "storageKey": null,
        "args": null,
        "concreteType": "Fighter",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          v3,
          v4,
          v5,
          v6,
          v7,
          v8,
          v9,
          v10
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFighters",
        "storageKey": null,
        "args": null,
        "concreteType": "Fighter",
        "plural": true,
        "selections": [
          v6,
          v1,
          v2,
          v3,
          v4,
          v0,
          v5,
          v7,
          v8,
          v9,
          v10,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c82f784f8ce54a396af242988e0162bd';
module.exports = node;
