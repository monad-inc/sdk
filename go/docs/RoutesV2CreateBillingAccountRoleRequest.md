# RoutesV2CreateBillingAccountRoleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the role | [optional] 
**Name** | **string** | Name of the role | 
**Permissions** | **[]string** | Permission slugs for the role | 

## Methods

### NewRoutesV2CreateBillingAccountRoleRequest

`func NewRoutesV2CreateBillingAccountRoleRequest(name string, permissions []string, ) *RoutesV2CreateBillingAccountRoleRequest`

NewRoutesV2CreateBillingAccountRoleRequest instantiates a new RoutesV2CreateBillingAccountRoleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2CreateBillingAccountRoleRequestWithDefaults

`func NewRoutesV2CreateBillingAccountRoleRequestWithDefaults() *RoutesV2CreateBillingAccountRoleRequest`

NewRoutesV2CreateBillingAccountRoleRequestWithDefaults instantiates a new RoutesV2CreateBillingAccountRoleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2CreateBillingAccountRoleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2CreateBillingAccountRoleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2CreateBillingAccountRoleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetPermissions

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetPermissions() []string`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *RoutesV2CreateBillingAccountRoleRequest) GetPermissionsOk() (*[]string, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *RoutesV2CreateBillingAccountRoleRequest) SetPermissions(v []string)`

SetPermissions sets Permissions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


