# ModelsResourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ParentId** | Pointer to **string** | e.g., pipeline ID if resource is a node | [optional] 
**ParentType** | Pointer to **string** | For hierarchical resources | [optional] 
**ResourceId** | Pointer to **string** |  | [optional] 
**ResourceType** | Pointer to **string** | \&quot;pipeline\&quot;, \&quot;node\&quot;, \&quot;organization\&quot; | [optional] 

## Methods

### NewModelsResourceReference

`func NewModelsResourceReference() *ModelsResourceReference`

NewModelsResourceReference instantiates a new ModelsResourceReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceReferenceWithDefaults

`func NewModelsResourceReferenceWithDefaults() *ModelsResourceReference`

NewModelsResourceReferenceWithDefaults instantiates a new ModelsResourceReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetParentId

`func (o *ModelsResourceReference) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *ModelsResourceReference) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *ModelsResourceReference) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *ModelsResourceReference) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### GetParentType

`func (o *ModelsResourceReference) GetParentType() string`

GetParentType returns the ParentType field if non-nil, zero value otherwise.

### GetParentTypeOk

`func (o *ModelsResourceReference) GetParentTypeOk() (*string, bool)`

GetParentTypeOk returns a tuple with the ParentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentType

`func (o *ModelsResourceReference) SetParentType(v string)`

SetParentType sets ParentType field to given value.

### HasParentType

`func (o *ModelsResourceReference) HasParentType() bool`

HasParentType returns a boolean if a field has been set.

### GetResourceId

`func (o *ModelsResourceReference) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *ModelsResourceReference) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *ModelsResourceReference) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *ModelsResourceReference) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceType

`func (o *ModelsResourceReference) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *ModelsResourceReference) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *ModelsResourceReference) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *ModelsResourceReference) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


