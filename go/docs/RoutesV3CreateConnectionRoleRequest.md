# RoutesV3CreateConnectionRoleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the role | [optional] 
**Name** | **string** | Name of the role | 
**Permissions** | **[]string** | Permission slugs for the role | 

## Methods

### NewRoutesV3CreateConnectionRoleRequest

`func NewRoutesV3CreateConnectionRoleRequest(name string, permissions []string, ) *RoutesV3CreateConnectionRoleRequest`

NewRoutesV3CreateConnectionRoleRequest instantiates a new RoutesV3CreateConnectionRoleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateConnectionRoleRequestWithDefaults

`func NewRoutesV3CreateConnectionRoleRequestWithDefaults() *RoutesV3CreateConnectionRoleRequest`

NewRoutesV3CreateConnectionRoleRequestWithDefaults instantiates a new RoutesV3CreateConnectionRoleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV3CreateConnectionRoleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3CreateConnectionRoleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3CreateConnectionRoleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3CreateConnectionRoleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3CreateConnectionRoleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3CreateConnectionRoleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3CreateConnectionRoleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetPermissions

`func (o *RoutesV3CreateConnectionRoleRequest) GetPermissions() []string`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *RoutesV3CreateConnectionRoleRequest) GetPermissionsOk() (*[]string, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *RoutesV3CreateConnectionRoleRequest) SetPermissions(v []string)`

SetPermissions sets Permissions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


