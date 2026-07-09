# ModelsResourceShareWithUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** | When the share was created. | [optional] 
**Id** | Pointer to **string** | Unique identifier of the share. | [optional] 
**InUse** | Pointer to **bool** | Whether the target org is using the shared resource. | [optional] 
**OwnerOrganizationId** | Pointer to **string** | Organization that owns the shared resource (the parent org). | [optional] 
**ResourceId** | Pointer to **string** | Identifier of the shared secret or component. | [optional] 
**ResourceType** | Pointer to **string** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**TargetOrganizationId** | Pointer to **string** | Direct child the resource is shared with. | [optional] 
**TargetOrganizationName** | Pointer to **string** | Friendly name of the target org. | [optional] 

## Methods

### NewModelsResourceShareWithUsage

`func NewModelsResourceShareWithUsage() *ModelsResourceShareWithUsage`

NewModelsResourceShareWithUsage instantiates a new ModelsResourceShareWithUsage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareWithUsageWithDefaults

`func NewModelsResourceShareWithUsageWithDefaults() *ModelsResourceShareWithUsage`

NewModelsResourceShareWithUsageWithDefaults instantiates a new ModelsResourceShareWithUsage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsResourceShareWithUsage) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsResourceShareWithUsage) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsResourceShareWithUsage) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsResourceShareWithUsage) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetId

`func (o *ModelsResourceShareWithUsage) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsResourceShareWithUsage) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsResourceShareWithUsage) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsResourceShareWithUsage) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInUse

`func (o *ModelsResourceShareWithUsage) GetInUse() bool`

GetInUse returns the InUse field if non-nil, zero value otherwise.

### GetInUseOk

`func (o *ModelsResourceShareWithUsage) GetInUseOk() (*bool, bool)`

GetInUseOk returns a tuple with the InUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInUse

`func (o *ModelsResourceShareWithUsage) SetInUse(v bool)`

SetInUse sets InUse field to given value.

### HasInUse

`func (o *ModelsResourceShareWithUsage) HasInUse() bool`

HasInUse returns a boolean if a field has been set.

### GetOwnerOrganizationId

`func (o *ModelsResourceShareWithUsage) GetOwnerOrganizationId() string`

GetOwnerOrganizationId returns the OwnerOrganizationId field if non-nil, zero value otherwise.

### GetOwnerOrganizationIdOk

`func (o *ModelsResourceShareWithUsage) GetOwnerOrganizationIdOk() (*string, bool)`

GetOwnerOrganizationIdOk returns a tuple with the OwnerOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOrganizationId

`func (o *ModelsResourceShareWithUsage) SetOwnerOrganizationId(v string)`

SetOwnerOrganizationId sets OwnerOrganizationId field to given value.

### HasOwnerOrganizationId

`func (o *ModelsResourceShareWithUsage) HasOwnerOrganizationId() bool`

HasOwnerOrganizationId returns a boolean if a field has been set.

### GetResourceId

`func (o *ModelsResourceShareWithUsage) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *ModelsResourceShareWithUsage) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *ModelsResourceShareWithUsage) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *ModelsResourceShareWithUsage) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceType

`func (o *ModelsResourceShareWithUsage) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *ModelsResourceShareWithUsage) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *ModelsResourceShareWithUsage) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *ModelsResourceShareWithUsage) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetTargetOrganizationId

`func (o *ModelsResourceShareWithUsage) GetTargetOrganizationId() string`

GetTargetOrganizationId returns the TargetOrganizationId field if non-nil, zero value otherwise.

### GetTargetOrganizationIdOk

`func (o *ModelsResourceShareWithUsage) GetTargetOrganizationIdOk() (*string, bool)`

GetTargetOrganizationIdOk returns a tuple with the TargetOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetOrganizationId

`func (o *ModelsResourceShareWithUsage) SetTargetOrganizationId(v string)`

SetTargetOrganizationId sets TargetOrganizationId field to given value.

### HasTargetOrganizationId

`func (o *ModelsResourceShareWithUsage) HasTargetOrganizationId() bool`

HasTargetOrganizationId returns a boolean if a field has been set.

### GetTargetOrganizationName

`func (o *ModelsResourceShareWithUsage) GetTargetOrganizationName() string`

GetTargetOrganizationName returns the TargetOrganizationName field if non-nil, zero value otherwise.

### GetTargetOrganizationNameOk

`func (o *ModelsResourceShareWithUsage) GetTargetOrganizationNameOk() (*string, bool)`

GetTargetOrganizationNameOk returns a tuple with the TargetOrganizationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetOrganizationName

`func (o *ModelsResourceShareWithUsage) SetTargetOrganizationName(v string)`

SetTargetOrganizationName sets TargetOrganizationName field to given value.

### HasTargetOrganizationName

`func (o *ModelsResourceShareWithUsage) HasTargetOrganizationName() bool`

HasTargetOrganizationName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


