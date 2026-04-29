# CreateBillingAccountRoleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the role | [optional] 
**Name** | **string** | Name of the role | 
**Permissions** | **[]string** | Permission slugs for the role | 

## Methods

### NewCreateBillingAccountRoleRequest

`func NewCreateBillingAccountRoleRequest(name string, permissions []string, ) *CreateBillingAccountRoleRequest`

NewCreateBillingAccountRoleRequest instantiates a new CreateBillingAccountRoleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateBillingAccountRoleRequestWithDefaults

`func NewCreateBillingAccountRoleRequestWithDefaults() *CreateBillingAccountRoleRequest`

NewCreateBillingAccountRoleRequestWithDefaults instantiates a new CreateBillingAccountRoleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreateBillingAccountRoleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateBillingAccountRoleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateBillingAccountRoleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateBillingAccountRoleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *CreateBillingAccountRoleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateBillingAccountRoleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateBillingAccountRoleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetPermissions

`func (o *CreateBillingAccountRoleRequest) GetPermissions() []string`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *CreateBillingAccountRoleRequest) GetPermissionsOk() (*[]string, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *CreateBillingAccountRoleRequest) SetPermissions(v []string)`

SetPermissions sets Permissions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


