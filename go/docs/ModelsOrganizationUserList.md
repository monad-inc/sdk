# ModelsOrganizationUserList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Users** | Pointer to [**[]ModelsOrganizationUser**](ModelsOrganizationUser.md) |  | [optional] 

## Methods

### NewModelsOrganizationUserList

`func NewModelsOrganizationUserList() *ModelsOrganizationUserList`

NewModelsOrganizationUserList instantiates a new ModelsOrganizationUserList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsOrganizationUserListWithDefaults

`func NewModelsOrganizationUserListWithDefaults() *ModelsOrganizationUserList`

NewModelsOrganizationUserListWithDefaults instantiates a new ModelsOrganizationUserList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsOrganizationUserList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsOrganizationUserList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsOrganizationUserList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsOrganizationUserList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetUsers

`func (o *ModelsOrganizationUserList) GetUsers() []ModelsOrganizationUser`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *ModelsOrganizationUserList) GetUsersOk() (*[]ModelsOrganizationUser, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *ModelsOrganizationUserList) SetUsers(v []ModelsOrganizationUser)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *ModelsOrganizationUserList) HasUsers() bool`

HasUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


