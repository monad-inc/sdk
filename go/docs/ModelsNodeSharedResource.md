# ModelsNodeSharedResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name is the shared resource&#39;s name (component or secret). Populated for display context; empty if it could not be resolved. | [optional] 
**OwnerOrganizationId** | Pointer to **string** |  | [optional] 
**ResourceId** | Pointer to **string** |  | [optional] 
**ResourceType** | Pointer to **string** | ResourceShareTypeComponent | ResourceShareTypeSecret | [optional] 
**SubType** | Pointer to **string** | SubType is the connector kind for a shared component (component entries only). | [optional] 

## Methods

### NewModelsNodeSharedResource

`func NewModelsNodeSharedResource() *ModelsNodeSharedResource`

NewModelsNodeSharedResource instantiates a new ModelsNodeSharedResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsNodeSharedResourceWithDefaults

`func NewModelsNodeSharedResourceWithDefaults() *ModelsNodeSharedResource`

NewModelsNodeSharedResourceWithDefaults instantiates a new ModelsNodeSharedResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelsNodeSharedResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsNodeSharedResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsNodeSharedResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsNodeSharedResource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwnerOrganizationId

`func (o *ModelsNodeSharedResource) GetOwnerOrganizationId() string`

GetOwnerOrganizationId returns the OwnerOrganizationId field if non-nil, zero value otherwise.

### GetOwnerOrganizationIdOk

`func (o *ModelsNodeSharedResource) GetOwnerOrganizationIdOk() (*string, bool)`

GetOwnerOrganizationIdOk returns a tuple with the OwnerOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOrganizationId

`func (o *ModelsNodeSharedResource) SetOwnerOrganizationId(v string)`

SetOwnerOrganizationId sets OwnerOrganizationId field to given value.

### HasOwnerOrganizationId

`func (o *ModelsNodeSharedResource) HasOwnerOrganizationId() bool`

HasOwnerOrganizationId returns a boolean if a field has been set.

### GetResourceId

`func (o *ModelsNodeSharedResource) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *ModelsNodeSharedResource) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *ModelsNodeSharedResource) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *ModelsNodeSharedResource) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceType

`func (o *ModelsNodeSharedResource) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *ModelsNodeSharedResource) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *ModelsNodeSharedResource) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *ModelsNodeSharedResource) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetSubType

`func (o *ModelsNodeSharedResource) GetSubType() string`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *ModelsNodeSharedResource) GetSubTypeOk() (*string, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *ModelsNodeSharedResource) SetSubType(v string)`

SetSubType sets SubType field to given value.

### HasSubType

`func (o *ModelsNodeSharedResource) HasSubType() bool`

HasSubType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


