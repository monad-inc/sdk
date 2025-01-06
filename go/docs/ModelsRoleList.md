# ModelsRoleList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Roles** | Pointer to [**[]ModelsRole**](ModelsRole.md) |  | [optional] 

## Methods

### NewModelsRoleList

`func NewModelsRoleList() *ModelsRoleList`

NewModelsRoleList instantiates a new ModelsRoleList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsRoleListWithDefaults

`func NewModelsRoleListWithDefaults() *ModelsRoleList`

NewModelsRoleListWithDefaults instantiates a new ModelsRoleList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsRoleList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsRoleList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsRoleList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsRoleList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetRoles

`func (o *ModelsRoleList) GetRoles() []ModelsRole`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *ModelsRoleList) GetRolesOk() (*[]ModelsRole, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *ModelsRoleList) SetRoles(v []ModelsRole)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *ModelsRoleList) HasRoles() bool`

HasRoles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


