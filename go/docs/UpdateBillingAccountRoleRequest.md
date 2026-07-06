# UpdateBillingAccountRoleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the role. Nil preserves the current value. | [optional] 
**Name** | Pointer to **string** | Name of the role. Nil preserves the current value. | [optional] 
**Permissions** | Pointer to **[]string** | Permission slugs for the role. Nil preserves the current value; an empty slice clears all permissions. | [optional] 

## Methods

### NewUpdateBillingAccountRoleRequest

`func NewUpdateBillingAccountRoleRequest() *UpdateBillingAccountRoleRequest`

NewUpdateBillingAccountRoleRequest instantiates a new UpdateBillingAccountRoleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateBillingAccountRoleRequestWithDefaults

`func NewUpdateBillingAccountRoleRequestWithDefaults() *UpdateBillingAccountRoleRequest`

NewUpdateBillingAccountRoleRequestWithDefaults instantiates a new UpdateBillingAccountRoleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *UpdateBillingAccountRoleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateBillingAccountRoleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateBillingAccountRoleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateBillingAccountRoleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *UpdateBillingAccountRoleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateBillingAccountRoleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateBillingAccountRoleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateBillingAccountRoleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPermissions

`func (o *UpdateBillingAccountRoleRequest) GetPermissions() []string`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *UpdateBillingAccountRoleRequest) GetPermissionsOk() (*[]string, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *UpdateBillingAccountRoleRequest) SetPermissions(v []string)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *UpdateBillingAccountRoleRequest) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


