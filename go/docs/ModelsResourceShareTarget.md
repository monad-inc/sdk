# ModelsResourceShareTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InUse** | Pointer to **bool** | Whether the child is actively using the resource (references a shared secret, or binds a shared component in a pipeline node). Always false when not shared. | [optional] 
**Name** | Pointer to **string** | Friendly name of the child organization. | [optional] 
**OrganizationId** | Pointer to **string** | The direct child organization. | [optional] 
**Shared** | Pointer to **bool** | Whether the resource is currently shared to this child. | [optional] 
**SharedAt** | Pointer to **string** | When the share was created; nil when not shared. | [optional] 

## Methods

### NewModelsResourceShareTarget

`func NewModelsResourceShareTarget() *ModelsResourceShareTarget`

NewModelsResourceShareTarget instantiates a new ModelsResourceShareTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareTargetWithDefaults

`func NewModelsResourceShareTargetWithDefaults() *ModelsResourceShareTarget`

NewModelsResourceShareTargetWithDefaults instantiates a new ModelsResourceShareTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInUse

`func (o *ModelsResourceShareTarget) GetInUse() bool`

GetInUse returns the InUse field if non-nil, zero value otherwise.

### GetInUseOk

`func (o *ModelsResourceShareTarget) GetInUseOk() (*bool, bool)`

GetInUseOk returns a tuple with the InUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInUse

`func (o *ModelsResourceShareTarget) SetInUse(v bool)`

SetInUse sets InUse field to given value.

### HasInUse

`func (o *ModelsResourceShareTarget) HasInUse() bool`

HasInUse returns a boolean if a field has been set.

### GetName

`func (o *ModelsResourceShareTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsResourceShareTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsResourceShareTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsResourceShareTarget) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsResourceShareTarget) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsResourceShareTarget) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsResourceShareTarget) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsResourceShareTarget) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetShared

`func (o *ModelsResourceShareTarget) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *ModelsResourceShareTarget) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *ModelsResourceShareTarget) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *ModelsResourceShareTarget) HasShared() bool`

HasShared returns a boolean if a field has been set.

### GetSharedAt

`func (o *ModelsResourceShareTarget) GetSharedAt() string`

GetSharedAt returns the SharedAt field if non-nil, zero value otherwise.

### GetSharedAtOk

`func (o *ModelsResourceShareTarget) GetSharedAtOk() (*string, bool)`

GetSharedAtOk returns a tuple with the SharedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedAt

`func (o *ModelsResourceShareTarget) SetSharedAt(v string)`

SetSharedAt sets SharedAt field to given value.

### HasSharedAt

`func (o *ModelsResourceShareTarget) HasSharedAt() bool`

HasSharedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


