# RoutesV2CreateRoleV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | 
**PermissionIds** | **[]string** |  | 

## Methods

### NewRoutesV2CreateRoleV2Request

`func NewRoutesV2CreateRoleV2Request(name string, permissionIds []string, ) *RoutesV2CreateRoleV2Request`

NewRoutesV2CreateRoleV2Request instantiates a new RoutesV2CreateRoleV2Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2CreateRoleV2RequestWithDefaults

`func NewRoutesV2CreateRoleV2RequestWithDefaults() *RoutesV2CreateRoleV2Request`

NewRoutesV2CreateRoleV2RequestWithDefaults instantiates a new RoutesV2CreateRoleV2Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV2CreateRoleV2Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2CreateRoleV2Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2CreateRoleV2Request) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2CreateRoleV2Request) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2CreateRoleV2Request) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2CreateRoleV2Request) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2CreateRoleV2Request) SetName(v string)`

SetName sets Name field to given value.


### GetPermissionIds

`func (o *RoutesV2CreateRoleV2Request) GetPermissionIds() []string`

GetPermissionIds returns the PermissionIds field if non-nil, zero value otherwise.

### GetPermissionIdsOk

`func (o *RoutesV2CreateRoleV2Request) GetPermissionIdsOk() (*[]string, bool)`

GetPermissionIdsOk returns a tuple with the PermissionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionIds

`func (o *RoutesV2CreateRoleV2Request) SetPermissionIds(v []string)`

SetPermissionIds sets PermissionIds field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


