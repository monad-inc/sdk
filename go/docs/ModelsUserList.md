# ModelsUserList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Users** | Pointer to [**[]ModelsUser**](ModelsUser.md) |  | [optional] 

## Methods

### NewModelsUserList

`func NewModelsUserList() *ModelsUserList`

NewModelsUserList instantiates a new ModelsUserList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsUserListWithDefaults

`func NewModelsUserListWithDefaults() *ModelsUserList`

NewModelsUserListWithDefaults instantiates a new ModelsUserList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsUserList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsUserList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsUserList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsUserList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetUsers

`func (o *ModelsUserList) GetUsers() []ModelsUser`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *ModelsUserList) GetUsersOk() (*[]ModelsUser, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *ModelsUserList) SetUsers(v []ModelsUser)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *ModelsUserList) HasUsers() bool`

HasUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


