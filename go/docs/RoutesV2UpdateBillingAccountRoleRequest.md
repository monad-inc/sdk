# RoutesV2UpdateBillingAccountRoleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the role | [optional] 
**Name** | Pointer to **string** | Name of the role | [optional] 
**Permissions** | Pointer to **[]string** | Permission slugs for the role | [optional] 

## Methods

### NewRoutesV2UpdateBillingAccountRoleRequest

`func NewRoutesV2UpdateBillingAccountRoleRequest() *RoutesV2UpdateBillingAccountRoleRequest`

NewRoutesV2UpdateBillingAccountRoleRequest instantiates a new RoutesV2UpdateBillingAccountRoleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2UpdateBillingAccountRoleRequestWithDefaults

`func NewRoutesV2UpdateBillingAccountRoleRequestWithDefaults() *RoutesV2UpdateBillingAccountRoleRequest`

NewRoutesV2UpdateBillingAccountRoleRequestWithDefaults instantiates a new RoutesV2UpdateBillingAccountRoleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2UpdateBillingAccountRoleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2UpdateBillingAccountRoleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2UpdateBillingAccountRoleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV2UpdateBillingAccountRoleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPermissions

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetPermissions() []string`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *RoutesV2UpdateBillingAccountRoleRequest) GetPermissionsOk() (*[]string, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *RoutesV2UpdateBillingAccountRoleRequest) SetPermissions(v []string)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *RoutesV2UpdateBillingAccountRoleRequest) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


