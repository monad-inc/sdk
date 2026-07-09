# ModelsResourceShare

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** | When the share was created. | [optional] 
**Id** | Pointer to **string** | Unique identifier of the share. | [optional] 
**OwnerOrganizationId** | Pointer to **string** | Organization that owns the shared resource (the parent org). | [optional] 
**ResourceId** | Pointer to **string** | Identifier of the shared secret or component. | [optional] 
**ResourceType** | Pointer to **string** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**TargetOrganizationId** | Pointer to **string** | Direct child the resource is shared with. | [optional] 

## Methods

### NewModelsResourceShare

`func NewModelsResourceShare() *ModelsResourceShare`

NewModelsResourceShare instantiates a new ModelsResourceShare object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareWithDefaults

`func NewModelsResourceShareWithDefaults() *ModelsResourceShare`

NewModelsResourceShareWithDefaults instantiates a new ModelsResourceShare object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsResourceShare) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsResourceShare) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsResourceShare) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsResourceShare) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetId

`func (o *ModelsResourceShare) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsResourceShare) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsResourceShare) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsResourceShare) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOwnerOrganizationId

`func (o *ModelsResourceShare) GetOwnerOrganizationId() string`

GetOwnerOrganizationId returns the OwnerOrganizationId field if non-nil, zero value otherwise.

### GetOwnerOrganizationIdOk

`func (o *ModelsResourceShare) GetOwnerOrganizationIdOk() (*string, bool)`

GetOwnerOrganizationIdOk returns a tuple with the OwnerOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOrganizationId

`func (o *ModelsResourceShare) SetOwnerOrganizationId(v string)`

SetOwnerOrganizationId sets OwnerOrganizationId field to given value.

### HasOwnerOrganizationId

`func (o *ModelsResourceShare) HasOwnerOrganizationId() bool`

HasOwnerOrganizationId returns a boolean if a field has been set.

### GetResourceId

`func (o *ModelsResourceShare) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *ModelsResourceShare) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *ModelsResourceShare) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *ModelsResourceShare) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceType

`func (o *ModelsResourceShare) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *ModelsResourceShare) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *ModelsResourceShare) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *ModelsResourceShare) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetTargetOrganizationId

`func (o *ModelsResourceShare) GetTargetOrganizationId() string`

GetTargetOrganizationId returns the TargetOrganizationId field if non-nil, zero value otherwise.

### GetTargetOrganizationIdOk

`func (o *ModelsResourceShare) GetTargetOrganizationIdOk() (*string, bool)`

GetTargetOrganizationIdOk returns a tuple with the TargetOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetOrganizationId

`func (o *ModelsResourceShare) SetTargetOrganizationId(v string)`

SetTargetOrganizationId sets TargetOrganizationId field to given value.

### HasTargetOrganizationId

`func (o *ModelsResourceShare) HasTargetOrganizationId() bool`

HasTargetOrganizationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


