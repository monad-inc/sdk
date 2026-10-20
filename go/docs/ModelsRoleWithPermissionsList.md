# ModelsRoleWithPermissionsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Roles** | Pointer to [**[]ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md) |  | [optional] 

## Methods

### NewModelsRoleWithPermissionsList

`func NewModelsRoleWithPermissionsList() *ModelsRoleWithPermissionsList`

NewModelsRoleWithPermissionsList instantiates a new ModelsRoleWithPermissionsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsRoleWithPermissionsListWithDefaults

`func NewModelsRoleWithPermissionsListWithDefaults() *ModelsRoleWithPermissionsList`

NewModelsRoleWithPermissionsListWithDefaults instantiates a new ModelsRoleWithPermissionsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsRoleWithPermissionsList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsRoleWithPermissionsList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsRoleWithPermissionsList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsRoleWithPermissionsList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetRoles

`func (o *ModelsRoleWithPermissionsList) GetRoles() []ModelsRoleWithPermissions`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *ModelsRoleWithPermissionsList) GetRolesOk() (*[]ModelsRoleWithPermissions, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *ModelsRoleWithPermissionsList) SetRoles(v []ModelsRoleWithPermissions)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *ModelsRoleWithPermissionsList) HasRoles() bool`

HasRoles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


