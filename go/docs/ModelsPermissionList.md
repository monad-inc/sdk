# ModelsPermissionList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Permissions** | Pointer to [**[]ModelsPermission**](ModelsPermission.md) |  | [optional] 

## Methods

### NewModelsPermissionList

`func NewModelsPermissionList() *ModelsPermissionList`

NewModelsPermissionList instantiates a new ModelsPermissionList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPermissionListWithDefaults

`func NewModelsPermissionListWithDefaults() *ModelsPermissionList`

NewModelsPermissionListWithDefaults instantiates a new ModelsPermissionList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsPermissionList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsPermissionList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsPermissionList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsPermissionList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetPermissions

`func (o *ModelsPermissionList) GetPermissions() []ModelsPermission`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *ModelsPermissionList) GetPermissionsOk() (*[]ModelsPermission, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *ModelsPermissionList) SetPermissions(v []ModelsPermission)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *ModelsPermissionList) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


